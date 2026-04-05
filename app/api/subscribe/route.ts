import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    return NextResponse.json({ error: "Server-Konfigurationsfehler." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    // Resend throws when contact already exists — treat as success
    if (err instanceof Error && err.message?.includes("already exists")) {
      return NextResponse.json({ ok: true });
    }
    console.error("Resend subscribe error:", err);
    return NextResponse.json({ error: "Anmeldung fehlgeschlagen." }, { status: 500 });
  }
}
