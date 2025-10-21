
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-construction.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            DOMABAU
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-4xl font-light mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Ihr Partner für hochwertige Bau- und Renovierungsarbeiten
          </h2>
          <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-2">
            Von der Planung bis zur Fertigstellung – Präzision, Zuverlässigkeit und Qualität aus Meisterhand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link 
              href="/kontakt" 
              className="w-full sm:w-auto bg-[#C04020] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer text-center rounded-xl"
            >
              Angebot anfordern
            </Link>
            <Link 
              href="/referenzen" 
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-white hover:text-[#1A1A1A] transition-colors whitespace-nowrap cursor-pointer text-center rounded-xl"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
