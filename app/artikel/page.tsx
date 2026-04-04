import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alle Artikel | KLARO",
};

export default function ArtikelIndex() {
  const articles = getAllArticles();

  return (
    <>
      <Nav />
      <div className="mx-auto max-w-[1080px] px-8 py-20 max-[860px]:px-5">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Artikel
        </div>
        <div
          className="mb-9 font-extrabold leading-[1.04] text-dark"
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            letterSpacing: "-.035em",
          }}
        >
          Alle Artikel.
        </div>
        <div className="grid grid-cols-2 gap-3.5 max-[860px]:grid-cols-1">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artikel/${article.slug}`}
              className="group relative flex flex-col gap-3.5 overflow-hidden rounded-[22px] bg-white p-8 no-underline"
              style={{
                border: "1px solid rgba(0,0,0,.05)",
                boxShadow: "0 2px 12px rgba(0,0,0,.04)",
                transition: "transform .2s ease, box-shadow .2s ease",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, #059669, #34d399)",
                }}
              />
              <span className="inline-flex w-fit items-center rounded-full bg-emerald/10 px-3 py-[5px] text-xs font-bold text-emerald">
                {article.category} · {article.readingTime} min
              </span>
              <div
                className="text-[21px] font-bold leading-[1.22] text-dark"
                style={{ letterSpacing: "-.025em" }}
              >
                {article.title}
              </div>
              <div className="text-sm font-normal leading-[1.7] text-sub">
                {article.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
