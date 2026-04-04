import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Seite nicht gefunden — NÄHRO",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[70vh] max-w-[1080px] flex-col items-center justify-center px-5 py-20 text-center min-[860px]:px-8">
        <div
          className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-[22px] text-4xl font-black text-dark"
          style={{ background: "var(--color-bg)", border: "1px solid var(--color-line)" }}
        >
          404
        </div>

        <h1
          className="mb-4 font-extrabold leading-[1.08] text-dark"
          style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-.035em" }}
        >
          Seite nicht gefunden.
        </h1>

        <p className="mb-10 max-w-[460px] text-[16px] leading-[1.7] text-sub">
          Diese Seite existiert nicht — oder wurde verschoben. Schau dir unsere Artikel oder Kategorien an.
        </p>

        <div className="flex flex-col gap-3 min-[480px]:flex-row">
          <Link
            href="/"
            className="rounded-full bg-dark px-7 py-3 text-[14px] font-bold text-white no-underline transition-opacity duration-150 hover:opacity-80"
          >
            Zur Startseite
          </Link>
          <Link
            href="/artikel"
            className="rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-dark no-underline transition-all duration-150 hover:bg-[#e5e5e8]"
            style={{ border: "1px solid rgba(0,0,0,.1)" }}
          >
            Alle Artikel
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
