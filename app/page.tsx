'use client';

import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import QualitySection from './components/QualitySection';
import ApproachSection from './components/ApproachSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <QualitySection />
      <ApproachSection scrollY={scrollY} />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
