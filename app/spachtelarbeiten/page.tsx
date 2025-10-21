
import type { Metadata } from 'next';
import SpachtelHero from './SpachtelHero';
import SpachtelTechniques from './SpachtelTechniques';
import SpachtelProcess from './SpachtelProcess';
import SpachtelBenefits from './SpachtelBenefits';

export const metadata: Metadata = {
  title: "Spachtelarbeiten München - Q1 bis Q4 Qualität | DOMABAU Meisterbetrieb",
  description: "Professionelle Spachtelarbeiten in München ✓ Glättetechniken ✓ Marmor-Optik ✓ Strukturspachtelung ✓ Metallic-Effekte ✓ Betonoptik ✓ Q1-Q4 Qualität ✓ Meisterbetrieb mit 10+ Jahren Erfahrung",
  keywords: "Spachtelarbeiten München, Spachteltechniken München, Glättetechnik München, Marmor Spachteltechnik, Strukturspachtelung, Metallic Effekte Wand, Betonoptik Spachtel, Q1 Q2 Q3 Q4 Spachtelqualität, Wandgestaltung München, Meisterbetrieb München",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/spachtelarbeiten`,
  },
  openGraph: {
    title: "Spachtelarbeiten München - Q1 bis Q4 Qualität | DOMABAU",
    description: "Professionelle Spachtelarbeiten in München: Glättetechniken, Marmor-Optik, Strukturspachtelung, Metallic-Effekte, Betonoptik. Q1-Q4 Qualität vom Meisterbetrieb.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/spachtelarbeiten`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/spachtelarbeiten-muenchen.jpg`,
        width: 1200,
        height: 630,
        alt: 'Spachtelarbeiten München - DOMABAU Meisterbetrieb'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Spachtelarbeiten München - Q1 bis Q4 Qualität | DOMABAU",
    description: "Professionelle Spachtelarbeiten in München: Glättetechniken, Marmor-Optik, Strukturspachtelung vom Meisterbetrieb.",
  }
};

export default function SpachtelarbeitenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Spachtelarbeiten München",
            "description": "Professionelle Spachtelarbeiten in München und Umgebung. Glättetechniken, Marmor-Optik, Strukturspachtelung, Metallic-Effekte und Betonoptik in Q1-Q4 Qualität.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "DOMABAU",
              "image": `${process.env.NEXT_PUBLIC_SITE_URL}/images/domabau-logo.png`,
              "telephone": "+49-172-3004911",
              "email": "info@ipdomabau.de",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "München",
                "addressRegion": "Bayern",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.1351",
                "longitude": "11.5820"
              },
              "url": `${process.env.NEXT_PUBLIC_SITE_URL}`,
              "priceRange": "€€",
              "openingHours": "Mo-Fr 08:00-17:00"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "München"
              },
              {
                "@type": "State",
                "name": "Bayern"
              }
            ],
            "serviceType": [
              "Spachtelarbeiten",
              "Glättetechniken",
              "Marmor Spachteltechnik",
              "Strukturspachtelung",
              "Metallic Effekte",
              "Betonoptik Spachtel",
              "Wandgestaltung"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Spachtelarbeiten Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Glättetechniken Q1-Q4",
                    "description": "Spiegelglatte, glänzende Oberflächen für moderne und elegante Räume"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marmor- und Stucco-Techniken",
                    "description": "Täuschend echte Marmor- und Steinoptiken für luxuriöse Innenräume"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Strukturspachtelungen",
                    "description": "Individuelle Strukturen und Muster für einzigartige Wandgestaltung"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Metallic- und Perlmutt-Effekte",
                    "description": "Dezente Glanzeffekte mit metallischen und perlmuttartigen Pigmenten"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Betonoptik Spachtelung",
                    "description": "Moderne Betonspachteltechnik für minimalistisches Design"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Michael Weber"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Hervorragende Spachtelarbeiten! Die Glättetechnik in unserem Wohnzimmer ist perfekt geworden. Sehr professionelle Ausführung."
              }
            ]
          })
        }}
      />
      <SpachtelHero />
      <SpachtelTechniques />
      <SpachtelBenefits />
      <SpachtelProcess />
    </>
  );
}
