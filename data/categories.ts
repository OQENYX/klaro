export interface Category {
  id: string;
  name: string;
  desc: string;
  longDesc: string;
  color: "emerald" | "violet" | "orange" | "sky" | "pink" | "teal" | "rose" | "indigo";
  count: number;
  icon: "flask" | "molecule" | "clock" | "gut" | "bulb" | "blocks" | "female" | "male";
  topics: string[];
}

export const categories: Category[] = [
  {
    id: "suessstoffe",
    name: "Süßstoffe",
    desc: "ADI-Werte, EFSA-Bewertungen, Mythen — alle mit Quelle.",
    longDesc:
      "Aspartam, Sucralose, Acesulfam-K, Stevia — was sagen die Behörden wirklich? Wir erklären ADI-Werte, IARC-Klassifikationen und EFSA-Bewertungen. Jede Aussage mit Quelle.",
    color: "emerald",
    count: 2,
    icon: "flask",
    topics: ["ADI-Werte", "EFSA-Bewertungen", "IARC-Klassifikation", "Aspartam", "Sucralose", "Acesulfam-K"],
  },
  {
    id: "protein",
    name: "Protein",
    desc: "Biologischer Wert, Thermogenese, Quellen verglichen.",
    longDesc:
      "Wie viel Protein brauchst du wirklich? Was ist der thermische Effekt? Welche Quellen liefern am meisten pro Kalorie? Wissenschaftlich fundiert, ohne Supplement-Marketing.",
    color: "violet",
    count: 2,
    icon: "molecule",
    topics: ["Thermogenese", "Biologischer Wert", "Proteinquellen", "Muskelaufbau", "Aminosäuren"],
  },
  {
    id: "abnehmen",
    name: "Abnehmen",
    desc: "Kaloriendefizit, Jojo-Effekt, Tracking — die Fakten.",
    longDesc:
      "Warum scheitern 95% der Diäten? Was ist ein realistisches Kaloriendefizit? Warum unterschätzen wir unsere Kalorienzufuhr um 30–40%? Die Wissenschaft hinter nachhaltigem Gewichtsverlust.",
    color: "orange",
    count: 2,
    icon: "clock",
    topics: ["Kaloriendefizit", "TDEE", "Tracking", "Jojo-Effekt", "Sättigung"],
  },
  {
    id: "darm",
    name: "Darm",
    desc: "Mikrobiom, Morbus Crohn, viszerale Hypersensitivität.",
    longDesc:
      "Das Mikrobiom beeinflusst Verdauung, Immunsystem und sogar die Psyche. Wir erklären CED, Reizdarm und den Einfluss von Ernährung auf die Darmgesundheit — evidenzbasiert.",
    color: "sky",
    count: 2,
    icon: "gut",
    topics: ["Mikrobiom", "Morbus Crohn", "Reizdarm", "Probiotika", "Darm-Hirn-Achse"],
  },
  {
    id: "mythen",
    name: "Mythen",
    desc: "Ernährungsmythen widerlegt — mit Studien belegt.",
    longDesc:
      "Macht Abendessen dick? Ist Gluten gefährlich? Entgiftet Detox-Tee? Wir nehmen die populärsten Ernährungsmythen auseinander — sachlich, quellenbasiert, ohne Meinung.",
    color: "pink",
    count: 2,
    icon: "bulb",
    topics: ["Detox", "Gluten", "Superfoods", "Mahlzeiten-Timing", "Clean Eating"],
  },
  {
    id: "grundlagen",
    name: "Grundlagen",
    desc: "Makros, Mikros, Basiswissen — das Fundament.",
    longDesc:
      "Kohlenhydrate, Fette, Proteine, Vitamine, Mineralstoffe — die Basics der Ernährungswissenschaft. Verständlich erklärt, ohne unnötige Komplexität.",
    color: "teal",
    count: 3,
    icon: "blocks",
    topics: ["Makronährstoffe", "Mikronährstoffe", "Kalorien", "Vitamine", "Mineralstoffe"],
  },
  {
    id: "frauengesundheit",
    name: "Frauengesundheit",
    desc: "Zyklus, Hormone, Endometriose — evidenzbasiert.",
    longDesc:
      "Periode, Körperfettanteil, Endometriose, Eisenmangel — Themen, die Millionen Frauen betreffen, aber oft zu wenig Aufmerksamkeit bekommen. Wir erklären die Wissenschaft dahinter und zeigen, was Ernährung bewirken kann.",
    color: "rose",
    count: 3,
    icon: "female",
    topics: ["Menstruationszyklus", "Endometriose", "Eisenmangel", "Körperfettanteil", "Hormone", "PCOS"],
  },
  {
    id: "maennergesundheit",
    name: "Männergesundheit",
    desc: "Testosteron, Vitamine, Hormone — die Fakten.",
    longDesc:
      "Testosteronspiegel, Vitamin-D-Mangel, Zink und Magnesium — was beeinflusst die Männergesundheit wirklich? Evidenzbasierte Einordnung statt Supplement-Hype.",
    color: "indigo",
    count: 3,
    icon: "male",
    topics: ["Testosteron", "Vitamin D", "Zink & Magnesium", "Muskelerhalt", "Prostata", "Herzgesundheit"],
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryByName(name: string): Category | undefined {
  return categories.find((c) => c.name === name);
}
