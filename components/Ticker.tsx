"use client";

import Link from "next/link";

const items: { label: string; href: string }[] = [
  { label: "Aspartam & ADI-Werte", href: "/artikel/aspartam-wirklich-gefaehrlich" },
  { label: "Proteinthermogenese", href: "/artikel/protein-thermogenese-kalorien" },
  { label: "30–40 % Kalorienschätzfehler", href: "/artikel/kalorien-schaetzen-warum-es-scheitert" },
  { label: "Morbus Crohn & Süßstoffe", href: "/artikel/morbus-crohn-suessstoffe" },
  { label: "Acesulfam-K EFSA 2025", href: "/artikel/acesulfam-k" },
  { label: "Sucralose & Mikrobiom", href: "/artikel/sucralose-sicher-oder-nicht" },
  { label: "Whey Isolat vs. Konzentrat", href: "/artikel/whey-isolat-vs-konzentrat" },
  { label: "Superfoods — Mythos oder Fakten?", href: "/artikel/superfoods-mythos" },
];

export default function Ticker() {
  const allItems = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y py-3"
      style={{
        borderColor: "var(--color-line)",
        maskImage:
          "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: "tick 30s linear infinite" }}
      >
        {allItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="inline-flex items-center gap-2.5 whitespace-nowrap px-6 text-[13px] font-medium text-sub no-underline transition-colors duration-150 hover:text-dark"
          >
            {item.label}
            <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-[rgba(0,0,0,.15)]" />
          </Link>
        ))}
      </div>
    </div>
  );
}
