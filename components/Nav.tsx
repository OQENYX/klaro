"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SearchModal from "@/components/SearchModal";

export default function Nav() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <nav
        className="sticky top-0 z-[500] flex h-14 items-center justify-between px-5 min-[860px]:px-9"
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

        <div className="hidden min-[860px]:flex gap-7">
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

        <div className="flex items-center gap-2">
          {/* Search button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium text-sub transition-colors duration-150 hover:bg-white hover:text-dark min-[860px]:px-3.5"
            style={{ border: "1px solid rgba(0,0,0,.08)" }}
            aria-label="Suchen"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span className="hidden min-[860px]:inline">Suchen</span>
            <kbd
              className="hidden rounded px-1.5 py-0.5 text-[10px] font-semibold text-sub/50 min-[860px]:inline-block"
              style={{
                background: "rgba(0,0,0,.05)",
                border: "1px solid rgba(0,0,0,.08)",
              }}
            >
              ⌘K
            </kbd>
          </button>

          <Link
            href="/artikel"
            className="rounded-full bg-dark px-5 py-2 text-[13px] font-bold text-white no-underline transition-opacity duration-150 hover:opacity-[.76]"
          >
            Lesen →
          </Link>
        </div>
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
