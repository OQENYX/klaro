"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { articles } from "@/data/articles";
import type { Article } from "@/data/articles";

const tagStyles: Record<string, { bg: string; color: string }> = {
  emerald: { bg: "rgba(5,150,105,.1)", color: "#059669" },
  violet: { bg: "rgba(124,58,237,.1)", color: "#7C3AED" },
  orange: { bg: "rgba(234,88,12,.1)", color: "#EA580C" },
  sky: { bg: "rgba(2,132,199,.1)", color: "#0284C7" },
  pink: { bg: "rgba(190,24,93,.1)", color: "#be185d" },
  teal: { bg: "rgba(13,148,136,.1)", color: "#0d9488" },
  rose: { bg: "rgba(225,29,72,.1)", color: "#e11d48" },
  indigo: { bg: "rgba(67,56,202,.1)", color: "#4338ca" },
};

const fuse = new Fuse(articles, {
  keys: [
    { name: "title", weight: 2 },
    { name: "excerpt", weight: 1 },
    { name: "category", weight: 1 },
  ],
  threshold: 0.35,
  minMatchCharLength: 2,
});

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const res = fuse.search(query).map((r) => r.item);
    setResults(res.slice(0, 7));
    setActive(0);
  }, [query]);

  const navigate = useCallback(
    (article: Article) => {
      router.push(`/artikel/${article.id}`);
      onClose();
    },
    [router, onClose]
  );

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter" && results[active]) {
        navigate(results[active]);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [results, active, navigate, onClose]
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[900] flex items-start justify-center px-4 pt-[15vh]"
      style={{ background: "rgba(0,0,0,.4)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-[560px] overflow-hidden rounded-[20px] bg-white"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,.18)" }}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: "1px solid var(--color-line)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-sub">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Artikel suchen…"
            className="flex-1 bg-transparent text-[16px] font-medium text-dark outline-none placeholder:text-sub/50"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-sub hover:text-dark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
          <kbd className="hidden rounded-md px-2 py-1 text-[11px] font-semibold text-sub min-[480px]:block" style={{ background: "var(--color-bg)", border: "1px solid var(--color-line)" }}>
            ESC
          </kbd>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <ul className="max-h-[360px] overflow-y-auto py-2">
            {results.map((article, i) => {
              const tag = tagStyles[article.categoryColor];
              return (
                <li key={article.id}>
                  <button
                    className="flex w-full items-center gap-3.5 px-5 py-3 text-left transition-colors duration-100"
                    style={{ background: i === active ? "var(--color-bg)" : "transparent" }}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => navigate(article)}
                  >
                    <span
                      className="shrink-0 rounded-full px-2.5 py-[3px] text-[10px] font-bold"
                      style={{ background: tag.bg, color: tag.color }}
                    >
                      {article.category}
                    </span>
                    <span className="flex-1 text-[14px] font-medium text-dark leading-snug">
                      {article.title}
                    </span>
                    <span className="shrink-0 text-[11px] text-sub">{article.readTime} min</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="px-5 py-8 text-center text-[14px] text-sub">
            Keine Artikel gefunden für „{query}"
          </div>
        )}

        {!query && (
          <div className="px-5 py-4 text-[12px] text-sub/60">
            Tippe mindestens 2 Zeichen zum Suchen
          </div>
        )}

        <div className="flex items-center gap-4 border-t border-[var(--color-line)] px-5 py-3">
          <span className="text-[11px] text-sub/50">↑↓ navigieren</span>
          <span className="text-[11px] text-sub/50">↵ öffnen</span>
          <span className="text-[11px] text-sub/50">ESC schließen</span>
        </div>
      </div>
    </div>
  );
}
