import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ArticleGrid from "@/components/ArticleGrid";
import CategoryGrid from "@/components/CategoryGrid";
import WhySection from "@/components/WhySection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <ArticleGrid />
      <CategoryGrid />
      <WhySection />
      <NewsletterSignup />
      <Footer />
      <ScrollReveal />
    </>
  );
}
