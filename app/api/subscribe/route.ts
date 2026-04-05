import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse." }, { status: 400 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    return NextResponse.json({ error: "Server-Konfigurationsfehler." }, { status: 500 });
  }

  try {
    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unbekannter Fehler";
    // Already subscribed is not an error for the user
    if (message.includes("already exists")) {
      return NextResponse.json({ success: true });
    }
    console.error("[subscribe]", message);
    return NextResponse.json({ error: "Anmeldung fehlgeschlagen. Bitte versuche es erneut." }, { status: 500 });
  }
}
