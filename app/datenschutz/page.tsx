import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz — NÄHRO",
  description: "Datenschutzerklärung für NÄHRO — wie wir mit deinen Daten umgehen.",
};

export default function DatenschutzPage() {
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
          Datenschutz&shy;erklärung
        </h1>

        <div className="flex flex-col gap-10 text-[15px] leading-[1.75] text-sub">

          {/* Verantwortlicher */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Verantwortlicher
            </h2>
            <div className="text-dark">
              <p className="font-semibold">WEY Nutrition</p>
              <p>Luca Spangenberg &amp; Felipe Nikolai Wey</p>
              <p>Seestrasse 47, 8700 Küsnacht, Schweiz</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@naehro.ch"
                  className="text-dark underline decoration-[rgba(0,0,0,.2)] underline-offset-2 transition-colors hover:decoration-dark"
                >
                  info@naehro.ch
                </a>
              </p>
            </div>
          </section>

          {/* Grundsatz */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Grundsatz
            </h2>
            <p>
              NÄHRO erhebt so wenig Daten wie möglich. Diese Website verwendet keine
              Tracking-Tools, keine Werbenetzwerke und keine sozialen Plugins von Drittanbietern.
              Wir setzen keine Cookies ein, die einer Einwilligung bedürfen.
            </p>
          </section>

          {/* Server-Logs */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Server-Logdaten
            </h2>
            <div className="flex flex-col gap-3">
              <p>
                Beim Aufrufen dieser Website werden automatisch technische Daten in sogenannten
                Server-Logfiles erfasst, die dein Browser übermittelt:
              </p>
              <ul className="ml-4 flex flex-col gap-1.5 list-disc">
                <li>IP-Adresse (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene Seite / URL</li>
                <li>Browser-Typ und -Version</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs
                und zur Fehleranalyse verwendet. Eine Zuordnung zu bestimmten Personen ist uns
                nicht möglich. Die Logdaten werden nach spätestens 30 Tagen automatisch gelöscht.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren
                Betrieb der Website).
              </p>
            </div>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Hosting
            </h2>
            <p>
              Diese Website wird auf der Infrastruktur von{" "}
              <strong className="text-dark font-semibold">Google Cloud Run</strong> (Google LLC,
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) betrieben. Dabei können
              technische Daten an Server in der EU übermittelt werden. Google ist unter dem
              EU-US Data Privacy Framework zertifiziert.
            </p>
          </section>

          {/* Kontaktaufnahme */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Kontaktaufnahme per E-Mail
            </h2>
            <p>
              Wenn du uns per E-Mail kontaktierst, werden deine Angaben (E-Mail-Adresse,
              Nachrichteninhalt) zur Bearbeitung deiner Anfrage gespeichert. Wir geben diese
              Daten nicht an Dritte weiter. Du kannst jederzeit die Löschung der gespeicherten
              Daten verlangen.
            </p>
          </section>

          {/* Keine Cookies */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Cookies
            </h2>
            <p>
              Diese Website setzt keine Cookies, die einer Einwilligung bedürfen. Es werden
              ausschließlich technisch notwendige Daten für den Betrieb der Website verarbeitet.
            </p>
          </section>

          {/* Deine Rechte */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Deine Rechte
            </h2>
            <div className="flex flex-col gap-3">
              <p>Du hast jederzeit das Recht auf:</p>
              <ul className="ml-4 flex flex-col gap-1.5 list-disc">
                <li><strong className="text-dark font-medium">Auskunft</strong> — welche Daten wir über dich gespeichert haben</li>
                <li><strong className="text-dark font-medium">Berichtigung</strong> — unrichtiger Daten</li>
                <li><strong className="text-dark font-medium">Löschung</strong> — deiner gespeicherten Daten</li>
                <li><strong className="text-dark font-medium">Einschränkung</strong> der Verarbeitung</li>
                <li><strong className="text-dark font-medium">Datenübertragbarkeit</strong></li>
                <li><strong className="text-dark font-medium">Widerspruch</strong> gegen die Verarbeitung</li>
              </ul>
              <p>
                Zur Ausübung deiner Rechte wende dich an:{" "}
                <a
                  href="mailto:info@naehro.ch"
                  className="text-dark underline decoration-[rgba(0,0,0,.2)] underline-offset-2 transition-colors hover:decoration-dark"
                >
                  info@naehro.ch
                </a>
              </p>
              <p>
                Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
                beschweren. In der Schweiz ist dies der{" "}
                <a
                  href="https://www.edoeb.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark underline decoration-[rgba(0,0,0,.2)] underline-offset-2 transition-colors hover:decoration-dark"
                >
                  Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB)
                </a>
                .
              </p>
            </div>
          </section>

          {/* Änderungen */}
          <section>
            <h2 className="mb-3 text-[13px] font-bold uppercase tracking-[.08em] text-sub">
              Änderungen dieser Erklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils
              aktuelle Version ist auf dieser Seite abrufbar.
            </p>
          </section>

          <p className="text-xs text-sub/60">Stand: April 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
