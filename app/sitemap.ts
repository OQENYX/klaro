import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://xn--nhro-loa.ch";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/artikel`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/kategorien`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/artikel/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${base}/kategorien/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages, ...categoryPages];
}
