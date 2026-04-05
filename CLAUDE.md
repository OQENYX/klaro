# CLAUDE.md — NÄHRO Ernährungs-Website

Dieses Dokument ist der persistente Kontext für Claude Code.
Immer lesen bevor du Code schreibst oder änderst.

---

## Projektübersicht

**NÄHRO** ist eine wissenschaftliche Ernährungs-Aufklärungswebsite auf Deutsch.
Ziel: Komplexe Ernährungsthemen einfach, bold und quellenbasiert erklären.
Keine Produkte. Kein Marketing. Nur Fakten mit Belegen.

**Stack:** Next.js 15 (App Router) · Tailwind CSS v4 · MDX · TypeScript · Resend (Email)

**Hosting:** Google Cloud (kein Vercel — keine vercel.json anlegen)

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

## Dateistruktur (aktuell)

```
klaro/
├── app/
│   ├── page.tsx                         # Homepage
│   ├── layout.tsx                       # Root layout (Inter font, Nav, Footer)
│   ├── globals.css
│   ├── artikel/
│   │   ├── page.tsx                     # Artikel-Index mit Filterung
│   │   └── [slug]/page.tsx              # Einzelartikel
│   ├── kategorien/
│   │   ├── page.tsx                     # Kategorien-Übersicht
│   │   └── [id]/page.tsx                # Kategorie-Detail
│   ├── feed.xml/route.ts                # RSS Feed (fertig)
│   ├── api/
│   │   ├── articles/route.ts            # GET alle Artikel als JSON
│   │   ├── subscribe/route.ts           # POST Newsletter-Anmeldung (Resend)
│   │   └── cron/newsletter/route.ts     # GET täglicher Newsletter-Versand
│   ├── impressum/page.tsx
│   ├── datenschutz/page.tsx
│   └── ueber-uns/page.tsx
├── components/
│   ├── NewsletterSignup.tsx             # Newsletter-Formular (auf Homepage)
│   ├── RelatedArticles.tsx             # "Weiterlesen" am Artikel-Ende
│   ├── SearchModal.tsx                 # Suche (Fuse.js, Cmd+K)
│   ├── ShareButton.tsx                 # Native Share API
│   ├── ArticleProgressBar.tsx          # Scroll-Fortschrittsbalken
│   ├── StatBlock.tsx                   # Große Datenpunkt-Komponente
│   ├── MythDebunk.tsx                  # Mythos vs. Fakt Block
│   ├── DataTable.tsx                   # Styled MDX table wrapper
│   ├── CategoryBadge.tsx               # Kategorie-Pill
│   ├── ArticleCard.tsx / ArticleGrid.tsx
│   ├── CategoryCard.tsx / CategoryGrid.tsx
│   ├── SourceList.tsx                  # Quellenverzeichnis
│   ├── Hero.tsx / Ticker.tsx / WhySection.tsx
│   ├── Nav.tsx / Footer.tsx / BackButton.tsx
│   ├── MdxContent.tsx                  # MDX Renderer
│   ├── ScrollReveal.tsx / FadeIn.tsx / PageTransition.tsx  # ⚠️ siehe unten
│   └── ...
├── content/
│   └── artikel/                        # 26 MDX-Artikel (Stand April 2026)
├── data/
│   └── articles.ts                     # ⚠️ Statisches Array — siehe unten
├── lib/
│   ├── config.ts                       # Brand-Konfiguration
│   ├── articles.ts                     # MDX parsing via gray-matter (server-side)
│   └── categories.ts                   # Kategorie-Definitionen + Farben
└── CLAUDE.md
```

---

## Zwei Artikel-Datensysteme — wichtig zu verstehen

Es gibt **zwei parallele Datenquellen** für Artikel:

| | `lib/articles.ts` | `data/articles.ts` |
|---|---|---|
| Art | Liest MDX-Dateien via `fs` | Statisches TypeScript-Array |
| Verwendet von | RSS Feed, Cron/Newsletter, API-Route | SearchModal, RelatedArticles, ArticleCard |
| Problem | — | Muss manuell synchron gehalten werden |

**Wenn ein neuer Artikel angelegt wird:** MDX-Datei in `/content/artikel/` erstellen UND Eintrag in `data/articles.ts` hinzufügen. Sonst fehlt er in Suche und Weiterlesen-Empfehlungen.

Langfristig sollte `data/articles.ts` durch `lib/articles.ts` ersetzt werden — noch nicht gemacht.

---

## Newsletter-System (fertig)

Gebaut mit **Resend** (resend.com). Benötigt 4 Env-Variablen:

```
RESEND_API_KEY=re_xxx...
RESEND_AUDIENCE_ID=uuid-der-audience
NEWSLETTER_FROM_EMAIL=newsletter@naehro.ch
CRON_SECRET=langer-zufaelliger-string
```

**Ablauf:**
1. Nutzer meldet sich über `NewsletterSignup`-Komponente an → `POST /api/subscribe` → in Resend Audience gespeichert
2. Google Cloud Scheduler ruft täglich 09:00 Uhr `GET /api/cron/newsletter` auf
3. Cron prüft: Artikel mit `date` in den letzten 25 Stunden?
4. Falls ja: HTML-Email an alle Abonnenten via Resend

**Google Cloud Scheduler einrichten (einmalig):**
```bash
gcloud scheduler jobs create http naehro-newsletter \
  --schedule="0 9 * * *" \
  --uri="https://deine-domain.ch/api/cron/newsletter" \
  --http-method=GET \
  --headers="Authorization=Bearer DEIN_CRON_SECRET" \
  --time-zone="Europe/Zurich" \
  --location="europe-west1"
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

### MythDebunk
```tsx
<MythDebunk
  myth="Aspartam ist krebserregend"
  reality="IARC Gruppe 2B bedeutet begrenzte Hinweise — gleiche Kategorie wie Handystrahlung."
/>
```

### DataTable
Wird automatisch auf alle `<table>` Tags in MDX angewendet. Kein manuelles Wrapping.

### CategoryBadge
```tsx
<CategoryBadge category="Süßstoffe" />
```

---

## MDX-Artikel Frontmatter Schema

```yaml
---
title: string
description: string
category: "Süßstoffe" | "Protein" | "Abnehmen" | "Darm" | "Mythen" | "Grundlagen" | "Frauengesundheit" | "Männergesundheit"
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

| Kategorie | Badge BG | Badge Text |
|---|---|---|
| Süßstoffe | `#E8F5E9` | `#1A3D2B` |
| Protein | `#E3F2FD` | `#1565C0` |
| Abnehmen | `#FFF3E0` | `#E65100` |
| Darm | `#F3E5F5` | `#6A1B9A` |
| Mythen | `#FFEBEE` | `#C62828` |
| Grundlagen | `#F5F5F3` | `#424242` |
| Frauengesundheit | `#FCE4EC` | `#AD1457` |
| Männergesundheit | `#E0F2F1` | `#00695C` |

---

## Brand-Config

Alle Brand-Werte kommen aus `lib/config.ts`:

```ts
export const siteConfig = {
  name: "NÄHRO",
  tagline: "Ernährung. Erklärt.",
  sub: "Wissenschaftlich. Ohne Umwege.",
  accentColor: "#1A3D2B",
  url: "https://nähro.ch"
}
```

**Niemals** den Brand-Namen hardcoden. Immer `siteConfig.name` verwenden.

---

## Bekannte Artikel (26, Stand April 2026)

| Kategorie | Slugs |
|---|---|
| Süßstoffe | aspartam-wirklich-gefaehrlich, sucralose-sicher-oder-nicht, acesulfam-k |
| Protein | protein-thermogenese-kalorien, wie-viel-protein-pro-tag, whey-isolat-vs-konzentrat |
| Abnehmen | kalorien-schaetzen-warum-es-scheitert, kaloriendichte-satt-werden, intermittierendes-fasten, jojo-effekt-wissenschaft |
| Grundlagen | kalorien-was-sind-sie-wirklich, makronaehrstoffe-erklaert, deutsche-ernaehrung-kalorien-protein |
| Mythen | abendessen-macht-dick, detox-mythos, superfoods-mythos, kohlenhydrate-abends-mythos |
| Darm | mikrobiom-grundlagen, reizdarm-fodmap, morbus-crohn-suessstoffe |
| Frauengesundheit | endometriose-ernaehrung, periode-ernaehrung-zyklus, koerperfett-frauen |
| Männergesundheit | testosteron-ernaehrung, vitamin-d-maenner, zink-magnesium-maenner |

---

## Bekannte Probleme (noch offen)

1. **Doppelte Datenhaltung** — `data/articles.ts` und `lib/articles.ts` koexistieren. Ziel: alles auf `lib/articles.ts` umstellen, damit SearchModal und RelatedArticles live aus MDX lesen statt aus statischem Array.

2. **Design-Verstöße in bestehenden Komponenten:**
   - `RelatedArticles.tsx:103` — `hover:shadow-lg` → gegen Design-Prinzipien
   - `ScrollReveal.tsx`, `FadeIn.tsx`, `PageTransition.tsx` — Animationen über `transition-colors` hinaus → gegen Design-Prinzipien

3. **RSS Feed nutzt `data/articles.ts`** statt `lib/articles.ts` — neue Artikel ohne `data/articles.ts`-Eintrag fehlen im Feed.

---

## Regeln für Claude Code

1. **Design-Tokens immer aus tailwind.config.ts** — keine Inline-Hex-Werte
2. **Brand aus siteConfig** — niemals hardcoded
3. **Kategorien aus lib/categories.ts** — nie inline definieren
4. **Neue Artikel = neue .mdx Datei** in `/content/artikel/` + Eintrag in `data/articles.ts`
5. **Mobile first** — jede Komponente erst auf 375px testen
6. **Kein `shadow-*`** — nur `border` für Tiefe
7. **Whitespace nie unterschreiten** — lieber mehr als weniger
8. **`max-w-[680px]`** für alle Fließtext-Inhalte in Artikeln
9. **Kein vercel.json** — Hosting ist Google Cloud

---

## Feature-Status

| Feature | Status |
|---|---|
| Artikel-Index + Einzelartikel | ✅ fertig |
| Kategorien-Übersicht + Detail | ✅ fertig |
| Scroll-Fortschrittsbalken | ✅ fertig |
| "Weiterlesen"-Empfehlungen | ✅ fertig (`RelatedArticles.tsx`) |
| Suche (Fuse.js, Cmd+K) | ✅ fertig (`SearchModal.tsx`) |
| Share-Button (native API) | ✅ fertig (`ShareButton.tsx`) |
| RSS Feed | ✅ fertig (`/feed.xml`) |
| Newsletter-Anmeldung | ✅ fertig (`NewsletterSignup.tsx`) |
| Email-Automation bei neuen Artikeln | ✅ fertig (Resend + GCloud Scheduler) |
| Dark Mode | ❌ noch nicht gebaut |
| Doppelte Datenhaltung auflösen | ❌ noch nicht gemacht |
