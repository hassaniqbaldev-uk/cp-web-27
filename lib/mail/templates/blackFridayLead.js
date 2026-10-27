function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

const row = (label, value) =>
  value
    ? `<tr>
        <td style="padding:6px 14px;color:#777;font:14px/1.5 Arial,sans-serif;vertical-align:top;white-space:nowrap;">${label}</td>
        <td style="padding:6px 14px;color:#111;font:14px/1.5 Arial,sans-serif;white-space:pre-wrap;">${escapeHtml(value)}</td>
      </tr>`
    : "";

// Builds the lead notification email from the Black Friday quote form data.
export function blackFridayLeadEmail(data) {
  const subject = `Black Friday lead — ${data.name}${
    data.agency ? ` (${data.agency})` : ""
  }`;

  const html = `
    <div style="font:14px/1.5 Arial,sans-serif;color:#111;">
      <h2 style="margin:0 0 16px;font:bold 18px Arial,sans-serif;">New Black Friday enquiry</h2>
      <table style="border-collapse:collapse;">
        ${row("Name", data.name)}
        ${row("Agency", data.agency)}
        ${row("Email", data.email)}
        ${row("Phone", data.phone)}
        ${row("Preferred contact", data.contact)}
        ${row("Job type", data.jobType)}
        ${row("Website", data.website)}
        ${row("Engagement", data.engagement)}
        ${row("Updates opt-in", data.updates ? "Yes" : "No")}
        ${row("Details", data.details)}
      </table>
    </div>`;

  return { subject, html };
}
