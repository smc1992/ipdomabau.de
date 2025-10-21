

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

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
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "DOMABAU",
    title: "DOMABAU - Meisterbetrieb für Bau, Ausbau und Renovierung in München",
    description: "DOMABAU ist Ihr zuverlässiger Partner für hochwertige Bau- und Renovierungsarbeiten in München. Meisterbetrieb mit über 10 Jahren Erfahrung.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
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
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "DOMABAU",
              "description": "Meisterbetrieb für Bau, Ausbau und Renovierung in München",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "telephone": "+49 172 3004911",
              "email": "info@ipdomabau.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Renatastraße 8",
                "addressLocality": "München",
                "postalCode": "80635",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.1351",
                "longitude": "11.5820"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "€€",
              "areaServed": {
                "@type": "City",
                "name": "München"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "48.1351",
                  "longitude": "11.5820"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bauleistungen",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Innenausbau",
                      "description": "Professioneller Innenausbau für Wohn- und Geschäftsräume"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Malerarbeiten",
                      "description": "Innen- und Außenmalerei, Fassadenanstriche"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Trockenbau",
                      "description": "Raumaufteilung, Schallschutz, Deckenverkleidung"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Parkettverlegung",
                      "description": "Verlegung und Renovierung von Parkettböden"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sanierung",
                      "description": "Komplettsanierung von Wohn- und Geschäftsräumen"
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Ilijan Pavic"
              },
              "employee": {
                "@type": "Person",
                "name": "Ilijan Pavic",
                "jobTitle": "Handwerksmeister"
              }
            })
          }}
        />
      </head>
      <body
        className="antialiased font-montserrat"
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
