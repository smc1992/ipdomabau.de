
import ParquetHero from './ParquetHero';
import ParquetServices from './ParquetServices';
import ParquetBenefits from './ParquetBenefits';
import ParquetProcess from './ParquetProcess';
import ParquetProjects from './ParquetProjects';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Parkettverlegung München',
  description: 'Professionelle Parkettverlegung in München und Umgebung',
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
  serviceType: 'Parkettverlegung',
  offers: {
    '@type': 'Offer',
    description: 'Professionelle Parkettverlegung und Parkettverarbeitung'
  }
};

export default function ParkettverlegungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ParquetHero />
      <ParquetServices />
      <ParquetBenefits />
      <ParquetProcess />
      <ParquetProjects />
    </>
  );
}
