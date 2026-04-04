import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function ArticleGrid() {
  return (
    <div
      className="mx-auto max-w-[1080px] px-5 py-14 min-[860px]:px-8 min-[860px]:py-20"
      id="art"
    >
      <div
        className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub"
      >
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
      <div className="grid grid-cols-1 gap-3 min-[860px]:grid-cols-2 min-[860px]:gap-3.5 [&>[data-featured]]:min-[860px]:col-span-2">
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
