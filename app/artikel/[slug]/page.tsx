import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MdxContent from "@/components/MdxContent";
import SourceList from "@/components/SourceList";
import BackButton from "@/components/BackButton";
import ShareButton from "@/components/ShareButton";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleProgressBar from "@/components/ArticleProgressBar";

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
    title: `${article.title} — NÄHRO`,
    description: article.description,
    openGraph: {
      title: `${article.title} — NÄHRO`,
      description: article.description,
      url: `https://nähro.ch/artikel/${slug}`,
      siteName: "NÄHRO",
      locale: "de_CH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} — NÄHRO`,
      description: article.description,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.lastUpdated,
    dateModified: article.lastUpdated,
    author: { "@type": "Organization", name: "NÄHRO / WEY Nutrition" },
    publisher: {
      "@type": "Organization",
      name: "NÄHRO",
      url: "https://nähro.ch",
    },
    url: `https://nähro.ch/artikel/${slug}`,
    inLanguage: "de-CH",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleProgressBar />
      <Nav />
      <article className="mx-auto max-w-[1080px] px-5 py-12 min-[860px]:px-8 min-[860px]:py-20">
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
            style={{ fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-.035em" }}
          >
            {article.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-sub">
            {article.description}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <ShareButton
              title={article.title}
              url={`https://nähro.ch/artikel/${slug}`}
            />
          </div>

          <div
            className="mt-6 h-px"
            style={{ background: "linear-gradient(90deg, var(--color-line), transparent)" }}
          />
        </div>

        <div className="mt-12">
          <MdxContent source={article.content} />
        </div>

        <div className="mx-auto max-w-[680px]">
          <SourceList sources={article.sources} />
          <RelatedArticles currentId={slug} category={article.category} />
        </div>
      </article>
      <Footer />
    </>
  );
}
