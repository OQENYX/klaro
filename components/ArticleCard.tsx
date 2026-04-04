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
}: {
  article: Article;
  className?: string;
}) {
  const tag = tagStyles[article.categoryColor];
  const stripe = stripeStyles[article.categoryColor];
  const formattedDate = new Date(article.date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  if (article.featured) {
    return (
      <Link
        href={`/artikel/${article.id}`}
        className={`ac-card group relative flex items-center gap-12 overflow-hidden rounded-[22px] bg-white p-10 no-underline max-[860px]:flex-col max-[860px]:gap-6 max-[860px]:p-7 ${className}`}
        style={{
          border: "1px solid rgba(0,0,0,.05)",
          boxShadow: "0 2px 12px rgba(0,0,0,.04)",
          gridColumn: "span 2",
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
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: stripe }}
        />
        <div className="flex-1">
          <span
            className="mb-3 inline-flex items-center rounded-full px-3 py-[5px] text-xs font-bold"
            style={{ background: tag.bg, color: tag.color }}
          >
            {article.category} · {article.readTime} min
          </span>
          <div
            className="text-[27px] font-bold leading-[1.22] text-dark"
            style={{ letterSpacing: "-.025em" }}
          >
            {article.title}
          </div>
          <div className="mt-3.5 text-sm font-normal leading-[1.7] text-sub">
            {article.excerpt}
          </div>
          <div
            className="mt-auto flex items-center justify-between pt-4"
            style={{ borderTop: "1px solid var(--color-line)" }}
          >
            <span className="text-xs text-sub">{formattedDate}</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-bg text-dark transition-all duration-150 group-hover:bg-dark group-hover:text-white">
              <IconArrow />
            </div>
          </div>
        </div>
        <div
          className="flex h-[180px] w-[180px] shrink-0 items-center justify-center rounded-[20px] max-[860px]:hidden"
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

  return (
    <Link
      href={`/artikel/${article.id}`}
      className={`ac-card group relative flex flex-col gap-3.5 overflow-hidden rounded-[22px] bg-white p-8 no-underline ${className}`}
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
        className="inline-flex w-fit items-center rounded-full px-3 py-[5px] text-xs font-bold"
        style={{ background: tag.bg, color: tag.color }}
      >
        {article.category} · {article.readTime} min
      </span>
      <div
        className="text-[21px] font-bold leading-[1.22] text-dark"
        style={{ letterSpacing: "-.025em" }}
      >
        {article.title}
      </div>
      <div className="text-sm font-normal leading-[1.7] text-sub">
        {article.excerpt}
      </div>
      <div
        className="mt-auto flex items-center justify-between pt-4"
        style={{ borderTop: "1px solid var(--color-line)" }}
      >
        <span className="text-xs text-sub">{formattedDate}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-bg text-dark transition-all duration-150 group-hover:bg-dark group-hover:text-white">
          <IconArrow />
        </div>
      </div>
    </Link>
  );
}
