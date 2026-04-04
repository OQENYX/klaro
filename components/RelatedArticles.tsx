import Link from "next/link";
import { articles } from "@/data/articles";

const stripeStyles: Record<string, string> = {
  emerald: "linear-gradient(90deg, #059669, #34d399)",
  violet: "linear-gradient(90deg, #7C3AED, #a78bfa)",
  orange: "linear-gradient(90deg, #EA580C, #fb923c)",
  sky: "linear-gradient(90deg, #0284C7, #38bdf8)",
  pink: "linear-gradient(90deg, #be185d, #f472b6)",
  teal: "linear-gradient(90deg, #0d9488, #2dd4bf)",
  rose: "linear-gradient(90deg, #e11d48, #fda4af)",
  indigo: "linear-gradient(90deg, #4338ca, #a5b4fc)",
};

const tagStyles: Record<string, { bg: string; color: string }> = {
  emerald: { bg: "rgba(5,150,105,.1)", color: "#059669" },
  violet: { bg: "rgba(124,58,237,.1)", color: "#7C3AED" },
  orange: { bg: "rgba(234,88,12,.1)", color: "#EA580C" },
  sky: { bg: "rgba(2,132,199,.1)", color: "#0284C7" },
  pink: { bg: "rgba(190,24,93,.1)", color: "#be185d" },
  teal: { bg: "rgba(13,148,136,.1)", color: "#0d9488" },
  rose: { bg: "rgba(225,29,72,.1)", color: "#e11d48" },
  indigo: { bg: "rgba(67,56,202,.1)", color: "#4338ca" },
};

export default function RelatedArticles({
  currentId,
  category,
}: {
  currentId: string;
  category: string;
}) {
  const related = articles
    .filter((a) => a.id !== currentId && a.category === category)
    .slice(0, 3);

  // If not enough in same category, pad with others
  const others = articles
    .filter((a) => a.id !== currentId && a.category !== category)
    .slice(0, 3 - related.length);

  const all = [...related, ...others].slice(0, 3);
  if (all.length === 0) return null;

  return (
    <section className="mt-14 min-[860px]:mt-20">
      <div
        className="mb-6 pb-4 min-[860px]:mb-8"
        style={{ borderBottom: "1px solid var(--color-line)" }}
      >
        <div className="mb-1 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Weiterlesen
        </div>
        <div
          className="font-extrabold leading-[1.04] text-dark"
          style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-.03em" }}
        >
          Das könnte dich auch interessieren.
        </div>
      </div>

      {/* Mobile: compact list */}
      <div className="flex flex-col gap-2.5 min-[860px]:hidden">
        {all.map((article) => {
          const tag = tagStyles[article.categoryColor];
          const stripe = stripeStyles[article.categoryColor];
          return (
            <Link
              key={article.id}
              href={`/artikel/${article.id}`}
              className="group relative flex items-center gap-4 overflow-hidden rounded-[14px] bg-white p-4 no-underline"
              style={{ border: "1px solid rgba(0,0,0,.05)", boxShadow: "0 1px 6px rgba(0,0,0,.03)" }}
            >
              <div className="h-10 w-1 shrink-0 rounded-full" style={{ background: stripe }} />
              <div className="min-w-0 flex-1">
                <span
                  className="mb-1 inline-flex items-center rounded-full px-2 py-[2px] text-[10px] font-bold"
                  style={{ background: tag.bg, color: tag.color }}
                >
                  {article.category}
                </span>
                <div className="truncate text-[14px] font-bold leading-snug text-dark" style={{ letterSpacing: "-.02em" }}>
                  {article.title}
                </div>
              </div>
              <svg className="shrink-0 text-sub" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          );
        })}
      </div>

      {/* Desktop: card grid */}
      <div className="hidden min-[860px]:grid grid-cols-3 gap-3.5">
        {all.map((article) => {
          const tag = tagStyles[article.categoryColor];
          const stripe = stripeStyles[article.categoryColor];
          return (
            <Link
              key={article.id}
              href={`/artikel/${article.id}`}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-[18px] bg-white p-6 no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{ border: "1px solid rgba(0,0,0,.05)", boxShadow: "0 2px 12px rgba(0,0,0,.04)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
              <span
                className="inline-flex w-fit items-center rounded-full px-2.5 py-[4px] text-[11px] font-bold"
                style={{ background: tag.bg, color: tag.color }}
              >
                {article.category} · {article.readTime} min
              </span>
              <div className="text-[16px] font-bold leading-[1.3] text-dark" style={{ letterSpacing: "-.02em" }}>
                {article.title}
              </div>
              <div className="mt-auto text-[12px] font-semibold text-sub group-hover:text-dark transition-colors">
                Lesen →
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
