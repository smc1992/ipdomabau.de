import { Metadata } from 'next';
import BadHero from './BadHero';
import BadServices from './BadServices';
import BadProcess from './BadProcess';
import BadBenefits from './BadBenefits';
import BadContact from './BadContact';

export const metadata: Metadata = {
  title: 'Badsanierung München | Professionelle Badmodernisierung & Badrenovierung',
  description: 'Professionelle Badsanierung in München ✓ Komplette Badmodernisierung ✓ Barrierefreie Bäder ✓ Moderne Sanitärinstallation ✓ Kostenlose Beratung ✓ Jetzt anfragen!',
  keywords: 'Badsanierung München, Badmodernisierung, Badrenovierung, barrierefreies Bad, Sanitärinstallation, Badumbau München, Badezimmer renovieren',
  openGraph: {
    title: 'Badsanierung München | DOMABAU - Ihre Badexperten',
    description: 'Verwandeln Sie Ihr Bad in eine moderne Wohlfühloase. Professionelle Badsanierung in München und Umgebung.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: '/badsanierung'
  },
  other: {
    'geo.region': 'DE-BY',
    'geo.placename': 'München',
    'geo.position': '48.1351;11.5820'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Badsanierung München',
  description: 'Professionelle Badsanierung und Badmodernisierung in München und Umgebung',
  provider: {
    '@type': 'Organization',
    name: 'DOMABAU',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'München',
      addressRegion: 'Bayern',
      addressCountry: 'DE'
    },
    telephone: '+49 172 3004911',
    email: 'info@ipdomabau.de'
  },
  areaServed: {
    '@type': 'City',
    name: 'München'
  },
  serviceType: 'Badsanierung',
  offers: {
    '@type': 'Offer',
    description: 'Komplette Badsanierung, Badmodernisierung, barrierefreie Bäder'
  }
};

export default function BadsanierungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <BadHero />
        <BadServices />
        <BadProcess />
        <BadBenefits />
        <BadContact />
      </main>
    </>
  );
}