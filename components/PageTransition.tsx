"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    // Skip animation on first render (initial page load)
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Scroll to top instantly
    window.scrollTo({ top: 0, behavior: "instant" });

    // 1. Snap to start state: invisible + slightly zoomed
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = "scale(1.025)";
    // Force the browser to paint the start state
    void el.offsetHeight;

    // 2. Animate to final state
    el.style.transition =
      "opacity .32s cubic-bezier(0,0,.2,1), transform .32s cubic-bezier(0,0,.2,1)";
    el.style.opacity = "1";
    el.style.transform = "scale(1)";

    // 3. Clean up after animation
    const id = setTimeout(() => {
      el.style.transition = "";
      el.style.opacity = "";
      el.style.transform = "";
    }, 350);

    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <div ref={ref} style={{ transformOrigin: "50% 20%" }}>
      {children}
    </div>
  );
}
