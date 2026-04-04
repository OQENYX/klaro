import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/CategoryGrid";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kategorien | KLARO",
};

export default function KategorienPage() {
  return (
    <>
      <Nav />
      <CategoryGrid />
      <Footer />
      <ScrollReveal />
    </>
  );
}
