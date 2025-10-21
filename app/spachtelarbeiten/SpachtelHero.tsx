
'use client';

export default function SpachtelHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/spachtel-hero-bg.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight px-2">
            Spachtelarbeiten in
            <span className="block text-[#C04020]">München & Umgebung</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed px-2">
            Exklusive Wandgestaltung mit besonderem Charakter. Von Q1 bis Q4 Qualitätsstufen – Ihr Spezialist für professionelle Spachteltechniken in München, Schwabing, Maxvorstadt und dem gesamten Münchner Umland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 px-2">
            <a
              href="#kontakt"
              className="inline-block bg-[#C04020] text-white px-8 py-4 text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer text-center rounded-xl"
            >
              Kostenvoranschlag anfordern
            </a>
            <a
              href="#leistungen"
              className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-[#C04020] transition-colors whitespace-nowrap cursor-pointer text-center rounded-xl"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
