"use client";

import Link from "next/link";
import { IconArrow, IconClockHero } from "./icons";
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

const stripeStyles: Record<string, string> = {
  emerald: "linear-gradient(90deg, #059669, #34d399)",
  violet: "linear-gradient(90deg, #7C3AED, #a78bfa)",
  orange: "linear-gradient(90deg, #EA580C, #fb923c)",
  sky: "linear-gradient(90deg, #0284C7, #38bdf8)",
  pink: "linear-gradient(90deg, #be185d, #f472b6)",
  teal: "linear-gradient(90deg, #0d9488, #2dd4bf)",
  rose: "linear-gradient(90deg, #e11d48, #fda4af)",
  indigo: "linear-gradient(90deg, #4338ca, #a5b4fc)",
};

export default function ArticleCard({
  article,
  className = "",
  variant = "full",
}: {
  article: Article;
  className?: string;
  variant?: "full" | "compact";
}) {
  const tag = tagStyles[article.categoryColor];
  const stripe = stripeStyles[article.categoryColor];
  const formattedDate = new Date(article.date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  /* ── COMPACT MOBILE CARD ── */
  if (variant === "compact") {
    return (
      <Link
        href={`/artikel/${article.id}`}
        className={`group relative flex items-center gap-4 overflow-hidden rounded-[14px] bg-white p-4 no-underline ${className}`}
        style={{
          border: "1px solid rgba(0,0,0,.05)",
          boxShadow: "0 1px 6px rgba(0,0,0,.03)",
        }}
      >
        {/* Color dot */}
        <div
          className="h-10 w-1 shrink-0 rounded-full"
          style={{ background: stripe }}
        />
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-2 py-[2px] text-[10px] font-bold"
              style={{ background: tag.bg, color: tag.color }}
            >
              {article.category}
            </span>
            <span className="text-[10px] text-sub">{article.readTime} min</span>
          </div>
          <div
            className="truncate text-[15px] font-bold leading-snug text-dark"
            style={{ letterSpacing: "-.02em" }}
          >
            {article.title}
          </div>
        </div>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-bg text-dark transition-colors duration-150 group-hover:bg-dark group-hover:text-white">
          <IconArrow />
        </div>
      </Link>
    );
  }

  /* ── FEATURED CARD ── */
  if (article.featured) {
    return (
      <Link
        href={`/artikel/${article.id}`}
        className={`ac-card group relative flex flex-col gap-4 overflow-hidden rounded-[18px] bg-white p-6 no-underline min-[860px]:flex-row min-[860px]:items-center min-[860px]:gap-12 min-[860px]:rounded-[22px] min-[860px]:p-10 ${className}`}
        style={{
          border: "1px solid rgba(0,0,0,.05)",
          boxShadow: "0 2px 12px rgba(0,0,0,.04)",
          gridColumn: "span 1",
          transition: "transform .2s ease, box-shadow .2s ease",
        }}
        data-featured
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px) scale(1.005)";
          e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.09)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,.04)";
        }}
      >
        {/* Stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: stripe }}
        />
        <div className="flex-1">
          <span
            className="mb-2 inline-flex items-center rounded-full px-3 py-[5px] text-[11px] font-bold min-[860px]:mb-3 min-[860px]:text-xs"
            style={{ background: tag.bg, color: tag.color }}
          >
            {article.category} · {article.readTime} min
          </span>
          <div
            className="text-[22px] font-bold leading-[1.22] text-dark min-[860px]:text-[27px]"
            style={{ letterSpacing: "-.025em" }}
          >
            {article.title}
          </div>
          <div className="mt-2 text-[13px] font-normal leading-[1.65] text-sub min-[860px]:mt-3.5 min-[860px]:text-sm min-[860px]:leading-[1.7]">
            {article.excerpt}
          </div>
          <div
            className="mt-4 flex items-center justify-between pt-3"
            style={{ borderTop: "1px solid var(--color-line)" }}
          >
            <span className="text-[11px] text-sub min-[860px]:text-xs">{formattedDate}</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-bg text-dark transition-all duration-150 group-hover:bg-dark group-hover:text-white min-[860px]:h-8 min-[860px]:w-8">
              <IconArrow />
            </div>
          </div>
        </div>
        <div
          className="hidden min-[860px]:flex h-[180px] w-[180px] shrink-0 items-center justify-center rounded-[20px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(5,150,105,.1), rgba(2,132,199,.08))",
            border: "1px solid rgba(5,150,105,.12)",
          }}
        >
          <IconClockHero />
        </div>
      </Link>
    );
  }

  /* ── REGULAR CARD ── */
  return (
    <Link
      href={`/artikel/${article.id}`}
      className={`ac-card group relative flex flex-col gap-2.5 overflow-hidden rounded-[18px] bg-white p-6 no-underline min-[860px]:gap-3.5 min-[860px]:rounded-[22px] min-[860px]:p-8 ${className}`}
      style={{
        border: "1px solid rgba(0,0,0,.05)",
        boxShadow: "0 2px 12px rgba(0,0,0,.04)",
        transition: "transform .2s ease, box-shadow .2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px) scale(1.005)";
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.09)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,.04)";
      }}
    >
      {/* Stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: stripe }}
      />
      <span
        className="inline-flex w-fit items-center rounded-full px-3 py-[5px] text-[11px] font-bold min-[860px]:text-xs"
        style={{ background: tag.bg, color: tag.color }}
      >
        {article.category} · {article.readTime} min
      </span>
      <div
        className="text-[19px] font-bold leading-[1.22] text-dark min-[860px]:text-[21px]"
        style={{ letterSpacing: "-.025em" }}
      >
        {article.title}
      </div>
      <div className="text-[13px] font-normal leading-[1.65] text-sub min-[860px]:text-sm min-[860px]:leading-[1.7]">
        {article.excerpt}
      </div>
      <div
        className="mt-2 flex items-center justify-between pt-3 min-[860px]:mt-auto min-[860px]:pt-4"
        style={{ borderTop: "1px solid var(--color-line)" }}
      >
        <span className="text-[11px] text-sub min-[860px]:text-xs">{formattedDate}</span>
        <div className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-bg text-dark transition-all duration-150 group-hover:bg-dark group-hover:text-white min-[860px]:h-8 min-[860px]:w-8">
          <IconArrow />
        </div>
      </div>
    </Link>
  );
}
