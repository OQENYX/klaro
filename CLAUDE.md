# CLAUDE.md — NÄHRO Ernährungs-Website

Dieses Dokument ist der persistente Kontext für Claude Code.
Immer lesen bevor du Code schreibst oder änderst.

---

## Projektübersicht

**NÄHRO** ist eine wissenschaftliche Ernährungs-Aufklärungswebsite auf Deutsch.
Ziel: Komplexe Ernährungsthemen einfach, bold und quellenbasiert erklären.
Keine Produkte. Kein Marketing. Nur Fakten mit Belegen.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · MDX · TypeScript · Resend

**Deployment:** Google Cloud Run — Domain: nähro.ch (= xn--nhro-loa.ch)
**Redirect:** naehro.ch → xn--nhro-loa.ch via Cloudflare (301, DNS propagiert)

---

## Design-Prinzipien — NICHT abweichen

> "Design ist nicht wie etwas aussieht. Design ist wie etwas funktioniert." — Jony Ive

### CSS-Variablen (in globals.css definiert — Tailwind v4)
| Variable | Wert | Verwendung |
|---|---|---|
| `--color-dark` | `#111111` | Body text, headlines |
| `--color-sub` | `#666666` | Meta, reading time, dates |
| `--color-line` | `#E5E5E3` | Borders, dividers |
| `--color-fill` | `#F5F5F3` | Card backgrounds, section fills |
| `--color-accent` | `#1A3D2B` | Primary accent, headlines, links |

In Tailwind v4 werden eigene Farben als CSS-Variablen im `@theme`-Block in globals.css definiert — **kein tailwind.config.ts**.
Verwendung in Klassen: `text-dark`, `text-sub`, `bg-fill`, `border-line`, `bg-accent`.

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
- Framer Motion (ScrollReveal/FadeIn/PageTransition existieren noch — sind bekannte Design-Verstöße, noch nicht bereinigt)

---

## Dateistruktur (aktuell)

```
klaro/
├── app/
│   ├── page.tsx                         # Homepage (Nav, Hero, Ticker, ArticleGrid, CategoryGrid, WhySection, NewsletterSignup, Footer)
│   ├── layout.tsx                       # Root layout (Inter font, metadata, RSS autodiscovery)
│   ├── error.tsx                        # Error boundary ("use client")
│   ├── not-found.tsx                    # Custom 404
│   ├── globals.css                      # Tailwind v4 @theme, CSS-Variablen
│   ├── opengraph-image.tsx              # OG Image 1200×630 (ImageResponse)
│   ├── icon.tsx                         # Favicon 32×32 (ImageResponse)
│   ├── apple-icon.tsx                   # Apple Touch Icon 180×180 (ImageResponse)
│   ├── manifest.ts                      # Web App Manifest
│   ├── robots.ts                        # robots.txt
│   ├── sitemap.ts                       # sitemap.xml (liest aus lib/articles.ts)
│   ├── feed.xml/
│   │   └── route.ts                     # RSS 2.0 Feed (Dynamic, liest aus data/articles.ts — bekanntes Problem)
│   ├── api/
│   │   ├── articles/
│   │   │   └── route.ts                 # GET /api/articles (JSON, für SearchModal)
│   │   ├── subscribe/
│   │   │   └── route.ts                 # POST /api/subscribe (Resend Audience)
│   │   └── cron/
│   │       └── newsletter/
│   │           └── route.ts             # GET /api/cron/newsletter (Cloud Scheduler, x-cron-secret)
│   ├── artikel/
│   │   ├── page.tsx                     # Artikel-Index
│   │   └── [slug]/
│   │       └── page.tsx                 # Einzelartikel (MDX, ArticleProgressBar, RelatedArticles)
│   ├── kategorien/
│   │   ├── page.tsx                     # Kategorie-Übersicht
│   │   └── [id]/
│   │       └── page.tsx                 # Kategorie-Detail
│   ├── datenschutz/
│   ├── impressum/
│   └── ueber-uns/
├── components/
│   ├── Nav.tsx                          # Navigation ("use client", ⌘K Suche, SearchModal)
│   ├── Footer.tsx                       # Footer (Nav, RSS-Link)
│   ├── Hero.tsx
│   ├── Ticker.tsx                       # Laufband ("use client", Links zu Artikeln)
│   ├── ArticleCard.tsx
│   ├── ArticleGrid.tsx
│   ├── ArticleProgressBar.tsx           # Scroll-Fortschrittsbalken ("use client")
│   ├── CategoryBadge.tsx
│   ├── CategoryCard.tsx
│   ├── CategoryGrid.tsx
│   ├── DataTable.tsx
│   ├── MdxContent.tsx
│   ├── MythDebunk.tsx
│   ├── NewsletterSignup.tsx             # Newsletter-Formular ("use client", POST /api/subscribe)
│   ├── RelatedArticles.tsx
│   ├── SearchModal.tsx                  # Suche ("use client", Fuse.js, GET /api/articles)
│   ├── ShareButton.tsx
│   ├── SourceList.tsx
│   ├── StatBlock.tsx
│   ├── WhySection.tsx
│   ├── BackButton.tsx
│   ├── FadeIn.tsx                       # Framer Motion — Design-Verstoß, noch offen
│   ├── ScrollReveal.tsx                 # Framer Motion — Design-Verstoß, noch offen
│   └── PageTransition.tsx              # Framer Motion — Design-Verstoß, noch offen
├── content/
│   └── artikel/                         # 26 MDX-Artikel (Source of Truth für Inhalte)
├── data/
│   └── articles.ts                      # Statisches Array (26 Einträge) — für SearchModal, Ticker, RSS Feed
│                                        # BEKANNTES PROBLEM: doppelte Datenhaltung (siehe unten)
├── lib/
│   ├── config.ts                        # siteConfig (Name, URL, Tagline)
│   ├── articles.ts                      # getAllArticles() — liest MDX-Frontmatter live
│   └── categories.ts                    # Kategorie-Definitionen
└── CLAUDE.md
```

---

## Zwei Datensysteme — WICHTIG

Das Projekt hat zwei parallele Datenhaltungen. Beide müssen beim Hinzufügen neuer Artikel befüllt werden:

### 1. `lib/articles.ts` — MDX-basiert (Server-seitig)
- Liest Frontmatter direkt aus den `.mdx`-Dateien
- Verwendet von: `sitemap.ts`, `/artikel/page.tsx`, `/artikel/[slug]/page.tsx`, `/api/cron/newsletter/route.ts`
- **Automatisch aktuell** — neuer MDX-Artikel → sofort sichtbar

### 2. `data/articles.ts` — Statisches Array (Client-seitig)
- Manuell gepflegtes Array mit `id`, `title`, `excerpt`, `category`, `categoryColor`, `readTime`, `date`
- Verwendet von: `SearchModal.tsx`, `Ticker.tsx`, `RelatedArticles.tsx`, `/api/articles/route.ts`, `feed.xml/route.ts`
- **Manuell pflegen** — neuer Artikel muss auch hier eingetragen werden

→ Langfristig sollte alles auf `lib/articles.ts` (MDX-basiert) umgestellt werden. Noch offen.

---

## Newsletter-System (Resend)

### Env-Variablen (in Google Cloud Run setzen)
| Variable | Beschreibung |
|---|---|
| `RESEND_API_KEY` | API Key von resend.com |
| `RESEND_AUDIENCE_ID` | Audience ID (Contacts → Audiences in Resend Dashboard) |
| `NEWSLETTER_FROM_EMAIL` | Absender, z.B. `newsletter@naehro.ch` (Domain muss in Resend verifiziert sein) |
| `CRON_SECRET` | Beliebiger langer String — schützt `/api/cron/newsletter` vor fremden Aufrufen |

### Google Cloud Scheduler Job einrichten (einmalig)
```bash
gcloud scheduler jobs create http naehro-newsletter \
  --schedule="0 8 * * *" \
  --uri="https://xn--nhro-loa.ch/api/cron/newsletter" \
  --http-method=GET \
  --headers="x-cron-secret=DEIN_CRON_SECRET" \
  --time-zone="Europe/Zurich" \
  --location=europe-west6
```
Läuft täglich um 8:00 Uhr Schweizer Zeit.

### Resend-Konto einrichten (einmalig, vom Nutzer)
1. Account auf resend.com anlegen (kostenlos bis 3.000 E-Mails/Monat)
2. Domain verifizieren (DNS-Einträge in Cloudflare setzen)
3. Audience erstellen → ID kopieren
4. API Key erstellen → als Env-Variable setzen

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
Wird automatisch auf alle `<table>` Tags in MDX angewendet. Kein manuelles Wrapping nötig.

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

**MDX-Gotcha:** `<1 %` in Tabellen wird als JSX-Tag geparst → Build-Fehler. Stattdessen `unter 1 %` schreiben.

---

## Kategorie-Definitionen

| Kategorie | categoryColor | Beschreibung |
|---|---|---|
| Süßstoffe | `emerald` | ADI-Werte, Studien, Mythen zu Süßungsmitteln |
| Protein | `violet` | Biologischer Wert, Thermogenese, Quellen |
| Abnehmen | `orange` | Kaloriendefizit, Tracking, Jojo-Effekt |
| Darm | `sky` | Mikrobiom, CED, Verträglichkeit |
| Mythen | `pink` | Debunking verbreiteter Ernährungsmythen |
| Grundlagen | `teal` | Makros, Mikros, Basiswissen |
| Frauengesundheit | `rose` | Zyklus, Endometriose, Körperfett |
| Männergesundheit | `indigo` | Testosteron, Zink, Vitamin D |

---

## Brand-Config

```ts
// lib/config.ts
export const siteConfig = {
  name: "NÄHRO",
  tagline: "Ernährung. Erklärt.",
  sub: "Wissenschaftlich. Ohne Umwege.",
  accentColor: "#1A3D2B",
  url: "https://nähro.ch",
};
```

**Niemals** den Brand-Namen hardcoden. Immer `siteConfig.name` verwenden.

---

## Feature-Status

| Feature | Status |
|---|---|
| 26 Artikel (MDX) | ✅ fertig |
| RSS Feed `/feed.xml` | ✅ fertig (nutzt `data/articles.ts`) |
| Suche (Fuse.js, ⌘K) | ✅ fertig |
| Artikel-Sharing (Web Share API) | ✅ fertig |
| "Weiterlesen" RelatedArticles | ✅ fertig |
| Artikel-Fortschrittsbalken | ✅ fertig |
| OG Image / Icons / Manifest | ✅ fertig |
| Custom 404 & Error Boundary | ✅ fertig |
| Security Headers (CSP, HSTS etc.) | ✅ fertig |
| Sitemap & robots.txt | ✅ fertig |
| Newsletter (Resend) | ✅ Code fertig — Env-Vars + Cloud Scheduler noch einzurichten |
| Cloudflare: naehro.ch → nähro.ch | ✅ Rule deployed, DNS propagiert |
| Dark Mode | ❌ nicht gebaut |
| Doppelte Datenhaltung auflösen | ❌ offen (data/articles.ts + lib/articles.ts) |
| Design-Verstöße: Framer Motion | ❌ offen (FadeIn, ScrollReveal, PageTransition) |
| Design-Verstöße: hover:shadow-lg | ❌ offen (RelatedArticles.tsx) |

---

## Regeln für Claude Code

1. **CSS-Variablen** — keine Inline-Hex-Werte, kein tailwind.config.ts (Tailwind v4)
2. **Brand aus `siteConfig`** — niemals hardcoded
3. **Kategorien aus `lib/categories.ts`** — nie inline definieren
4. **Neuer Artikel** = neue `.mdx` Datei + Eintrag in `data/articles.ts` (beide!)
5. **Mobile first** — jede Komponente erst auf 375px
6. **Kein `shadow-*`** — nur `border` für Tiefe
7. **Whitespace nie unterschreiten** — lieber mehr als weniger
8. **`max-w-[680px]`** für alle Fließtext-Inhalte in Artikeln
9. **`<1 %` in MDX-Tabellen** → immer `unter 1 %` schreiben (MDX-Parser-Bug)
