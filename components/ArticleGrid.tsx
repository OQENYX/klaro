import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function ArticleGrid() {
  return (
    <div
      className="mx-auto max-w-[1080px] px-8 py-20 max-[860px]:px-5"
      id="art"
    >
      <div
        className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub"
      >
        Artikel
      </div>
      <div
        className="rv mb-9 font-extrabold leading-[1.04] text-dark"
        style={{
          fontSize: "clamp(28px, 3.5vw, 44px)",
          letterSpacing: "-.035em",
        }}
      >
        Was wir erklären.
      </div>
      <div className="grid grid-cols-2 gap-3.5 max-[860px]:grid-cols-1">
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
