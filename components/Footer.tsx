import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mx-auto max-w-[1080px] px-5 pt-10 pb-6 min-[860px]:px-8 min-[860px]:pt-[52px] min-[860px]:pb-8"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <div
        className="mb-6 grid grid-cols-1 gap-6 pb-6 min-[860px]:mb-9 min-[860px]:grid-cols-[1.5fr_1fr_1fr] min-[860px]:gap-[60px] min-[860px]:pb-9"
        style={{ borderBottom: "1px solid var(--color-line)" }}
      >
        <div>
          <div className="mb-2 text-[17px] font-extrabold tracking-[-0.03em] text-dark">
            NÄHRO
          </div>
          <p className="text-sm font-normal leading-[1.7] text-sub">
            Ernährung. Erklärt.
            <br />
            Wissenschaftlich. Ohne Umwege.
          </p>
        </div>
        <div>
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[.08em] text-sub">
            Navigation
          </div>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/artikel"
                className="text-sm font-medium text-dark no-underline transition-colors duration-150 hover:text-sub"
              >
                Alle Artikel
              </Link>
            </li>
            <li>
              <Link
                href="/kategorien"
                className="text-sm font-medium text-dark no-underline transition-colors duration-150 hover:text-sub"
              >
                Kategorien
              </Link>
            </li>
            <li>
              <Link
                href="/ueber-uns"
                className="text-sm font-medium text-dark no-underline transition-colors duration-150 hover:text-sub"
              >
                Über uns
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[.08em] text-sub">
            Prinzip
          </div>
          <p className="mb-4 text-sm font-normal leading-[1.7] text-sub">
            Quellenbasiert. Keine Produkte, keine Empfehlungen.
          </p>
          <Link
            href="/feed.xml"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sub no-underline transition-colors duration-150 hover:text-dark"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
            </svg>
            RSS Feed
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-xs text-sub min-[860px]:flex-row min-[860px]:items-center min-[860px]:justify-between">
        <span>NÄHRO — Wissenschaftlich fundierte Ernährungsaufklärung</span>
        <div className="flex items-center gap-4">
          <Link
            href="/impressum"
            className="text-sub no-underline transition-colors duration-150 hover:text-dark"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-sub no-underline transition-colors duration-150 hover:text-dark"
          >
            Datenschutz
          </Link>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
