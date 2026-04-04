export const meshGradients: Record<string, string> = {
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
    "radial-gradient(ellipse 100% 80% at 0% 0%,#fda4af,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#e11d48,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#fb7185,transparent 55%),linear-gradient(145deg,#881337,#9f1239)",
  indigo:
    "radial-gradient(ellipse 100% 80% at 0% 0%,#a5b4fc,transparent 65%),radial-gradient(ellipse 80% 100% at 100% 100%,#4338ca,transparent 60%),radial-gradient(ellipse 70% 70% at 60% 20%,#818cf8,transparent 55%),linear-gradient(145deg,#312e81,#3730a3)",
};

export const tagStyles: Record<string, { bg: string; color: string }> = {
  emerald: { bg: "rgba(5,150,105,.1)", color: "#059669" },
  violet: { bg: "rgba(124,58,237,.1)", color: "#7C3AED" },
  orange: { bg: "rgba(234,88,12,.1)", color: "#EA580C" },
  sky: { bg: "rgba(2,132,199,.1)", color: "#0284C7" },
  pink: { bg: "rgba(190,24,93,.1)", color: "#be185d" },
  teal: { bg: "rgba(13,148,136,.1)", color: "#0d9488" },
  rose: { bg: "rgba(225,29,72,.1)", color: "#e11d48" },
  indigo: { bg: "rgba(67,56,202,.1)", color: "#4338ca" },
};

export const stripeGradients: Record<string, string> = {
  emerald: "linear-gradient(90deg, #059669, #34d399)",
  violet: "linear-gradient(90deg, #7C3AED, #a78bfa)",
  orange: "linear-gradient(90deg, #EA580C, #fb923c)",
  sky: "linear-gradient(90deg, #0284C7, #38bdf8)",
  pink: "linear-gradient(90deg, #be185d, #f472b6)",
  teal: "linear-gradient(90deg, #0d9488, #2dd4bf)",
  rose: "linear-gradient(90deg, #e11d48, #fda4af)",
  indigo: "linear-gradient(90deg, #4338ca, #a5b4fc)",
};
