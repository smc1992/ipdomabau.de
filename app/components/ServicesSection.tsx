'use client';

import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Unsere Dienstleistungen
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Umfassende Lösungen für alle Ihre Bau- und Renovierungsprojekte
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-hammer-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Sanierung & Renovierung</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Umfassende Sanierung und Modernisierung für Wohnungen und Häuser in München
            </p>
            <Link href="/sanierung" className="inline-flex items-center text-[#C04020] font-semibold hover:text-[#A03318] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-home-4-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Innenausbau</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Professioneller Innenausbau mit Trockenbau, Bodenbelägen und kompletter Raumgestaltung
            </p>
            <Link href="/innenausbau" className="inline-flex items-center text-[#C04020] font-semibold hover:text-[#A03318] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-layout-grid-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Parkettverlegung</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Hochwertige Parkettverlegung und Bodensanierung für natürliche Wohnqualität
            </p>
            <Link href="/parkettverlegung" className="inline-flex items-center text-[#C04020] font-semibold hover:text-[#A03318] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-brush-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Malerarbeiten</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Professionelle Innen- und Außenmalerei für München und Umgebung mit hochwertigen Materialien
            </p>
            <Link href="/malerarbeiten" className="inline-flex items-center text-[#C04020] font-semibold hover:text-[#A03318] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-building-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Trockenbau</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Moderne Trockenbaulösungen für Raumaufteilung, Schallschutz und Wärmedämmung
            </p>
            <Link href="/trockenbau" className="inline-flex items-center text-[#C04020] font-semibold hover:text-[#A03318] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-palette-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Spachtelarbeiten</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Exklusive Spachteltechniken Q1-Q4 für einzigartige Wandgestaltung und Oberflächenveredelung
            </p>
            <Link href="/spachtelarbeiten" className="inline-flex items-center text-[#C04020] font-semibold hover:text-[#A03318] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-drop-line text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Badsanierung</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Komplette Badmodernisierung und barrierefreie Umbauten für Ihre Wohlfühloase
            </p>
            <Link href="/badsanierung" className="inline-flex items-center text-[#C04020] font-semibold hover:text-[#A03318] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
              Mehr erfahren
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-tools-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Handwerkerservice</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Kleinreparaturen, Wartungsarbeiten und schnelle Lösungen für Ihr Zuhause
            </p>
            <Link href="/kontakt" className="inline-flex items-center text-[#C04020] font-semibold hover:text-[#A03318] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
              Kontakt aufnehmen
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/leistungen"
            className="inline-block bg-[#C04020] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer rounded-xl"
          >
            Alle Leistungen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}