// Shared spam-protection config (client + server).
export const spamConfig = {
  // Hidden input bots tend to fill; real users never see it.
  honeypotField: "company_url",

  recaptcha: {
    // reCAPTCHA v3 score below this is treated as a bot (0 bot … 1 human).
    threshold: 0.5,
    verifyUrl: "https://www.google.com/recaptcha/api/siteverify",
    scriptBase: "https://www.google.com/recaptcha/api.js",
  },

  // In-memory backstop (resets per serverless instance — not shared state).
  rateLimit: { windowMs: 60_000, max: 5 },

  // reCAPTCHA action strings — must match on client and server.
  actions: {
    blackFriday: "black_friday",
  },
};
