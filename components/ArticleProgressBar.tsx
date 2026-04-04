"use client";

import { useEffect, useState } from "react";

export default function ArticleProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress((scrollTop / docHeight) * 100);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[600] h-[3px] w-full">
      <div
        className="h-full bg-emerald transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
