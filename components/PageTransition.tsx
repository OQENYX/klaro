"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";

type Phase = "idle" | "zoom-out" | "zoom-in-start" | "zoom-in";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<Phase>("idle");
  const prevPathname = useRef(pathname);
  const timers = useRef<NodeJS.Timeout[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      clearTimers();

      // 1. Zoom out old page
      setPhase("zoom-out");

      // 2. After zoom-out, swap content + set zoom-in start position
      const t1 = setTimeout(() => {
        setDisplayChildren(children);
        prevPathname.current = pathname;
        window.scrollTo({ top: 0, behavior: "instant" });

        // Set the "start" position for zoom-in (slightly large, invisible)
        setPhase("zoom-in-start");

        // 3. Next frame: animate to final position
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPhase("zoom-in");

            // 4. Clean up after animation completes
            const t2 = setTimeout(() => setPhase("idle"), 400);
            timers.current.push(t2);
          });
        });
      }, 200);

      timers.current.push(t1);
      return clearTimers;
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children, clearTimers]);

  const getStyle = (): React.CSSProperties => {
    switch (phase) {
      case "zoom-out":
        return {
          opacity: 0,
          transform: "scale(.96)",
          filter: "blur(6px)",
          transition:
            "opacity .2s cubic-bezier(.4,0,.6,1), transform .2s cubic-bezier(.4,0,.6,1), filter .2s cubic-bezier(.4,0,.6,1)",
          willChange: "opacity, transform, filter",
          transformOrigin: "50% 45%",
        };
      case "zoom-in-start":
        // Snap to start position — no transition
        return {
          opacity: 0,
          transform: "scale(1.04)",
          filter: "blur(6px)",
          transition: "none",
          willChange: "opacity, transform, filter",
          transformOrigin: "50% 45%",
        };
      case "zoom-in":
        return {
          opacity: 1,
          transform: "scale(1) translateZ(0)",
          filter: "blur(0px)",
          transition:
            "opacity .34s cubic-bezier(.0,0,.2,1), transform .34s cubic-bezier(.0,0,.2,1), filter .34s cubic-bezier(.0,0,.2,1)",
          willChange: "opacity, transform, filter",
          transformOrigin: "50% 45%",
        };
      default:
        return {
          opacity: 1,
          transform: "none",
          filter: "none",
          transition: "none",
          willChange: "auto",
        };
    }
  };

  return (
    <div className="page-transition" style={getStyle()}>
      {displayChildren}
    </div>
  );
}
