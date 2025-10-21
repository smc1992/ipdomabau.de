
'use client';

import { useEffect, useState } from 'react';

interface ProjectHeroProps {
  scrollY: number;
}

export default function ProjectHero({ scrollY }: ProjectHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projekte');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/ref-hero-bg.jpg')`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Unsere <span className="text-[#C04020]">Referenzen</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Entdecken Sie unsere erfolgreich abgeschlossenen Projekte in München und Umgebung - 
            von hochwertigen Badsanierungen bis zu kompletten Innenausbauten
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#C04020] to-[#A0351A] hover:from-[#A0351A] hover:to-[#8B2E17] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Kostenlose Beratung
            </button>
            <button 
              onClick={scrollToProjects}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Alle Projekte ansehen
            </button>
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="animate-bounce cursor-pointer" onClick={scrollToProjects}>
            <i className="ri-arrow-down-line text-3xl text-white"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
