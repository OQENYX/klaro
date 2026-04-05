"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setState("success");
        setEmail("");
      } else {
        setErrorMsg(data.error ?? "Anmeldung fehlgeschlagen.");
        setState("error");
      }
    } catch {
      setErrorMsg("Verbindungsfehler. Bitte versuche es erneut.");
      setState("error");
    }
  }

  return (
    <section
      className="mx-auto max-w-[1080px] px-5 py-24 min-[860px]:px-8"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <div className="mx-auto max-w-[560px] text-center">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Newsletter
        </div>
        <h2
          className="mb-4 font-extrabold text-dark"
          style={{ fontSize: "clamp(26px, 3.5vw, 38px)", letterSpacing: "-.04em", lineHeight: 1.1 }}
        >
          Neue Artikel direkt ins Postfach.
        </h2>
        <p className="mb-8 text-[15px] leading-[1.7] text-sub">
          Kein Marketing, kein Spam — nur neue Artikel, sobald sie erscheinen.
          Wissenschaftlich. Ohne Umwege.
        </p>

        {state === "success" ? (
          <div
            className="rounded-[12px] px-6 py-5 text-[15px] font-medium text-dark"
            style={{ background: "#E8F5E9", border: "1px solid #C8E6C9" }}
          >
            Angemeldet. Du bekommst eine E-Mail bei neuen Artikeln.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 min-[480px]:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.ch"
              required
              disabled={state === "loading"}
              className="flex-1 rounded-[10px] border px-4 py-3 text-[15px] font-medium text-dark outline-none placeholder:text-sub/50 transition-colors duration-150 focus:border-[#1A3D2B] disabled:opacity-60"
              style={{ borderColor: "var(--color-line)", background: "var(--color-bg)" }}
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="rounded-[10px] px-6 py-3 text-[14px] font-bold text-white transition-colors duration-150 disabled:opacity-60"
              style={{ background: "#1A3D2B" }}
            >
              {state === "loading" ? "…" : "Abonnieren"}
            </button>
          </form>
        )}

        {state === "error" && (
          <p className="mt-3 text-[13px] text-[#C62828]">{errorMsg}</p>
        )}

        <p className="mt-4 text-[12px] text-sub/60">
          Jederzeit abmeldbar. Keine Weitergabe der E-Mail-Adresse.
        </p>
      </div>
    </section>
  );
}
