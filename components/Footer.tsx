import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mx-auto max-w-[1080px] px-8 pt-[52px] pb-8 max-[860px]:px-5"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <div
        className="mb-9 grid gap-[60px] pb-9 max-[860px]:grid-cols-1 max-[860px]:gap-8"
        style={{
          gridTemplateColumns: "1.5fr 1fr 1fr",
          borderBottom: "1px solid var(--color-line)",
        }}
      >
        <div>
          <div className="mb-2 text-[17px] font-extrabold tracking-[-0.03em] text-dark">
            KLARO
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
          <p className="text-sm font-normal leading-[1.7] text-sub">
            Quellenbasiert. Keine Produkte, keine Empfehlungen.
          </p>
        </div>
      </div>
      <div className="flex justify-between text-xs text-sub">
        <span>KLARO — Wissenschaftlich fundierte Ernährungsaufklärung</span>
        <span>© 2025</span>
      </div>
    </footer>
  );
}
