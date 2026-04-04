interface StatBlockProps {
  value: string;
  label: string;
  sub?: string;
}

export default function StatBlock({ value, label, sub }: StatBlockProps) {
  return (
    <div
      className="my-10 overflow-hidden rounded-[22px] p-10 text-center"
      style={{
        background: "linear-gradient(135deg, var(--color-white), var(--color-bg))",
        border: "1px solid rgba(0,0,0,.05)",
        boxShadow: "0 2px 12px rgba(0,0,0,.04)",
      }}
    >
      <div
        className="text-7xl font-extrabold text-emerald md:text-8xl"
        style={{ letterSpacing: "-.04em" }}
      >
        {value}
      </div>
      <div className="mt-4 text-sm font-medium text-sub">{label}</div>
      {sub && <div className="mt-2 text-xs text-sub/70">{sub}</div>}
    </div>
  );
}
