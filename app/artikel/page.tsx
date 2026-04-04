import { articles } from "@/data/articles";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alle Artikel — NÄHRO",
  description: "Alle wissenschaftlichen Ernährungsartikel von NÄHRO — quellenbasiert, verständlich, ohne Marketing.",
  openGraph: {
    title: "Alle Artikel — NÄHRO",
    description: "Alle wissenschaftlichen Ernährungsartikel von NÄHRO — quellenbasiert, verständlich, ohne Marketing.",
    url: "https://nähro.ch/artikel",
    siteName: "NÄHRO",
    locale: "de_CH",
    type: "website",
  },
};

export default function ArtikelIndex() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-[1080px] px-5 py-14 min-[860px]:px-8 min-[860px]:py-20">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Artikel
        </div>
        <div
          className="mb-6 font-extrabold leading-[1.04] text-dark min-[860px]:mb-9"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-.035em" }}
        >
          Alle Artikel.
        </div>

        {/* ── MOBILE: kompakte Liste ── */}
        <div className="flex flex-col gap-2.5 min-[860px]:hidden">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>

        {/* ── DESKTOP: 2-Spalten Grid ── */}
        <div className="hidden min-[860px]:grid grid-cols-2 gap-3.5 [&>[data-featured]]:col-span-2">
          {articles.map((article, i) => (
            <ArticleCard
              key={article.id}
              article={article}
              className={i === 1 ? "d1" : i === 2 ? "d2" : ""}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
