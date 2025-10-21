
'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import QualitySection from './components/QualitySection';
import ApproachSection from './components/ApproachSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <QualitySection />
      <ApproachSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
