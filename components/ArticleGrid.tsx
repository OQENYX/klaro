import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

const MOBILE_LIMIT = 4;

export default function ArticleGrid() {
  return (
    <div
      className="mx-auto max-w-[1080px] px-5 py-14 min-[860px]:px-8 min-[860px]:py-20"
      id="art"
    >
      <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
        Artikel
      </div>
      <div
        className="rv mb-6 font-extrabold leading-[1.04] text-dark min-[860px]:mb-9"
        style={{
          fontSize: "clamp(26px, 3.5vw, 44px)",
          letterSpacing: "-.035em",
        }}
      >
        Was wir erklären.
      </div>

      {/* ── MOBILE: compact list, limited articles ── */}
      <div className="flex flex-col gap-2.5 min-[860px]:hidden">
        {articles.slice(0, MOBILE_LIMIT).map((article, i) => (
          <ArticleCard
            key={article.id}
            article={article}
            variant="compact"
            className={`rv ${i === 1 ? "d1" : i === 2 ? "d2" : ""}`}
          />
        ))}
        {articles.length > MOBILE_LIMIT && (
          <Link
            href="/artikel"
            className="rv mt-1 flex items-center justify-center rounded-[14px] py-3.5 text-[13px] font-bold text-dark no-underline transition-colors duration-150 hover:bg-white"
            style={{ border: "1px solid rgba(0,0,0,.08)" }}
          >
            Alle {articles.length} Artikel ansehen →
          </Link>
        )}
      </div>

      {/* ── DESKTOP: full grid ── */}
      <div className="hidden min-[860px]:grid grid-cols-2 gap-3.5 [&>[data-featured]]:col-span-2">
        {articles.map((article, i) => (
          <ArticleCard
            key={article.id}
            article={article}
            className={`rv ${i === 1 ? "d1" : i === 2 ? "d2" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
