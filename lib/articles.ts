import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleSource {
  label: string;
  url: string;
}

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: string;
  date: string;
  lastUpdated: string;
  readingTime: number;
  sources: ArticleSource[];
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), "content/artikel");

export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...(data as ArticleFrontmatter),
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as ArticleFrontmatter),
  };
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}
