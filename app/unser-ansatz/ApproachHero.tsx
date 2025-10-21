
'use client';

import { useEffect, useState } from 'react';

interface ApproachHeroProps {
  scrollY: number;
}

export default function ApproachHero({ scrollY }: ApproachHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToMethodology = () => {
    const methodologySection = document.getElementById('methodology-section');
    if (methodologySection) {
      methodologySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToProcess = () => {
    const processSection = document.getElementById('process-section');
    if (processSection) {
      processSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F0E0] via-white to-orange-50 -mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/domabau-approach-hero.jpg')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-[#1A1A1A]/60 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Unser <span className="text-[#C04020]">Ansatz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Systematische Herangehensweise für perfekte Ergebnisse – Von der Planung bis zur Fertigstellung mit höchster Präzision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToMethodology}
              className="bg-[#C04020] hover:bg-[#A03318] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Unsere Methodik
            </button>
            <button 
              onClick={scrollToProcess}
              className="border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Projektablauf ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
