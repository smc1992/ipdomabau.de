
import type { Metadata } from 'next';
import ContactFunnelOptimized from './ContactFunnelOptimized';

export const metadata: Metadata = {
  title: "Kontakt - Kostenlose Beratung & Angebot | DOMABAU München",
  description: "Kontaktieren Sie DOMABAU für eine kostenlose Beratung und ein unverbindliches Angebot. Meisterbetrieb für Bau und Renovierung in München. Schnelle Antwort garantiert.",
  keywords: "Kontakt DOMABAU, Beratung München, Angebot München, Kostenvoranschlag München, Meisterbetrieb Kontakt",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/kontakt`,
  },
  openGraph: {
    title: "Kontakt - Kostenlose Beratung & Angebot | DOMABAU München",
    description: "Kontaktieren Sie DOMABAU für eine kostenlose Beratung und ein unverbindliches Angebot.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Kontakt - DOMABAU",
            "description": "Kontaktieren Sie DOMABAU für eine kostenlose Beratung",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/kontakt`,
            "mainEntity": {
              "@type": "ContactPoint",
              "telephone": "+49 172 3004911",
              "email": "info@ipdomabau.de",
              "contactType": "customer service",
              "areaServed": "München",
              "availableLanguage": "German"
            }
          })
        }}
      />
      <ContactFunnelOptimized />
    </>
  );
}
