import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-center"
      style={{ padding: "96px 32px 80px" }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 60% at 15% 60%, rgba(167,139,250,.12) 0%, transparent 65%)",
            "radial-gradient(ellipse 60% 50% at 85% 35%, rgba(94,234,212,.10) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      <div className="relative z-[1] mx-auto max-w-[800px]">
        {/* Headline */}
        <h1
          className="mb-[26px] font-extrabold leading-[.9] text-dark"
          style={{
            fontSize: "clamp(56px, 9vw, 104px)",
            letterSpacing: "-.045em",
          }}
        >
          Ernährung.
          <br />
          <span className="grad-text">Erklärt.</span>
        </h1>

        {/* Sub */}
        <p className="mx-auto mb-11 max-w-[440px] text-lg font-medium leading-[1.65] text-sub">
          Wissenschaftlich. Ohne Umwege. Jeder Satz mit Quelle — keine
          Meinungen, kein Marketing.
        </p>

        {/* Buttons */}
        <div className="mb-[60px] flex flex-wrap justify-center gap-3">
          <Link
            href="#art"
            className="rounded-full bg-dark px-7 py-[13px] text-[15px] font-bold text-white no-underline transition-all duration-150 hover:scale-[.98] hover:opacity-80"
          >
            Artikel entdecken
          </Link>
          <Link
            href="#kat"
            className="rounded-full bg-white px-7 py-[13px] text-[15px] font-semibold text-dark no-underline transition-all duration-150 hover:scale-[.98] hover:bg-[#e5e5e8]"
            style={{ border: "1px solid rgba(0,0,0,.1)" }}
          >
            Kategorien ansehen
          </Link>
        </div>

        {/* Stats panel */}
        <div
          className="inline-flex overflow-hidden rounded-[20px] max-[860px]:w-full max-[860px]:flex-col max-[860px]:rounded-[18px]"
          style={{
            background: "rgba(255,255,255,.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,.95)",
            boxShadow:
              "0 2px 24px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.9) inset",
          }}
        >
          <StatItem value="6" label="Kategorien" color="#059669" />
          <StatItem value="100%" label="Quellenbasiert" color="#7C3AED" />
          <StatItem value="0" label="Werbung" color="#EA580C" />
          <StatItem value="∞" label="Nachprüfbar" color="#0284C7" last />
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  label,
  color,
  last,
}: {
  value: string;
  label: string;
  color: string;
  last?: boolean;
}) {
  return (
    <div
      className="flex min-w-[128px] flex-col gap-[3px] px-8 py-5 max-[860px]:border-b max-[860px]:border-r-0 max-[860px]:border-[rgba(0,0,0,.06)]"
      style={{
        borderRight: last ? "none" : "1px solid rgba(0,0,0,.06)",
      }}
    >
      <div
        className="text-4xl font-extrabold leading-none"
        style={{ letterSpacing: "-.04em", color }}
      >
        {value}
      </div>
      <div className="text-xs font-semibold text-dark">{label}</div>
    </div>
  );
}
