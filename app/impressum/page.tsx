import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum — NÄHRO",
  description: "Impressum und rechtliche Angaben für NÄHRO — das wissenschaftliche Ernährungsportal.",
};

export default function ImpressumPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[720px] px-5 py-14 min-[860px]:px-8 min-[860px]:py-20">

        <div className="mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
          Rechtliches
        </div>
        <h1
          className="mb-10 font-extrabold leading-[1.04] text-dark min-[860px]:mb-14"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-.035em" }}
        >
          Impressum
        </h1>

        <div className="flex flex-col gap-10 text-[15px] leading-[1.75] text-sub">

          {/* Betreiber */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Betreiber
            </h2>
            <div className="text-dark">
              <p className="font-semibold">WEY Nutrition</p>
              <p>Luca Spangenberg &amp; Felipe Nikolai Wey</p>
              <p>Seestrasse 47</p>
              <p>8700 Küsnacht</p>
              <p>Schweiz</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Kontakt
            </h2>
            <div className="text-dark">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@naehro.ch"
                  className="text-dark underline decoration-[rgba(0,0,0,.2)] underline-offset-2 transition-colors hover:decoration-dark"
                >
                  info@naehro.ch
                </a>
              </p>
              <p>Website:{" "}
                <a
                  href="https://nähro.ch"
                  className="text-dark underline decoration-[rgba(0,0,0,.2)] underline-offset-2 transition-colors hover:decoration-dark"
                >
                  nähro.ch
                </a>
              </p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Haftungsausschluss
            </h2>
            <div className="flex flex-col gap-3 text-sub">
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Trotzdem
                können wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der
                Inhalte übernehmen.
              </p>
              <p>
                Die auf NÄHRO veröffentlichten Inhalte dienen ausschließlich zu
                Informationszwecken und ersetzen keine medizinische oder ernährungstherapeutische
                Beratung. Bei gesundheitlichen Fragen wende dich bitte an eine qualifizierte
                Fachperson.
              </p>
            </div>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Urheberrecht
            </h2>
            <p>
              Alle Inhalte dieser Website — Texte, Grafiken, Logos, Daten — sind urheberrechtlich
              geschützt. Die Vervielfältigung, Bearbeitung oder Verbreitung ohne ausdrückliche
              schriftliche Genehmigung ist untersagt.
            </p>
          </section>

          {/* Externe Links */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Externe Links
            </h2>
            <p>
              Diese Website enthält Verweise auf externe Websites Dritter. Auf den Inhalt dieser
              fremden Seiten haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist
              stets der jeweilige Anbieter verantwortlich.
            </p>
          </section>

          {/* Streitschlichtung */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark underline decoration-[rgba(0,0,0,.2)] underline-offset-2 transition-colors hover:decoration-dark"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <p className="text-xs text-sub/60">Stand: April 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
