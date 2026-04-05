import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getAllArticles } from "@/lib/articles";

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_URL = "https://xn--nhro-loa.ch";

function buildEmailHtml(articles: ReturnType<typeof getAllArticles>) {
  const articleBlocks = articles
    .map(
      (a) => `
    <tr>
      <td style="padding: 0 0 28px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-bottom: 6px;">
              <span style="display:inline-block; background:#E8F5E9; color:#1A3D2B; font-size:11px; font-weight:700; padding:3px 10px; border-radius:20px; letter-spacing:.04em; text-transform:uppercase;">
                ${a.category}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 8px;">
              <a href="${SITE_URL}/artikel/${a.slug}"
                 style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size:20px; font-weight:800; color:#111111; text-decoration:none; letter-spacing:-.03em; line-height:1.2;">
                ${a.title}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 10px;">
              <p style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size:15px; color:#666666; margin:0; line-height:1.6;">
                ${a.description}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <a href="${SITE_URL}/artikel/${a.slug}"
                 style="display:inline-block; background:#1A3D2B; color:#ffffff; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size:13px; font-weight:700; padding:9px 18px; border-radius:8px; text-decoration:none; letter-spacing:.01em;">
                Artikel lesen →
              </a>
            </td>
          </tr>
        </table>
        <hr style="border:none; border-top:1px solid #E5E5E3; margin-top:28px;" />
      </td>
    </tr>`
    )
    .join("\n");

  const subject =
    articles.length === 1
      ? `Neuer Artikel: ${articles[0].title}`
      : `${articles.length} neue Artikel auf NÄHRO`;

  const html = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:0; background:#F5F5F3;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F5F5F3; padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background:#1A3D2B; padding:28px 40px; border-radius:16px 16px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size:22px; font-weight:900; color:#ffffff; letter-spacing:-.04em;">
                      NÄHRO
                    </div>
                    <div style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size:12px; color:rgba(255,255,255,.6); margin-top:2px; letter-spacing:.03em;">
                      Ernährung. Erklärt.
                    </div>
                  </td>
                  <td align="right">
                    <span style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size:11px; color:rgba(255,255,255,.5); font-weight:600; letter-spacing:.05em; text-transform:uppercase;">
                      Neue Artikel
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff; padding:36px 40px 12px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-bottom:28px;">
                    <p style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size:15px; color:#666666; margin:0; line-height:1.6;">
                      ${articles.length === 1 ? "Ein neuer Artikel" : `${articles.length} neue Artikel`} wurde${articles.length === 1 ? "" : "n"} veröffentlicht — quellenbasiert und ohne Umwege erklärt.
                    </p>
                  </td>
                </tr>
                ${articleBlocks}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5F5F3; padding:24px 40px; border-radius:0 0 16px 16px; border-top:1px solid #E5E5E3;">
              <p style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size:12px; color:#999999; margin:0; line-height:1.7; text-align:center;">
                Du erhältst diese E-Mail, weil du NÄHRO abonniert hast.<br/>
                <a href="${SITE_URL}/abmelden?email={{email}}" style="color:#666666;">Abmelden</a>
                &nbsp;·&nbsp;
                <a href="${SITE_URL}" style="color:#666666;">nähro.ch</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { html, subject };
}

export async function GET(req: NextRequest) {
  // Secure the endpoint — Vercel sends this header automatically for cron jobs
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL ?? "newsletter@xn--nhro-loa.ch";

  if (!audienceId) {
    return NextResponse.json({ error: "RESEND_AUDIENCE_ID not set" }, { status: 500 });
  }

  // Find articles published in the last 25 hours (buffer for cron timing)
  const cutoff = new Date(Date.now() - 25 * 60 * 60 * 1000);
  const newArticles = getAllArticles().filter(
    (a) => new Date(a.date) >= cutoff
  );

  if (newArticles.length === 0) {
    return NextResponse.json({ sent: false, reason: "No new articles today" });
  }

  // Fetch all contacts from audience
  const contactsRes = await resend.contacts.list({ audienceId });
  const contacts = contactsRes.data?.data ?? [];
  const activeContacts = contacts.filter((c) => !c.unsubscribed);

  if (activeContacts.length === 0) {
    return NextResponse.json({ sent: false, reason: "No subscribers" });
  }

  const { html, subject } = buildEmailHtml(newArticles);

  // Send to each subscriber
  const results = await Promise.allSettled(
    activeContacts.map((contact) =>
      resend.emails.send({
        from: `NÄHRO <${fromEmail}>`,
        to: contact.email,
        subject,
        html,
      })
    )
  );

  const sent = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.filter((r) => r.status === "rejected").length;

  console.log(`[newsletter-cron] Sent: ${sent}, Failed: ${failed}, Articles: ${newArticles.length}`);

  return NextResponse.json({ sent: true, emails: sent, failed, articles: newArticles.length });
}
