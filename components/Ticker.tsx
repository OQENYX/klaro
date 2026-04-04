const items = [
  "Aspartam & ADI-Werte",
  "Proteinthermogenese",
  "30–40% Kalorienschätzfehler",
  "Morbus Crohn & Süßstoffe",
  "EFSA Neubewertung 2025",
  "Sucralose & Mikrobiom",
  "Whey Isolat vs. Konzentrat",
  "Acesulfam-K April 2025",
];

export default function Ticker() {
  // Duplicate items for seamless loop
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
        style={{ animation: "tick 26s linear infinite" }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 whitespace-nowrap px-6 text-[13px] font-medium text-sub"
          >
            {item}
            <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-[rgba(0,0,0,.15)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
