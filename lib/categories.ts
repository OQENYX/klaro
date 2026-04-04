export type CategoryName =
  | "Süßstoffe"
  | "Protein"
  | "Abnehmen"
  | "Darm"
  | "Mythen"
  | "Grundlagen";

export interface Category {
  name: CategoryName;
  description: string;
  bgColor: string;
  textColor: string;
}

export const categories: Category[] = [
  {
    name: "Süßstoffe",
    description: "ADI-Werte, Studien, Mythen zu Süßungsmitteln",
    bgColor: "#E8F5E9",
    textColor: "#1A3D2B",
  },
  {
    name: "Protein",
    description: "Biologischer Wert, Thermogenese, Quellen",
    bgColor: "#E3F2FD",
    textColor: "#1565C0",
  },
  {
    name: "Abnehmen",
    description: "Kaloriendefizit, Tracking, Jojo-Effekt",
    bgColor: "#FFF3E0",
    textColor: "#E65100",
  },
  {
    name: "Darm",
    description: "Mikrobiom, CED, Verträglichkeit",
    bgColor: "#F3E5F5",
    textColor: "#6A1B9A",
  },
  {
    name: "Mythen",
    description: "Debunking verbreiteter Ernährungsmythen",
    bgColor: "#FFEBEE",
    textColor: "#C62828",
  },
  {
    name: "Grundlagen",
    description: "Makros, Mikros, Basiswissen",
    bgColor: "#F5F5F3",
    textColor: "#424242",
  },
];

export function getCategoryByName(name: string): Category | undefined {
  return categories.find((c) => c.name === name);
}
