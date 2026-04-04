"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(children);
  const animating = useRef(false);

  // Always keep latest children around for swap
  const latestChildren = useRef(children);
  latestChildren.current = children;

  // When pathname changes but we're not animating yet — update content silently
  // (this handles RSC streaming updates for the same page)
  useEffect(() => {
    if (pathname === prevPathname.current && !animating.current) {
      setContent(children);
    }
  }, [children, pathname]);

  // Handle actual page navigation
  useEffect(() => {
    if (pathname === prevPathname.current) return;
    const el = wrapperRef.current;
    if (!el) {
      // No ref — just swap
      prevPathname.current = pathname;
      setContent(latestChildren.current);
      return;
    }

    animating.current = true;

    // Phase 1: fade-out + scale-down the OLD page
    el.style.transition =
      "opacity .18s cubic-bezier(.4,0,1,1), transform .18s cubic-bezier(.4,0,1,1)";
    el.style.opacity = "0";
    el.style.transform = "scale(.97)";

    const t1 = setTimeout(() => {
      // Swap content
      prevPathname.current = pathname;
      setContent(latestChildren.current);
      window.scrollTo({ top: 0, behavior: "instant" });

      // Phase 2: set start position for zoom-in (no transition)
      el.style.transition = "none";
      el.style.opacity = "0";
      el.style.transform = "scale(1.03)";

      // Force reflow so the "start" state paints
      void el.offsetHeight;

      // Phase 3: animate IN
      el.style.transition =
        "opacity .3s cubic-bezier(0,0,.2,1), transform .3s cubic-bezier(0,0,.2,1)";
      el.style.opacity = "1";
      el.style.transform = "scale(1)";

      const t2 = setTimeout(() => {
        // Clean up inline styles
        el.style.transition = "";
        el.style.opacity = "";
        el.style.transform = "";
        animating.current = false;
      }, 320);

      return () => clearTimeout(t2);
    }, 190);

    return () => clearTimeout(t1);
  }, [pathname]);

  return (
    <div
      ref={wrapperRef}
      style={{ transformOrigin: "50% 30%", willChange: "auto" }}
    >
      {content}
    </div>
  );
}
