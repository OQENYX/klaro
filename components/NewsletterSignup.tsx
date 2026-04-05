"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Anmeldung fehlgeschlagen.");
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setErrorMsg("Netzwerkfehler. Bitte versuche es erneut.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="mx-auto max-w-[1080px] px-5 py-24 min-[860px]:px-8">
        <div
          className="mx-auto max-w-[560px] px-8 py-12 text-center"
          style={{ border: "1px solid var(--color-line)" }}
        >
          <div className="mb-4 text-3xl">✓</div>
          <h2 className="mb-2 text-xl font-extrabold tracking-tight text-dark">
            Angemeldet.
          </h2>
          <p className="text-sm text-sub">
            Du bekommst eine E-Mail, wenn ein neuer Artikel erscheint.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1080px] px-5 py-24 min-[860px]:px-8">
      <div
        className="mx-auto max-w-[560px] px-8 py-12"
        style={{ border: "1px solid var(--color-line)" }}
      >
        <div className="mb-1 text-[11px] font-bold uppercase tracking-[.08em] text-sub">
          Newsletter
        </div>
        <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-dark">
          Neuer Artikel? Du erfährst es zuerst.
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-sub">
          Kein Spam. Nur ein Hinweis wenn ein neuer Artikel erscheint.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 min-[540px]:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.ch"
            required
            disabled={status === "loading"}
            className="flex-1 px-4 py-3 text-sm text-dark placeholder:text-sub disabled:opacity-50"
            style={{ border: "1px solid var(--color-line)", outline: "none" }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="whitespace-nowrap bg-dark px-6 py-3 text-sm font-bold text-white transition-opacity duration-150 hover:opacity-80 disabled:opacity-50"
          >
            {status === "loading" ? "…" : "Anmelden"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
