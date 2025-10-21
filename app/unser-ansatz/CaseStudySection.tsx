
'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CaseStudySectionProps {
  scrollY: number;
}

const caseStudy = {
  title: "Denkmalgeschützte Villa Schwabing",
  location: "München-Schwabing",
  year: "2023",
  size: "380 m²",
  description: "Ein Prestigeprojekt, das unseren ganzheitlichen Ansatz zur denkmalgerechten Sanierung unter Beweis stellt - historischer Charme kombiniert mit modernster Gebäudetechnik.",
  challenge: "Komplette Kernsanierung einer Villa aus dem Jahr 1910 unter strengen Denkmalschutzauflagen bei gleichzeitiger Umsetzung modernster Energiestandards.",
  solution: "Integrierte Planungsansatz mit speziellen Dämmlösungen, unsichtbarer Haustechnik und traditionellen Handwerkstechniken bei maximaler Energieeffizienz.",
  results: [
    { metric: "Energieeinsparung", value: "75%", benchmark: "gegenüber Ausgangszustand" },
    { metric: "Denkmalschutz", value: "100%", benchmark: "Auflagen erfüllt" },
    { metric: "Bauzeit", value: "8 Monate", benchmark: "termingerecht abgeschlossen" },
    { metric: "Kundenzufriedenheit", value: "Sehr gut", benchmark: "Note 1,2" }
  ],
  images: [
    {
      url: "/images/domabau-villa-1.jpg",
      caption: "Fassadensanierung mit historischen Materialien und modernen Fenstern"
    },
    {
      url: "/images/villa-schwabing.jpg",
      caption: "Moderner Innenausbau unter Bewahrung historischer Elemente"
    },
    {
      url: "/images/au-heritage.jpg",
      caption: "Installation moderner Heiztechnik für maximale Energieeffizienz"
    }
  ]
};

export default function CaseStudySection({ scrollY }: CaseStudySectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section 
      id="case-study"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-white"
      style={{
        transform: `translateY(${Math.max(0, (scrollY - 3200) * 0.03)}px)`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
              Projekt
              <br />
              <span className="text-[#C04020]">Referenz</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Ein detaillierter Einblick, wie unser Ansatz außergewöhnliche Ergebnisse 
              bei einem anspruchsvollen Sanierungsprojekt erzielt hat
            </p>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-gradient-to-br from-[#F5F0E0] to-white p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">{caseStudy.title}</h3>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-2 text-[#C04020]"></i>
                    {caseStudy.location}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-calendar-line w-5 h-5 flex items-center justify-center mr-2 text-[#C04020]"></i>
                    {caseStudy.year}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-building-line w-5 h-5 flex items-center justify-center mr-2 text-[#C04020]"></i>
                    {caseStudy.size}
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{caseStudy.description}</p>
              </div>
              
              <div className="relative">
                <img
                  src={caseStudy.images[activeImage].url}
                  alt="Projektreferenz"
                  className="w-full h-64 sm:h-80 object-cover object-top rounded-xl shadow-xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 text-white p-3 text-sm rounded-lg">
                    {caseStudy.images[activeImage].caption}
                  </div>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {caseStudy.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                        activeImage === index ? 'bg-[#C04020]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">Die Herausforderung</h4>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{caseStudy.challenge}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">Unsere Lösung</h4>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{caseStudy.solution}</p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6 sm:mb-8 text-center">
              <span className="text-[#C04020]">Projekt</span> Ergebnisse
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-[#C04020] hover:shadow-xl transition-shadow duration-300">
                  <h5 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-2">{result.metric}</h5>
                  <div className="text-2xl sm:text-3xl font-bold text-[#C04020] mb-2">{result.value}</div>
                  <p className="text-sm text-gray-600">{result.benchmark}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
