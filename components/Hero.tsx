import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-5 pt-16 pb-12 text-center min-[860px]:px-8 min-[860px]:pt-24 min-[860px]:pb-20"
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
          className="mb-5 font-extrabold leading-[.9] text-dark min-[860px]:mb-[26px]"
          style={{
            fontSize: "clamp(48px, 9vw, 104px)",
            letterSpacing: "-.045em",
          }}
        >
          Ernährung.
          <br />
          <span className="grad-text">Erklärt.</span>
        </h1>

        {/* Sub */}
        <p className="mx-auto mb-8 max-w-[360px] text-base font-medium leading-[1.65] text-sub min-[860px]:mb-11 min-[860px]:max-w-[440px] min-[860px]:text-lg">
          Wissenschaftlich. Ohne Umwege. Jeder Satz mit Quelle — keine
          Meinungen, kein Marketing.
        </p>

        {/* Buttons */}
        <div className="mb-10 flex flex-col items-center gap-2.5 min-[860px]:mb-[60px] min-[860px]:flex-row min-[860px]:justify-center min-[860px]:gap-3">
          <Link
            href="#art"
            className="w-full rounded-full bg-dark px-7 py-[13px] text-center text-[15px] font-bold text-white no-underline transition-all duration-150 hover:scale-[.98] hover:opacity-80 min-[860px]:w-auto"
          >
            Artikel entdecken
          </Link>
          <Link
            href="#kat"
            className="w-full rounded-full bg-white px-7 py-[13px] text-center text-[15px] font-semibold text-dark no-underline transition-all duration-150 hover:scale-[.98] hover:bg-[#e5e5e8] min-[860px]:w-auto"
            style={{ border: "1px solid rgba(0,0,0,.1)" }}
          >
            Kategorien ansehen
          </Link>
        </div>

        {/* Stats panel */}
        <div
          className="grid grid-cols-2 overflow-hidden rounded-[18px] min-[860px]:inline-flex min-[860px]:rounded-[20px]"
          style={{
            background: "rgba(255,255,255,.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,.95)",
            boxShadow:
              "0 2px 24px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.9) inset",
          }}
        >
          <StatItem value="8" label="Kategorien" color="#059669" border />
          <StatItem value="100%" label="Quellenbasiert" color="#7C3AED" />
          <StatItem value="0" label="Werbung" color="#EA580C" border />
          <StatItem value="∞" label="Nachprüfbar" color="#0284C7" />
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  label,
  color,
  border,
}: {
  value: string;
  label: string;
  color: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-[3px] px-5 py-4 min-[860px]:px-8 min-[860px]:py-5 min-[860px]:min-w-[128px] ${border ? "border-r border-[rgba(0,0,0,.06)]" : ""}`}
    >
      <div
        className="text-[28px] font-extrabold leading-none min-[860px]:text-4xl"
        style={{ letterSpacing: "-.04em", color }}
      >
        {value}
      </div>
      <div className="text-[11px] font-semibold text-dark min-[860px]:text-xs">{label}</div>
    </div>
  );
}
