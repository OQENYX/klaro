import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Über uns — NÄHRO",
  description:
    "NÄHRO ist das Wissensportal von WEY Nutrition. Wissenschaftliche Ernährungsaufklärung — quellenbasiert, verständlich, für alle.",
};

export default function UeberUnsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative overflow-hidden px-8 pt-20 pb-16 text-white max-[860px]:px-5"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 0% 0%,#a78bfa,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#0d9488,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#6d28d9,transparent 55%),linear-gradient(145deg,#134e4a,#4c1d95)",
        }}
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-white/50">
            Über uns
          </div>
          <h1
            className="rv max-w-[640px] font-extrabold leading-[1.05] text-white"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              letterSpacing: "-.04em",
            }}
          >
            Ernährungswissen.
            <br />
            <span style={{ color: "rgba(255,255,255,.6)" }}>
              Frei zugänglich.
            </span>
          </h1>
          <p className="rv mt-5 max-w-[520px] text-[15px] font-normal leading-[1.7] text-white/70">
            NÄHRO ist das Wissensportal von WEY Nutrition.
            Unser Ziel: Die Wissenschaft hinter guter Ernährung verständlich
            und quellenbasiert erklären — damit du weißt, was wirklich zählt.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-[1080px] px-8 py-20 max-[860px]:px-5">
        <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Unsere Mission
        </div>
        <div
          className="rv mb-10 max-w-[600px] font-extrabold leading-[1.04] text-dark"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            letterSpacing: "-.035em",
          }}
        >
          Wissenschaft statt Meinung.
        </div>

        <div className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
          {[
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
              ),
              title: "Quellenbasiert",
              text: "Jede Aussage wird mit wissenschaftlichen Studien, EFSA-Bewertungen oder behördlichen Daten belegt. Keine Behauptung ohne Beleg.",
              gradient:
                "linear-gradient(135deg, rgba(5,150,105,.08), rgba(52,211,153,.05))",
              border: "rgba(5,150,105,.12)",
              iconColor: "#059669",
            },
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              ),
              title: "Unabhängig",
              text: "Kein Supplement-Marketing, keine gesponserten Artikel, keine versteckten Produktempfehlungen. Nur Fakten.",
              gradient:
                "linear-gradient(135deg, rgba(124,58,237,.08), rgba(167,139,250,.05))",
              border: "rgba(124,58,237,.12)",
              iconColor: "#7C3AED",
            },
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
              ),
              title: "Verständlich",
              text: "Wissenschaftliche Erkenntnisse werden so aufbereitet, dass sie jeder versteht — ohne an Genauigkeit zu verlieren.",
              gradient:
                "linear-gradient(135deg, rgba(234,88,12,.08), rgba(251,191,36,.05))",
              border: "rgba(234,88,12,.12)",
              iconColor: "#EA580C",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`rv ${i === 1 ? "d1" : i === 2 ? "d2" : ""} flex flex-col gap-4 rounded-[22px] p-7`}
              style={{
                background: card.gradient,
                border: `1px solid ${card.border}`,
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-[14px]"
                style={{
                  background: "white",
                  color: card.iconColor,
                  boxShadow: "0 1px 4px rgba(0,0,0,.06)",
                }}
              >
                {card.icon}
              </div>
              <div
                className="text-[17px] font-extrabold text-dark"
                style={{ letterSpacing: "-.02em" }}
              >
                {card.title}
              </div>
              <div className="text-[14px] font-normal leading-[1.7] text-sub">
                {card.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WEY Nutrition Connection */}
      <section className="bg-bg py-20">
        <div className="mx-auto max-w-[1080px] px-8 max-[860px]:px-5">
          <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
            Das Projekt
          </div>
          <div
            className="rv mb-10 font-extrabold leading-[1.04] text-dark"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              letterSpacing: "-.035em",
            }}
          >
            NÄHRO &times; WEY Nutrition.
          </div>

          <div className="grid grid-cols-2 gap-4 max-[860px]:grid-cols-1">
            {/* NÄHRO card */}
            <div
              className="rv flex flex-col gap-5 rounded-[22px] bg-white p-8"
              style={{
                border: "1px solid rgba(0,0,0,.05)",
                boxShadow: "0 2px 12px rgba(0,0,0,.04)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-[16px]"
                style={{
                  background:
                    "linear-gradient(135deg, #4c1d95, #0d9488)",
                }}
              >
                <span className="text-[15px] font-extrabold text-white">
                  K
                </span>
              </div>
              <div>
                <div
                  className="mb-1 text-[19px] font-extrabold text-dark"
                  style={{ letterSpacing: "-.025em" }}
                >
                  NÄHRO
                </div>
                <div className="text-[13px] font-semibold text-sub">
                  Wissensportal
                </div>
              </div>
              <div className="text-[14px] font-normal leading-[1.7] text-sub">
                NÄHRO ist die Aufklärungsplattform: Hier werden
                Ernährungsthemen wissenschaftlich eingeordnet, Mythen
                hinterfragt und komplexe Studien verständlich aufbereitet.
                Komplett kostenlos und ohne Registrierung.
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {["Quellenbasiert", "Kostenlos", "Unabhängig"].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="rounded-full px-3 py-1.5 text-[11px] font-bold"
                      style={{
                        background: "rgba(124,58,237,.08)",
                        color: "#7C3AED",
                      }}
                    >
                      {pill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* WEY Nutrition card */}
            <div
              className="rv d1 flex flex-col gap-5 rounded-[22px] bg-white p-8"
              style={{
                border: "1px solid rgba(0,0,0,.05)",
                boxShadow: "0 2px 12px rgba(0,0,0,.04)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-[16px]"
                style={{
                  background:
                    "linear-gradient(135deg, #059669, #34d399)",
                }}
              >
                <span className="text-[15px] font-extrabold text-white">
                  W
                </span>
              </div>
              <div>
                <div
                  className="mb-1 text-[19px] font-extrabold text-dark"
                  style={{ letterSpacing: "-.025em" }}
                >
                  WEY Nutrition
                </div>
                <div className="text-[13px] font-semibold text-sub">
                  Ernährungsprodukte
                </div>
              </div>
              <div className="text-[14px] font-normal leading-[1.7] text-sub">
                WEY Nutrition entwickelt hochwertige Ernährungsprodukte
                — von Proteinpulvern bis zu funktionellen Lebensmitteln.
                Alles auf gute Ernährung ausgerichtet: ob zum Abnehmen,
                Muskelaufbau oder einfach für eine bessere Versorgung im Alltag.
                Die Produktentwicklung basiert auf denselben wissenschaftlichen
                Grundlagen, die auch NÄHRO vermittelt.
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {["Supplements", "Funktionelle Foods", "Evidenzbasiert"].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="rounded-full px-3 py-1.5 text-[11px] font-bold"
                      style={{
                        background: "rgba(5,150,105,.08)",
                        color: "#059669",
                      }}
                    >
                      {pill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Connection explanation */}
          <div
            className="rv mt-4 rounded-[22px] p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,.04), rgba(5,150,105,.04))",
              border: "1px solid rgba(0,0,0,.05)",
            }}
          >
            <div className="flex items-start gap-4 max-[860px]:flex-col">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,.12), rgba(5,150,105,.12))",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <div>
                <div
                  className="mb-2 text-[15px] font-extrabold text-dark"
                  style={{ letterSpacing: "-.02em" }}
                >
                  Warum beides zusammengehört
                </div>
                <div className="max-w-[640px] text-[14px] font-normal leading-[1.7] text-sub">
                  WEY Nutrition steht für Produkte, die auf echte Ernährungswissenschaft
                  setzen — nicht auf Marketing-Hypes. NÄHRO ist die Aufklärungsseite
                  dazu: Hier erklären wir die Wissenschaft hinter guter Ernährung,
                  damit du fundierte Entscheidungen treffen kannst. Keine versteckten
                  Verkaufsabsichten — einfach Wissen für alle.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-[1080px] px-8 py-20 max-[860px]:px-5">
        <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Unser Ansatz
        </div>
        <div
          className="rv mb-10 max-w-[600px] font-extrabold leading-[1.04] text-dark"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            letterSpacing: "-.035em",
          }}
        >
          So entstehen unsere Artikel.
        </div>

        <div className="grid grid-cols-4 gap-4 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1">
          {[
            {
              step: "01",
              title: "Recherche",
              text: "Primärquellen, Metaanalysen und behördliche Bewertungen bilden die Grundlage.",
            },
            {
              step: "02",
              title: "Einordnung",
              text: "Wir prüfen Studiendesign, Confounding und Evidenzlevel — nicht nur die Schlagzeile.",
            },
            {
              step: "03",
              title: "Aufbereitung",
              text: "Komplexe Zusammenhänge werden in klare, verständliche Sprache übersetzt.",
            },
            {
              step: "04",
              title: "Quellenangabe",
              text: "Jede Aussage wird mit der Originalquelle verlinkt. Transparenz ohne Ausnahme.",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className={`rv ${i === 1 ? "d1" : i === 2 ? "d2" : i === 3 ? "d3" : ""} flex flex-col gap-3 rounded-[22px] bg-white p-6`}
              style={{
                border: "1px solid rgba(0,0,0,.05)",
                boxShadow: "0 2px 12px rgba(0,0,0,.04)",
              }}
            >
              <div
                className="text-[32px] font-extrabold"
                style={{
                  letterSpacing: "-.03em",
                  background:
                    "linear-gradient(135deg, #7C3AED, #059669)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.step}
              </div>
              <div
                className="text-[15px] font-extrabold text-dark"
                style={{ letterSpacing: "-.02em" }}
              >
                {item.title}
              </div>
              <div className="text-[13px] font-normal leading-[1.7] text-sub">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-[1080px] px-8 max-[860px]:px-5">
          <div
            className="rv grid grid-cols-4 gap-6 max-[860px]:grid-cols-2 max-[480px]:grid-cols-1"
          >
            {[
              { value: "100%", label: "Quellenbasiert" },
              { value: "0", label: "Produktwerbung" },
              { value: "6", label: "Themenbereiche" },
              { value: "Frei", label: "Zugänglich für alle" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-[36px] font-extrabold"
                  style={{
                    letterSpacing: "-.03em",
                    background:
                      "linear-gradient(135deg, #7C3AED, #059669)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-sub">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1080px] px-8 py-20 max-[860px]:px-5">
        <div className="rv text-center">
          <div
            className="mb-3 font-extrabold leading-[1.04] text-dark"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              letterSpacing: "-.035em",
            }}
          >
            Bereit für echtes Wissen?
          </div>
          <p className="mx-auto mb-8 max-w-[440px] text-[15px] leading-[1.7] text-sub">
            Entdecke quellenbasierte Artikel zu den wichtigsten
            Ernährungsthemen — kostenlos und ohne Anmeldung.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/artikel"
              className="rounded-full bg-dark px-7 py-3.5 text-[14px] font-bold text-white no-underline transition-opacity duration-150 hover:opacity-80"
            >
              Artikel lesen
            </Link>
            <Link
              href="/kategorien"
              className="rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-dark no-underline transition-all duration-150 hover:bg-[#e5e5e8]"
              style={{ border: "1px solid rgba(0,0,0,.1)" }}
            >
              Kategorien entdecken
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollReveal />
    </>
  );
}
