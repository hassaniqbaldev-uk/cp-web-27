import { spamConfig } from "./spamConfig";

// ip -> recent submission timestamps. In-memory only: a backstop, not shared
// across serverless instances, so don't treat it as real rate limiting.
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const { windowMs, max } = spamConfig.rateLimit;
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < windowMs);

  recent.push(now);
  hits.set(ip, recent);

  return recent.length > max;
}

async function verifyRecaptcha(token, action) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // No key configured (e.g. local dev) — skip the check, like the reference.
  if (!secret) return { ok: true, skipped: true };
  if (!token) return { ok: false, reason: "missing-token" };

  let data;
  try {
    const response = await fetch(spamConfig.recaptcha.verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    data = await response.json();
  } catch {
    return { ok: false, reason: "recaptcha-unreachable" };
  }

  if (!data.success) return { ok: false, reason: "recaptcha-failed" };
  if (action && data.action !== action) {
    return { ok: false, reason: "action-mismatch" };
  }
  if (
    typeof data.score === "number" &&
    data.score < spamConfig.recaptcha.threshold
  ) {
    return { ok: false, reason: "low-score" };
  }

  return { ok: true, score: data.score };
}

// Runs the honeypot, rate-limit and reCAPTCHA checks. Returns { ok, reason }.
export async function checkSpam({ action, token, honeypot, ip }) {
  // A filled honeypot means a bot — reject quietly.
  if (honeypot) return { ok: false, reason: "honeypot" };
  if (ip && rateLimited(ip)) return { ok: false, reason: "rate-limited" };

  const recaptcha = await verifyRecaptcha(token, action);
  if (!recaptcha.ok) return { ok: false, reason: recaptcha.reason };

  return { ok: true };
}
