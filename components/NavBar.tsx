"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "nav-blur-solid" : "nav-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-green-deep transition-opacity hover:opacity-70"
        >
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium text-text-primary">
          <Link
            href="/artikel"
            className="relative transition-colors hover:text-green-deep"
          >
            Artikel
          </Link>
          <Link
            href="/kategorien"
            className="relative transition-colors hover:text-green-deep"
          >
            Kategorien
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
