import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MdxContent from "@/components/MdxContent";
import SourceList from "@/components/SourceList";
import BackButton from "@/components/BackButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | KLARO`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const formattedDate = new Date(article.lastUpdated).toLocaleDateString(
    "de-DE",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  return (
    <>
      <Nav />
      <article className="mx-auto max-w-[1080px] px-8 py-20 max-[860px]:px-5">
        <div className="mx-auto max-w-[680px]">
          <BackButton />

          <div className="mb-2 flex flex-wrap items-center gap-3 text-sm text-sub">
            <span className="inline-flex items-center rounded-full bg-emerald/10 px-3 py-[5px] text-xs font-bold text-emerald">
              {article.category}
            </span>
            <span>{article.readingTime} min Lesezeit</span>
            <span className="text-line">·</span>
            <span>Aktualisiert: {formattedDate}</span>
          </div>

          <h1
            className="mt-6 font-extrabold leading-[1.1] text-dark"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              letterSpacing: "-.035em",
            }}
          >
            {article.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-sub">
            {article.description}
          </p>

          <div
            className="mt-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--color-line), transparent)",
            }}
          />
        </div>

        <div className="mt-12">
          <MdxContent source={article.content} />
        </div>

        <div className="mx-auto max-w-[680px]">
          <SourceList sources={article.sources} />
        </div>
      </article>
      <Footer />
    </>
  );
}
