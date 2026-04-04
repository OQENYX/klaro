import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="bg-bg py-14 min-[860px]:py-20" id="kat">
      <div className="mx-auto max-w-[1080px] px-5 min-[860px]:px-8">
        <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Themen
        </div>
        <div
          className="rv mb-6 font-extrabold leading-[1.04] text-dark min-[860px]:mb-9"
          style={{
            fontSize: "clamp(26px, 3.5vw, 44px)",
            letterSpacing: "-.035em",
          }}
        >
          Alle Kategorien.
        </div>

        {/* ── MOBILE: compact 2-col grid ── */}
        <div className="grid grid-cols-2 gap-2.5 min-[860px]:hidden">
          {categories.map((cat, i) => {
            const delay = i % 3;
            return (
              <CategoryCard
                key={cat.id}
                category={cat}
                variant="compact"
                className={`rv ${delay === 1 ? "d1" : delay === 2 ? "d2" : ""}`}
              />
            );
          })}
        </div>

        {/* ── DESKTOP: full gradient cards ── */}
        <div className="hidden min-[860px]:grid grid-cols-3 gap-3.5">
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
