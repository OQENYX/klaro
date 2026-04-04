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
  title: "NÄHRO — Ernährung. Erklärt.",
  description: "Wissenschaftlich. Ohne Umwege. Jeder Satz mit Quelle — keine Meinungen, kein Marketing.",
  metadataBase: new URL("https://xn--nhro-loa.ch"),
  openGraph: {
    title: "NÄHRO — Ernährung. Erklärt.",
    description: "Wissenschaftlich. Ohne Umwege. Jeder Satz mit Quelle — keine Meinungen, kein Marketing.",
    url: "https://nähro.ch",
    siteName: "NÄHRO",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NÄHRO — Ernährung. Erklärt.",
    description: "Wissenschaftlich. Ohne Umwege. Jeder Satz mit Quelle.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
