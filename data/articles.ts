export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: "emerald" | "violet" | "orange" | "sky" | "pink" | "teal" | "rose" | "indigo";
  readTime: number;
  date: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "endometriose-ernaehrung",
    title: "Endometriose & Ernährung — was wirklich hilft",
    excerpt:
      "10% aller Frauen sind betroffen, die Diagnose dauert im Schnitt 7–10 Jahre. Was Ernährung bewirken kann — und was nicht.",
    category: "Frauengesundheit",
    categoryColor: "rose",
    readTime: 8,
    date: "2025-04-04",
    featured: true,
  },
  {
    id: "testosteron-ernaehrung",
    title: "Testosteron & Ernährung — was wirklich wirkt",
    excerpt:
      "Zink, Vitamin D, Schlaf — was den Testosteronspiegel tatsächlich beeinflusst. Und warum die meisten Booster Geldverschwendung sind.",
    category: "Männergesundheit",
    categoryColor: "indigo",
    readTime: 7,
    date: "2025-04-03",
  },
  {
    id: "kalorien-schaetzen-warum-es-scheitert",
    title: "Warum 'nach Gefühl essen' scheitert",
    excerpt:
      "Menschen unterschätzen ihre Kalorienzufuhr im Schnitt um 30–40%. Besonders bei vermeintlich gesunden Lebensmitteln.",
    category: "Abnehmen",
    categoryColor: "orange",
    readTime: 5,
    date: "2025-04-01",
    featured: true,
  },
  {
    id: "vitamin-d-maenner",
    title: "Vitamin D — warum so viele Männer unterversorgt sind",
    excerpt:
      "Besonders im Winter fehlt vielen Vitamin D. Wann Supplementation sinnvoll ist und was die DGE empfiehlt.",
    category: "Männergesundheit",
    categoryColor: "indigo",
    readTime: 6,
    date: "2025-03-30",
  },
  {
    id: "periode-ernaehrung-zyklus",
    title: "Ernährung im Zyklus — was dein Körper wann braucht",
    excerpt:
      "Eisenverlust, Heißhunger in der Lutealphase, Magnesium gegen PMS — die Wissenschaft hinter zyklusgerechter Ernährung.",
    category: "Frauengesundheit",
    categoryColor: "rose",
    readTime: 7,
    date: "2025-03-28",
  },
  {
    id: "zink-magnesium-maenner",
    title: "Zink & Magnesium — was Männer wissen sollten",
    excerpt:
      "Zwei essenzielle Mineralstoffe für Testosteron, Immunsystem und Schlaf. Was die Evidenz sagt — und warum ZMA überhypt ist.",
    category: "Männergesundheit",
    categoryColor: "indigo",
    readTime: 6,
    date: "2025-03-25",
  },
  {
    id: "koerperfett-frauen",
    title: "Körperfettanteil bei Frauen — wie viel ist gesund?",
    excerpt:
      "Essentielles Fett, RED-S, Amenorrhoe — warum ein zu niedriger Körperfettanteil bei Frauen gefährlich werden kann.",
    category: "Frauengesundheit",
    categoryColor: "rose",
    readTime: 6,
    date: "2025-03-22",
  },
  {
    id: "kalorien-was-sind-sie-wirklich",
    title: "Kalorien — was sind sie wirklich?",
    excerpt:
      "Atwater-Faktoren, thermischer Effekt, Bombenkalorimeter — was hinter der Zahl auf dem Etikett steckt.",
    category: "Grundlagen",
    categoryColor: "teal",
    readTime: 6,
    date: "2025-04-01",
  },
  {
    id: "makronaehrstoffe-erklaert",
    title: "Makronährstoffe einfach erklärt",
    excerpt:
      "Kohlenhydrate, Fette, Protein — was macht was im Körper? Die drei Makros im wissenschaftlichen Überblick.",
    category: "Grundlagen",
    categoryColor: "teal",
    readTime: 8,
    date: "2025-03-25",
  },
  {
    id: "abendessen-macht-dick",
    title: "Macht Abendessen wirklich dick?",
    excerpt:
      "Chrononutrition vs. Energiebilanz — was sagt die Wissenschaft zum Thema Mahlzeiten-Timing?",
    category: "Mythen",
    categoryColor: "pink",
    readTime: 5,
    date: "2025-03-20",
  },
  {
    id: "detox-mythos",
    title: "Detox-Tees & Saftkuren — funktioniert das?",
    excerpt:
      "Dein Körper hat bereits ein perfektes Entgiftungssystem. Warum Detox-Produkte wissenschaftlich nicht halten.",
    category: "Mythen",
    categoryColor: "pink",
    readTime: 5,
    date: "2025-03-15",
  },
  {
    id: "reizdarm-fodmap",
    title: "Reizdarm & FODMAP — was wirklich hilft",
    excerpt:
      "FODMAPs können Symptome triggern — aber die Eliminationsdiät ist kein Dauerzustand. Die Evidenz im Überblick.",
    category: "Darm",
    categoryColor: "sky",
    readTime: 6,
    date: "2025-03-10",
  },
  {
    id: "mikrobiom-grundlagen",
    title: "Das Mikrobiom — dein zweites Gehirn?",
    excerpt:
      "Billionen Bakterien im Darm beeinflussen Verdauung, Immunsystem und sogar die Psyche. Was wir wirklich wissen.",
    category: "Darm",
    categoryColor: "sky",
    readTime: 7,
    date: "2025-03-05",
  },
  {
    id: "jojo-effekt-wissenschaft",
    title: "Der Jojo-Effekt — Mythos oder Realität?",
    excerpt:
      "Metabolische Adaptation, Leptin-Resistenz und warum Crashdiäten fast immer scheitern.",
    category: "Abnehmen",
    categoryColor: "orange",
    readTime: 6,
    date: "2025-03-01",
  },
  {
    id: "wie-viel-protein-pro-tag",
    title: "Wie viel Protein brauchst du wirklich?",
    excerpt:
      "0,8 g, 1,6 g oder 2,2 g pro kg? Die optimale Proteinmenge hängt von deinem Ziel ab.",
    category: "Protein",
    categoryColor: "violet",
    readTime: 7,
    date: "2025-02-20",
  },
  {
    id: "sucralose-sicher-oder-nicht",
    title: "Sucralose — sicher oder nicht?",
    excerpt:
      "Erhitzen, Darmflora, Insulinreaktion — was sagt die EFSA wirklich zur Sucralose-Sicherheit?",
    category: "Süßstoffe",
    categoryColor: "emerald",
    readTime: 5,
    date: "2025-02-10",
  },
  {
    id: "protein-thermogenese-kalorien",
    title: "Proteinkalorien zählen nicht 1:1",
    excerpt:
      "20–30% verbrennt dein Körper beim Verdauen — der thermische Effekt von Protein erklärt.",
    category: "Protein",
    categoryColor: "violet",
    readTime: 5,
    date: "2025-02-01",
  },
  {
    id: "aspartam-wirklich-gefaehrlich",
    title: "Ist Aspartam wirklich gefährlich?",
    excerpt:
      "IARC Gruppe 2B, 7 Liter Cola Zero — was das wirklich bedeutet, sachlich erklärt.",
    category: "Süßstoffe",
    categoryColor: "emerald",
    readTime: 6,
    date: "2025-01-15",
  },
];
