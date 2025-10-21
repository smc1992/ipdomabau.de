
import type { Metadata } from 'next';
import ServicesHero from './ServicesHero';
import ServiceDetails from './ServiceDetails';
import ServiceProcess from './ServiceProcess';
import ServiceContact from './ServiceContact';

export const metadata: Metadata = {
  title: "Leistungen - Alle Bauleistungen im Überblick | DOMABAU München",
  description: "Alle Bauleistungen von DOMABAU im Überblick: Innenausbau, Malerarbeiten, Trockenbau, Parkettverlegung, Sanierung. Meisterbetrieb in München mit über 10 Jahren Erfahrung.",
  keywords: "Bauleistungen München, Handwerker München, Meisterbetrieb München, Bau München, Ausbau München, Renovierung München",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/leistungen`,
  },
  openGraph: {
    title: "Leistungen - Alle Bauleistungen im Überblick | DOMABAU München",
    description: "Alle Bauleistungen von DOMABAU im Überblick: Innenausbau, Malerarbeiten, Trockenbau, Parkettverlegung, Sanierung.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/leistungen`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Leistungen - DOMABAU",
            "description": "Alle Bauleistungen von DOMABAU im Überblick",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/leistungen`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Innenausbau",
                  "description": "Professioneller Innenausbau für Wohn- und Geschäftsräume"
                },
                {
                  "@type": "Service",
                  "name": "Malerarbeiten",
                  "description": "Innen- und Außenmalerei, Fassadenanstriche"
                },
                {
                  "@type": "Service",
                  "name": "Trockenbau",
                  "description": "Raumaufteilung, Schallschutz, Deckenverkleidung"
                },
                {
                  "@type": "Service",
                  "name": "Parkettverlegung",
                  "description": "Verlegung und Renovierung von Parkettböden"
                },
                {
                  "@type": "Service",
                  "name": "Sanierung",
                  "description": "Komplettsanierung von Wohn- und Geschäftsräumen"
                }
              ]
            }
          })
        }}
      />
      <ServicesHero />
      <ServiceDetails />
      <ServiceProcess />
      <ServiceContact />
    </>
  );
}