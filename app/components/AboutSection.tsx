
'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#F5F0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
              Willkommen bei DOMABAU
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Willkommen bei DOMABAU, Ihrem zuverlässigen Partner für Bauprojekte und Renovierungen. 
              Wir bieten Ihnen ein umfassendes Leistungsspektrum, um Ihre Wohn- und Gewerbeimmobilien 
              in neuem Glanz erstrahlen zu lassen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Unser Ziel ist es, jedes Projekt mit höchster Präzision und Liebe zum Detail zu realisieren – 
              von der Planung bis zur Fertigstellung.
            </p>
            <Link 
              href="/ueber-uns" 
              className="inline-block bg-[#C04020] text-white px-8 py-4 text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer"
            >
              Mehr über uns
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="/images/about-interior.jpg"
              alt="Hochwertige Renovierungsarbeiten von DOMABAU"
              className="w-full h-auto object-cover object-top shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#C04020] text-white p-6 shadow-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm font-medium">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
