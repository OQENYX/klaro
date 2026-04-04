"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <div
        className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-[22px] text-3xl"
        style={{ background: "var(--color-bg)", border: "1px solid var(--color-line)" }}
      >
        ⚠️
      </div>

      <h1
        className="mb-4 font-extrabold leading-[1.08] text-dark"
        style={{ fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "-.035em" }}
      >
        Etwas ist schiefgelaufen.
      </h1>

      <p className="mb-10 max-w-[420px] text-[15px] leading-[1.7] text-sub">
        Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut oder geh zurück zur Startseite.
      </p>

      <div className="flex flex-col gap-3 min-[480px]:flex-row">
        <button
          onClick={reset}
          className="rounded-full bg-dark px-7 py-3 text-[14px] font-bold text-white transition-opacity duration-150 hover:opacity-80"
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-dark no-underline transition-all duration-150 hover:bg-[#e5e5e8]"
          style={{ border: "1px solid rgba(0,0,0,.1)" }}
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
