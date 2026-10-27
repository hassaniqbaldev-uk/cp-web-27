import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const port = Number(process.env.SMTP_PORT) || 587;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return transporter;
}

export async function sendMail({ subject, html, replyTo, to }) {
  return getTransporter().sendMail({
    from: process.env.SMTP_FROM,
    to: to ?? process.env.SMTP_TO,
    subject,
    html,
    replyTo,
  });
}
