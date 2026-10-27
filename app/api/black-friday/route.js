import { NextResponse } from "next/server";
import { z } from "zod";
import { checkSpam } from "@/lib/spam/spamProtection";
import { spamConfig } from "@/lib/spam/spamConfig";
import { sendMail } from "@/lib/mail/smtp";
import { blackFridayLeadEmail } from "@/lib/mail/templates/blackFridayLead";

export const runtime = "nodejs";

const schema = z.object({
  jobType: z.string().max(100).default(""),
  website: z.string().max(300).default(""),
  details: z.string().max(5000).default(""),
  engagement: z.string().max(100).default(""),
  name: z.string().trim().min(1, "Name is required").max(120),
  agency: z.string().max(120).default(""),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().max(60).default(""),
  contact: z.string().max(60).default(""),
  updates: z.boolean().default(false),
  token: z.string().nullish(),
  [spamConfig.honeypotField]: z.string().optional(),
});

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "bad-request" },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation" },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const spam = await checkSpam({
    action: spamConfig.actions.blackFriday,
    token: data.token,
    honeypot: data[spamConfig.honeypotField],
    ip,
  });

  if (!spam.ok) {
    const status = spam.reason === "rate-limited" ? 429 : 400;
    return NextResponse.json({ ok: false, error: "rejected" }, { status });
  }

  try {
    const { subject, html } = blackFridayLeadEmail(data);
    await sendMail({ subject, html, replyTo: data.email });
  } catch (err) {
    console.error("[black-friday] email send failed:", err);
    return NextResponse.json(
      { ok: false, error: "send-failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
