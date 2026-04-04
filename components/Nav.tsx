import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-[500] flex h-14 items-center justify-between px-9 max-[860px]:px-5"
      style={{
        background: "rgba(242,242,244,.88)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,.06)",
      }}
    >
      <Link
        href="/"
        className="text-lg font-extrabold tracking-[-0.03em] text-dark no-underline"
      >
        NÄHRO
      </Link>
      <div className="flex gap-7 max-[860px]:hidden">
        <Link
          href="/artikel"
          className="text-[13px] font-medium text-sub no-underline transition-colors duration-150 hover:text-dark"
        >
          Artikel
        </Link>
        <Link
          href="/kategorien"
          className="text-[13px] font-medium text-sub no-underline transition-colors duration-150 hover:text-dark"
        >
          Kategorien
        </Link>
        <Link
          href="/ueber-uns"
          className="text-[13px] font-medium text-sub no-underline transition-colors duration-150 hover:text-dark"
        >
          Über uns
        </Link>
      </div>
      <Link
        href="/artikel"
        className="rounded-full bg-dark px-5 py-2 text-[13px] font-bold text-white no-underline transition-opacity duration-150 hover:opacity-[.76]"
      >
        Lesen →
      </Link>
    </nav>
  );
}
