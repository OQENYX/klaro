interface Source {
  label: string;
  url: string;
}

interface SourceListProps {
  sources: Source[];
}

export default function SourceList({ sources }: SourceListProps) {
  return (
    <div
      className="mt-16 pt-10"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
        Quellen & Referenzen
      </h2>
      <ol className="space-y-3">
        {sources.map((source, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald/5 text-[10px] font-bold text-emerald">
              {i + 1}
            </span>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sub underline underline-offset-2 transition-colors hover:text-emerald"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
