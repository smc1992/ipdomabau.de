
'use client';

import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import ProjectHero from './ProjectHero';
import ProjectGrid from './ProjectGrid';
import ProjectCategories from './ProjectCategories';

export default function ProjectsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Alle');

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
            "name": "Referenzen - DOMABAU",
            "description": "Unsere erfolgreich abgeschlossenen Projekte in München und Umgebung",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/referenzen`,
            "mainEntity": {
              "@type": "ItemList",
              "name": "Referenzprojekte",
              "description": "Erfolgreich abgeschlossene Bauprojekte von DOMABAU"
            }
          })
        }}
      />
      <ProjectHero scrollY={scrollY} />
      <ProjectCategories 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProjectGrid 
        scrollY={scrollY} 
        selectedCategory={selectedCategory}
      />
    </>
  );
}
