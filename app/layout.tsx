import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "KLARO — Ernährung. Erklärt.",
  description: "Wissenschaftlich. Ohne Umwege. Jeder Satz mit Quelle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={jakarta.variable}>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
