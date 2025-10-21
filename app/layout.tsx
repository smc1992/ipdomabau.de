

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import ErrorBoundary from "./components/ErrorBoundary";
import ChunkErrorHandler from "./components/ChunkErrorHandler";

export const metadata: Metadata = {
  title: "DOMABAU - Meisterbetrieb für Bau, Ausbau und Renovierung in München",
  description: "DOMABAU ist Ihr zuverlässiger Partner für hochwertige Bau- und Renovierungsarbeiten in München. Meisterbetrieb mit über 10 Jahren Erfahrung.",
  keywords: "Bau München, Ausbau München, Renovierung München, Meisterbetrieb München, Handwerker München, Sanierung München, Innenausbau München, Malerarbeiten München",
  authors: [{ name: "DOMABAU - Ilijan Pavic" }],
  creator: "DOMABAU",
  publisher: "DOMABAU",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://ipdomabau.de",
    siteName: "DOMABAU",
    title: "DOMABAU - Meisterbetrieb für Bau, Ausbau und Renovierung in München",
    description: "DOMABAU ist Ihr zuverlässiger Partner für hochwertige Bau- und Renovierungsarbeiten in München. Meisterbetrieb mit über 10 Jahren Erfahrung.",
    images: [
      {
        url: "https://ipdomabau.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DOMABAU - Meisterbetrieb München",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DOMABAU - Meisterbetrieb für Bau, Ausbau und Renovierung in München",
    description: "DOMABAU ist Ihr zuverlässiger Partner für hochwertige Bau- und Renovierungsarbeiten in München. Meisterbetrieb mit über 10 Jahren Erfahrung.",
    images: ["https://ipdomabau.de/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ipdomabau.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning={true}>
      <body className="antialiased font-montserrat">
        <ChunkErrorHandler />
        <ErrorBoundary>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ErrorBoundary>
      </body>
    </html>
  );
}
