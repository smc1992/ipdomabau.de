
import type { Metadata } from 'next';
import InnenausbauHero from './InnenausbauHero';
import InnenausbauServices from './InnenausbauServices';
import InnenausbauBenefits from './InnenausbauBenefits';
import InnenausbauProcess from './InnenausbauProcess';
import InnenausbauProjects from './InnenausbauProjects';

export default function InnenausbauPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Innenausbau München",
            "description": "Professioneller Innenausbau in München und Umgebung",
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
            "serviceType": "Innenausbau",
            "offers": {
              "@type": "Offer",
              "description": "Professioneller Innenausbau vom Meisterbetrieb"
            }
          })
        }}
      />
      <InnenausbauHero />
      <InnenausbauServices />
      <InnenausbauBenefits />
      <InnenausbauProcess />
      <InnenausbauProjects />
    </>
  );
}
