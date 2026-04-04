import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryById } from "@/data/categories";
import { getArticlesByCategory } from "@/lib/articles";
import { meshGradients, stripeGradients, tagStyles } from "@/lib/gradients";
import { getCategoryIcon, IconArrowSmall } from "@/components/icons";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const cat = getCategoryById(id);
  if (!cat) return {};
  return {
    title: `${cat.name} — Artikel | NÄHRO`,
    description: cat.longDesc,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const cat = getCategoryById(id);
  if (!cat) notFound();

  const articles = getArticlesByCategory(cat.name);
  const gradient = meshGradients[cat.color];
  const tag = tagStyles[cat.color];
  const stripe = stripeGradients[cat.color];

  return (
    <>
      <Nav />

      {/* Hero Banner with Mesh Gradient */}
      <section
        className="relative overflow-hidden px-5 pt-14 pb-10 text-white min-[860px]:px-8 min-[860px]:pt-20 min-[860px]:pb-16"
        style={{ background: gradient }}
      >
        <div className="mx-auto max-w-[1080px]">
          {/* Back link */}
          <Link
            href="/kategorien"
            className="mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-white/60 no-underline transition-colors hover:text-white"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Alle Kategorien
          </Link>

          <div className="flex items-start gap-5">
            {/* Icon */}
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px]"
              style={{
                background: "rgba(255,255,255,.2)",
                border: "1px solid rgba(255,255,255,.25)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {getCategoryIcon(cat.icon)}
            </div>
            <div>
              <h1
                className="text-[30px] font-extrabold leading-[1.05] text-white min-[860px]:text-[42px]"
                style={{ letterSpacing: "-.04em" }}
              >
                {cat.name}
              </h1>
              <p className="mt-3 max-w-[540px] text-[15px] font-normal leading-[1.7] text-white/75">
                {cat.longDesc}
              </p>
            </div>
          </div>

          {/* Topic pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {cat.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-white/90"
                style={{
                  background: "rgba(255,255,255,.15)",
                  border: "1px solid rgba(255,255,255,.2)",
                }}
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="mt-8 inline-flex items-center gap-6 rounded-[14px] px-6 py-3.5 text-[13px]"
            style={{
              background: "rgba(255,255,255,.12)",
              border: "1px solid rgba(255,255,255,.15)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white">
                {articles.length}
              </span>
              <span className="font-semibold text-white/60">
                {articles.length === 1 ? "Artikel" : "Artikel"}
              </span>
            </div>
            <div
              className="h-5 w-px"
              style={{ background: "rgba(255,255,255,.2)" }}
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white">100%</span>
              <span className="font-semibold text-white/60">Quellenbasiert</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <div className="mx-auto max-w-[1080px] px-5 py-12 min-[860px]:px-8 min-[860px]:py-16">
        {articles.length > 0 ? (
          <>
            <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
              {cat.name}
            </div>
            <div
              className="rv mb-9 font-extrabold leading-[1.04] text-dark"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                letterSpacing: "-.035em",
              }}
            >
              Alle Artikel zu {cat.name}.
            </div>

            <div className="grid grid-cols-1 gap-2.5 min-[860px]:grid-cols-2 min-[860px]:gap-3.5">
              {articles.map((article, i) => {
                const formattedDate = new Date(
                  article.lastUpdated
                ).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                });

                return (
                  <Link
                    key={article.slug}
                    href={`/artikel/${article.slug}`}
                    className={`rv ${i === 1 ? "d1" : i === 2 ? "d2" : ""} group relative flex flex-col gap-2.5 overflow-hidden rounded-[18px] bg-white p-5 no-underline min-[860px]:gap-3.5 min-[860px]:rounded-[22px] min-[860px]:p-8`}
                    style={{
                      border: "1px solid rgba(0,0,0,.05)",
                      boxShadow: "0 2px 12px rgba(0,0,0,.04)",
                      transition:
                        "transform .2s ease, box-shadow .2s ease",
                    }}
                  >
                    {/* Stripe */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: stripe }}
                    />

                    <span
                      className="inline-flex w-fit items-center rounded-full px-3 py-[5px] text-xs font-bold"
                      style={{ background: tag.bg, color: tag.color }}
                    >
                      {article.category} · {article.readingTime} min
                    </span>

                    <div
                      className="text-[17px] font-bold leading-[1.22] text-dark min-[860px]:text-[21px]"
                      style={{ letterSpacing: "-.025em" }}
                    >
                      {article.title}
                    </div>

                    <div className="text-sm font-normal leading-[1.7] text-sub">
                      {article.description}
                    </div>

                    <div
                      className="mt-auto flex items-center justify-between pt-4"
                      style={{
                        borderTop: "1px solid var(--color-line)",
                      }}
                    >
                      <span className="text-xs text-sub">
                        {formattedDate}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-bg text-dark transition-all duration-150 group-hover:bg-dark group-hover:text-white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2.5 7h9M7.5 3l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="rv py-16 text-center">
            <div
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[22px]"
              style={{ background: tag.bg }}
            >
              <div style={{ color: tag.color, transform: "scale(1.5)" }}>
                {getCategoryIcon(cat.icon)}
              </div>
            </div>
            <div
              className="mb-3 text-2xl font-extrabold text-dark"
              style={{ letterSpacing: "-.03em" }}
            >
              Noch keine Artikel
            </div>
            <p className="mx-auto max-w-[400px] text-[15px] leading-[1.7] text-sub">
              Wir arbeiten gerade an Artikeln zu {cat.name}. Schau bald
              wieder vorbei — neue Inhalte kommen regelmäßig.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/kategorien"
                className="rounded-full bg-dark px-6 py-3 text-[14px] font-bold text-white no-underline transition-opacity duration-150 hover:opacity-80"
              >
                Alle Kategorien
              </Link>
              <Link
                href="/#art"
                className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-dark no-underline transition-all duration-150 hover:bg-[#e5e5e8]"
                style={{ border: "1px solid rgba(0,0,0,.1)" }}
              >
                Artikel entdecken
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Other Categories */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-[1080px] px-5 min-[860px]:px-8">
          <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
            Weitere Themen
          </div>
          <div
            className="rv mb-9 font-extrabold leading-[1.04] text-dark"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              letterSpacing: "-.035em",
            }}
          >
            Andere Kategorien entdecken.
          </div>
          <div className="grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 min-[860px]:grid-cols-3 min-[860px]:gap-3.5">
            {categories
              .filter((c) => c.id !== cat.id)
              .slice(0, 3)
              .map((other, i) => {
                const otherArticles = getArticlesByCategory(other.name);
                return (
                  <Link
                    key={other.id}
                    href={`/kategorien/${other.id}`}
                    className={`rv ${i === 1 ? "d1" : i === 2 ? "d2" : ""} cc-link group relative flex flex-col gap-3.5 overflow-hidden rounded-[22px] p-7 text-white no-underline`}
                    style={{
                      background: meshGradients[other.color],
                      boxShadow: "0 4px 20px rgba(0,0,0,.1)",
                      transition:
                        "transform .22s ease, box-shadow .22s ease",
                    }}
                  >
                    <div
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px]"
                      style={{
                        background: "rgba(255,255,255,.2)",
                        border: "1px solid rgba(255,255,255,.25)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      {getCategoryIcon(other.icon)}
                    </div>
                    <div
                      className="text-[19px] font-extrabold text-white"
                      style={{ letterSpacing: "-.025em" }}
                    >
                      {other.name}
                    </div>
                    <div className="flex-1 text-[13px] font-normal leading-[1.65] text-white/[.72]">
                      {other.desc}
                    </div>
                    <div
                      className="flex items-center justify-between pt-3.5"
                      style={{
                        borderTop: "1px solid rgba(255,255,255,.15)",
                      }}
                    >
                      <span className="text-[11px] font-semibold tracking-[.04em] text-white/50">
                        {otherArticles.length} Artikel
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[.18] transition-colors duration-150 group-hover:bg-white/[.35]">
                        <IconArrowSmall />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollReveal />
    </>
  );
}
