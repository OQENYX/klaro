import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="bg-bg py-20" id="kat">
      <div className="mx-auto max-w-[1080px] px-8 max-[860px]:px-5">
        <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Themen
        </div>
        <div
          className="rv mb-9 font-extrabold leading-[1.04] text-dark"
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            letterSpacing: "-.035em",
          }}
        >
          Alle Kategorien.
        </div>
        <div className="grid grid-cols-3 gap-3.5 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1">
          {categories.map((cat, i) => {
            const delay = i % 3;
            return (
              <CategoryCard
                key={cat.id}
                category={cat}
                className={`rv ${delay === 1 ? "d1" : delay === 2 ? "d2" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
