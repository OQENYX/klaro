export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: "emerald" | "violet" | "orange";
  readTime: number;
  date: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "nach-gefuehl-essen",
    title: "Warum 'nach Gefühl essen' scheitert",
    excerpt:
      "Menschen unterschätzen ihre Kalorienzufuhr im Schnitt um 30–40%. Besonders bei vermeintlich gesunden Lebensmitteln.",
    category: "Abnehmen",
    categoryColor: "emerald",
    readTime: 5,
    date: "2025-04-01",
    featured: true,
  },
  {
    id: "proteinkalorien",
    title: "Proteinkalorien zählen nicht 1:1",
    excerpt:
      "20–30% verbrennt dein Körper beim Verdauen — der thermische Effekt von Protein erklärt.",
    category: "Protein",
    categoryColor: "violet",
    readTime: 5,
    date: "2025-04-01",
  },
  {
    id: "aspartam",
    title: "Ist Aspartam wirklich gefährlich?",
    excerpt:
      "IARC Gruppe 2B, 7 Liter Cola Zero — was das wirklich bedeutet, sachlich erklärt.",
    category: "Süßstoffe",
    categoryColor: "orange",
    readTime: 6,
    date: "2025-04-01",
  },
];
