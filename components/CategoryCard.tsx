"use client";

import Link from "next/link";
import { getCategoryIcon, IconArrowSmall } from "./icons";
import type { Category } from "@/data/categories";

const meshGradients: Record<string, string> = {
  emerald:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#34d399,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#059669,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#10b981,transparent 55%),linear-gradient(145deg,#065f46,#047857)",
  violet:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#a78bfa,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#6d28d9,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#8b5cf6,transparent 55%),linear-gradient(145deg,#4c1d95,#5b21b6)",
  orange:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#fbbf24,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#ea580c,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#f97316,transparent 55%),linear-gradient(145deg,#9a3412,#c2410c)",
  sky:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#38bdf8,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#0284c7,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#0ea5e9,transparent 55%),linear-gradient(145deg,#075985,#0369a1)",
  pink:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#f472b6,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#be185d,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#ec4899,transparent 55%),linear-gradient(145deg,#831843,#9d174d)",
  teal:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#2dd4bf,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#0d9488,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#14b8a6,transparent 55%),linear-gradient(145deg,#134e4a,#115e59)",
  rose:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#fda4af,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#e11d48,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#f43f5e,transparent 55%),linear-gradient(145deg,#881337,#9f1239)",
  indigo:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#a5b4fc,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#4338ca,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#6366f1,transparent 55%),linear-gradient(145deg,#312e81,#3730a3)",
};

export default function CategoryCard({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href={`/kategorien/${category.id}`}
      className={`cc-card group relative flex flex-col gap-3.5 overflow-hidden rounded-[22px] p-7 text-white no-underline ${className}`}
      style={{
        background: meshGradients[category.color],
        boxShadow: "0 4px 20px rgba(0,0,0,.1)",
        transition: "transform .22s ease, box-shadow .22s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px) scale(1.01)";
        e.currentTarget.style.boxShadow = "0 16px 44px rgba(0,0,0,.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,.1)";
      }}
    >
      {/* Icon */}
      <div
        className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px]"
        style={{
          background: "rgba(255,255,255,.2)",
          border: "1px solid rgba(255,255,255,.25)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        {getCategoryIcon(category.icon)}
      </div>

      <div
        className="text-[19px] font-extrabold text-white"
        style={{ letterSpacing: "-.025em" }}
      >
        {category.name}
      </div>

      <div className="flex-1 text-[13px] font-normal leading-[1.65] text-white/[.72]">
        {category.desc}
      </div>

      <div
        className="flex items-center justify-between pt-3.5"
        style={{ borderTop: "1px solid rgba(255,255,255,.15)" }}
      >
        <span className="text-[11px] font-semibold tracking-[.04em] text-white/50">
          {category.count} Artikel
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[.18] transition-colors duration-150 group-hover:bg-white/[.35]">
          <IconArrowSmall />
        </div>
      </div>
    </Link>
  );
}
