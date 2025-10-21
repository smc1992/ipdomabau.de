
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/1.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Über
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#C04020] mb-6 sm:mb-8 lg:mb-12 leading-tight">
              DOMABAU
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-3xl">
              Seit über 15 Jahren verwirklichen wir<br className="hidden sm:block" />
              Ihre Bauprojekte mit Leidenschaft,<br className="hidden sm:block" />
              Präzision und höchster Qualität.<br className="hidden sm:block" />
              Vertrauen Sie auf unsere Expertise.
            </p>

            {/* Statistiken */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-gray-300">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-300">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-300">Zufriedenheit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">24h</div>
                <div className="text-xs sm:text-sm text-gray-300">Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
