# CLAUDE.md — KLARO Ernährungs-Website

Dieses Dokument ist der persistente Kontext für Claude Code.
Immer lesen bevor du Code schreibst oder änderst.

---

## Projektübersicht

**KLARO** ist eine wissenschaftliche Ernährungs-Aufklärungswebsite auf Deutsch.
Ziel: Komplexe Ernährungsthemen einfach, bold und quellenbasiert erklären.
Keine Produkte. Kein Marketing. Nur Fakten mit Belegen.

**Stack:** Next.js 15 (App Router) · Tailwind CSS v3 · MDX · TypeScript

---

## Design-Prinzipien — NICHT abweichen

> "Design ist nicht wie etwas aussieht. Design ist wie etwas funktioniert." — Jony Ive

### Farben (in tailwind.config.ts definiert)
| Token | Hex | Verwendung |
|---|---|---|
| `green-deep` | `#1A3D2B` | Primary accent, headlines accent, links |
| `grey-warm` | `#F5F5F3` | Card backgrounds, section fills |
| `grey-border` | `#E5E5E3` | Borders, dividers |
| `text-primary` | `#111111` | Body text |
| `text-secondary` | `#666666` | Meta, reading time, dates |

### Typografie
- Font: **Inter** (Google Fonts) — einzige Schrift im gesamten Projekt
- Headlines: `font-black` (900) oder `font-extrabold` (800)
- Body: `font-normal` (400), `text-lg`, `leading-relaxed` (1.8)
- Max-width für Artikel-Body: `max-w-[680px]`

### Whitespace-Regeln
- Sections haben mindestens `py-24` (96px) vertikalen Abstand
- Kein `py-8` oder `py-12` für Major Sections — zu eng
- Zwischen Komponenten: mindestens `mb-16`
- Hero-Section: mindestens `pt-32`

### Was NIEMALS ins Design kommt
- Stock Photos oder Hero Images
- Schatten (`shadow-lg`, `shadow-xl`) — nur `border` erlaubt
- Gradient Backgrounds
- Mehr als 2 Schriftschnitte pro Seite
- Animationen außer `transition-colors` auf Hover

---

## Dateistruktur

```
klaro/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── artikel/
│   │   ├── page.tsx               # Article index
│   │   └── [slug]/
│   │       └── page.tsx           # Single article
│   ├── kategorien/
│   │   └── page.tsx               # Category overview
│   └── layout.tsx                 # Root layout (Inter font, NavBar, Footer)
├── components/
│   ├── StatBlock.tsx              # Große Datenpunkt-Komponente
│   ├── MythDebunk.tsx             # Mythos vs. Fakt Block
│   ├── DataTable.tsx              # Styled MDX table wrapper
│   ├── CategoryBadge.tsx          # Kategorie-Pill
│   ├── ArticleCard.tsx            # Artikel-Karte für Index
│   ├── ArticleProgressBar.tsx     # Scroll-Fortschrittsbalken
│   ├── SourceList.tsx             # Quellenverzeichnis
│   ├── NavBar.tsx                 # Navigation
│   └── Footer.tsx                 # Footer
├── content/
│   └── artikel/                   # Alle MDX-Artikel hier
│       ├── aspartam-wirklich-gefaehrlich.mdx
│       ├── protein-thermogenese-kalorien.mdx
│       └── kalorien-schaetzen-warum-es-scheitert.mdx
├── lib/
│   ├── config.ts                  # Brand-Konfiguration (Name, Tagline, etc.)
│   ├── articles.ts                # MDX parsing + frontmatter utilities
│   └── categories.ts              # Kategorie-Definitionen + Farben
└── CLAUDE.md                      # Diese Datei
```

---

## Komponenten-Referenz

### StatBlock
```tsx
<StatBlock
  value="7,1L"
  label="Cola Zero täglich bis zum ADI (80 kg)"
  sub="Und selbst das ist kein Gefahrenwert"
/>
```
Design: `value` in `text-7xl font-black text-green-deep`, `label` in `text-sm text-secondary`

### MythDebunk
```tsx
<MythDebunk
  myth="Aspartam ist krebserregend"
  reality="IARC Gruppe 2B bedeutet begrenzte Hinweise — gleiche Kategorie wie Handystrahlung."
/>
```

### DataTable
Wird automatisch auf alle `<table>` Tags in MDX angewendet.
Kein manuelles Wrapping nötig.

### CategoryBadge
```tsx
<CategoryBadge category="Süßstoffe" />
```
Farben in `lib/categories.ts` definiert.

---

## MDX-Artikel Frontmatter Schema

```yaml
---
title: string
description: string
category: "Süßstoffe" | "Protein" | "Abnehmen" | "Darm" | "Mythen" | "Grundlagen"
date: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
readingTime: number   # Minuten
sources:
  - label: "EFSA — Aspartam ADI Bewertung"
    url: "https://..."
---
```

---

## Kategorie-Definitionen

In `lib/categories.ts` definiert. Nicht inline hardcoden.

| Kategorie | Badge BG | Badge Text | Beschreibung |
|---|---|---|---|
| Süßstoffe | `#E8F5E9` | `#1A3D2B` | ADI-Werte, Studien, Mythen zu Süßungsmitteln |
| Protein | `#E3F2FD` | `#1565C0` | Biologischer Wert, Thermogenese, Quellen |
| Abnehmen | `#FFF3E0` | `#E65100` | Kaloriendefizit, Tracking, Jojo-Effekt |
| Darm | `#F3E5F5` | `#6A1B9A` | Mikrobiom, CED, Verträglichkeit |
| Mythen | `#FFEBEE` | `#C62828` | Debunking verbreiteter Ernährungsmythen |
| Grundlagen | `#F5F5F3` | `#424242` | Makros, Mikros, Basiswissen |

---

## Brand-Config

Alle Brand-Werte kommen aus `lib/config.ts`:

```ts
export const siteConfig = {
  name: "KLARO",
  tagline: "Ernährung. Erklärt.",
  sub: "Wissenschaftlich. Ohne Umwege.",
  accentColor: "#1A3D2B",
  url: "https://klaro.de"
}
```

**Niemals** den Brand-Namen hardcoden. Immer `siteConfig.name` verwenden.

---

## Inhaltliche Prinzipien

Der Content-Stil folgt einem klaren Muster:

1. **Behauptung aufgreifen** — Was glauben die meisten Menschen?
2. **Wissenschaftlich einordnen** — Was sagen Studien / Behörden wirklich?
3. **Konkret machen** — Zahlen, Tabellen, StatBlocks
4. **Confounding erklären** — Warum Beobachtungsstudien ≠ Kausalität
5. **Quelle angeben** — Immer, ohne Ausnahme

### Tonalität
- Direkt und respektvoll — kein Belehren
- Kurze Sätze. Klare Struktur.
- Fachjargon wird immer erklärt wenn er auftaucht
- Keine Produktempfehlungen in Artikeln

---

## Bekannte Inhaltsbasis

Folgende Themen haben bereits ausgearbeitete wissenschaftliche Grundlagen:

| Thema | Kernaussagen |
|---|---|
| Aspartam | ADI 40mg/kg, NOAEL÷100, IARC 2B ≠ Beweis, Confounding in Studien |
| Alle Süßstoffe | ADI-Tabelle EFSA, Acesulfam-K Update April 2025 (ADI erhöht auf 15mg/kg), Sucralose Re-eval 2026 |
| Protein | Thermogenese 20–30%, BW Tabelle, Effizienz pro 100kcal, Empfehlungen nach Ziel |
| Abnehmen | 30–40% Selbstunterschätzung, versteckte Kalorien, 20%-Argument, Strategie |
| Süßstoffe & Darm | Viszerale Hypersensitivität, Polyole vs. intensive Süßstoffe, CED-Kontext |

---

## Regeln für Claude Code

1. **Design-Tokens immer aus tailwind.config.ts** — keine Inline-Hex-Werte
2. **Brand aus siteConfig** — niemals hardcoded
3. **Kategorien aus lib/categories.ts** — nie inline definieren
4. **Neue Artikel = neue .mdx Datei** in /content/artikel/ — nie in tsx hardcoden
5. **Mobile first** — jede Komponente erst auf 375px testen
6. **Kein `shadow-*`** — nur `border` für Tiefe
7. **Whitespace nie unterschreiten** — lieber mehr als weniger
8. **`max-w-[680px]`** für alle Fließtext-Inhalte in Artikeln

---

## Zukünftige Features (noch nicht bauen — nur Kontext)

- [ ] RSS Feed für neue Artikel
- [ ] Search (Fuse.js, client-side)
- [ ] Dark Mode (CSS vars vorbereiten, aber nicht aktivieren)
- [ ] Artikel-Sharing (native share API)
- [ ] "Weiterlesen" Empfehlungen am Artikel-Ende
