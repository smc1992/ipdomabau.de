
'use client';

import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import ApproachHero from './ApproachHero';
import MethodologySection from './MethodologySection';
import ProcessSection from './ProcessSection';
import ToolsSection from './ToolsSection';
import CaseStudySection from './CaseStudySection';
import SustainabilityMetrics from './SustainabilityMetrics';

export default function ApproachPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Unser Ansatz - DOMABAU",
            "description": "Erfahren Sie mehr über unseren Arbeitsansatz und unsere Methodik bei DOMABAU",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/unser-ansatz`,
            "mainEntity": {
              "@type": "Article",
              "headline": "Unser Ansatz bei DOMABAU",
              "description": "Qualität, Nachhaltigkeit und Kundenzufriedenheit stehen im Mittelpunkt unserer Arbeit"
            }
          })
        }}
      />
      <ApproachHero scrollY={scrollY} />
      <MethodologySection scrollY={scrollY} />
      <ProcessSection scrollY={scrollY} />
      <ToolsSection scrollY={scrollY} />
      <CaseStudySection scrollY={scrollY} />
      <SustainabilityMetrics scrollY={scrollY} />
    </>
  );
}
