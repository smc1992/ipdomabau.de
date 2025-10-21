
import type { Metadata } from 'next';
import SanierungHero from './SanierungHero';
import SanierungServices from './SanierungServices';
import SanierungProcess from './SanierungProcess';
import SanierungBenefits from './SanierungBenefits';
import SanierungProjects from './SanierungProjects';

export const metadata: Metadata = {
  title: "Sanierung München - Komplettsanierung vom Meisterbetrieb | DOMABAU",
  description: "Professionelle Sanierung in München und Umgebung. Komplettsanierung, Teilsanierung, Modernisierung vom Meisterbetrieb. Kostenlose Beratung ✓ Schnelle Umsetzung ✓",
  keywords: "Sanierung München, Komplettsanierung München, Modernisierung München, Renovierung München, Altbausanierung München, Meisterbetrieb Sanierung",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/sanierung`,
  },
  openGraph: {
    title: "Sanierung München - Komplettsanierung vom Meisterbetrieb | DOMABAU",
    description: "Professionelle Sanierung in München und Umgebung. Komplettsanierung, Teilsanierung, Modernisierung vom Meisterbetrieb.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sanierung`,
  },
};

export default function SanierungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sanierung München",
            "description": "Professionelle Sanierung in München und Umgebung",
            "provider": {
              "@type": "LocalBusiness",
              "name": "DOMABAU",
              "telephone": "+49 172 3004911",
              "email": "info@ipdomabau.de"
            },
            "areaServed": {
              "@type": "City",
              "name": "München"
            },
            "serviceType": "Sanierung",
            "offers": {
              "@type": "Offer",
              "description": "Professionelle Sanierung vom Meisterbetrieb"
            }
          })
        }}
      />
      <SanierungHero />
      <SanierungServices />
      <SanierungProcess />
      <SanierungBenefits />
      <SanierungProjects />
    </>
  );
}
