import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getAllArticles } from "@/lib/articles";

export async function GET(req: NextRequest) {
  // Verify secret so only Cloud Scheduler can trigger this
  const secret = req.headers.get("x-cron-secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL;
  if (!apiKey || !audienceId || !fromEmail) {
    return NextResponse.json({ error: "Server-Konfigurationsfehler." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  // Find articles published yesterday
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yyyyMmDd = yesterday.toISOString().slice(0, 10);

  const newArticles = getAllArticles().filter((a) => a.date === yyyyMmDd);

  if (newArticles.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, reason: "No new articles today." });
  }

  // Fetch all audience contacts
  const contactsRes = await resend.contacts.list({ audienceId });
  const contacts = (contactsRes.data?.data ?? []).filter((c) => !c.unsubscribed);

  if (contacts.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, reason: "No active subscribers." });
  }

  const siteUrl = "https://xn--nhro-loa.ch";

  const articleCards = newArticles
    .map(
      (a) => `
      <tr>
        <td style="padding: 24px 0; border-bottom: 1px solid #E5E5E3;">
          <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #666666;">${a.category} · ${a.readingTime} Min</p>
          <h2 style="margin: 0 0 8px; font-size: 20px; font-weight: 800; color: #111111; line-height: 1.3;">${a.title}</h2>
          <p style="margin: 0 0 16px; font-size: 15px; color: #444444; line-height: 1.6;">${a.description}</p>
          <a href="${siteUrl}/artikel/${a.slug}" style="display: inline-block; background: #1A3D2B; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 10px 20px; border-radius: 4px;">Artikel lesen →</a>
        </td>
      </tr>`
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin: 0; padding: 0; background: #F5F5F3; font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #F5F5F3; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #ffffff;">
          <!-- Header -->
          <tr>
            <td style="background: #1A3D2B; padding: 24px 32px;">
              <p style="margin: 0; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: -0.03em;">NÄHRO</p>
            </td>
          </tr>
          <!-- Intro -->
          <tr>
            <td style="padding: 32px 32px 0;">
              <h1 style="margin: 0 0 8px; font-size: 26px; font-weight: 900; color: #111111; line-height: 1.2;">${newArticles.length === 1 ? "Neuer Artikel" : `${newArticles.length} neue Artikel`} auf NÄHRO</h1>
              <p style="margin: 0; font-size: 15px; color: #666666;">Wissenschaftlich. Ohne Umwege.</p>
            </td>
          </tr>
          <!-- Articles -->
          <tr>
            <td style="padding: 0 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${articleCards}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 32px; border-top: 1px solid #E5E5E3;">
              <p style="margin: 0; font-size: 12px; color: #999999; line-height: 1.6;">
                Du erhältst diese E-Mail, weil du dich auf <a href="${siteUrl}" style="color: #1A3D2B;">nähro.ch</a> angemeldet hast.<br>
                <a href="${siteUrl}/datenschutz" style="color: #999999;">Datenschutz</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  // Send to all subscribers
  let sent = 0;
  for (const contact of contacts) {
    try {
      await resend.emails.send({
        from: fromEmail,
        to: contact.email,
        subject: `${newArticles[0].title}${newArticles.length > 1 ? ` + ${newArticles.length - 1} weitere` : ""} — NÄHRO`,
        html,
      });
      sent++;
    } catch (err) {
      console.error(`Failed to send to ${contact.email}:`, err);
    }
  }

  return NextResponse.json({ ok: true, sent, articles: newArticles.map((a) => a.slug) });
}
