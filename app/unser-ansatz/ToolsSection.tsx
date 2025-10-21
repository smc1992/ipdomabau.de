
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ToolsSectionProps {
  scrollY: number;
}

const tools = [
  {
    category: "Planung & Design",
    items: [
      { name: "AutoCAD 2024", description: "Präzise 2D/3D-Konstruktion" },
      { name: "SketchUp Pro", description: "3D-Visualisierung für Kunden" },
      { name: "Photogrammetrie", description: "Digitale Aufmaßerstellung" }
    ],
    icon: "ri-pencil-ruler-2-line",
    color: "from-[#C04020] to-[#A03318]"
  },
  {
    category: "Qualitätskontrolle",
    items: [
      { name: "Laser-Messgeräte", description: "Millimetergenaue Vermessung" },
      { name: "Feuchtigkeitsmesser", description: "Bausubstanz-Analyse" },
      { name: "Endoskop-Kameras", description: "Versteckte Mängel aufspüren" }
    ],
    icon: "ri-search-eye-line",
    color: "from-[#1A1A1A] to-[#2A2A2A]"
  },
  {
    category: "Moderne Werkzeuge",
    items: [
      { name: "Festool Systainer", description: "Professionelle Werkzeugorganisation" },
      { name: "Hilti Bohrhämmer", description: "Kraftvolle Bearbeitung" },
      { name: "Makita Akkusysteme", description: "Kabellose Flexibilität" }
    ],
    icon: "ri-tools-line",
    color: "from-[#C04020] to-[#A03318]"
  },
  {
    category: "Projektmanagement",
    items: [
      { name: "Digitale Zeiterfassung", description: "Transparente Abrechnung" },
      { name: "Foto-Dokumentation", description: "Lückenlose Projektdokumentation" },
      { name: "Kundenportal", description: "Direkter Projektstatus-Zugang" }
    ],
    icon: "ri-dashboard-3-line",
    color: "from-[#1A1A1A] to-[#2A2A2A]"
  }
];

export default function ToolsSection({ scrollY }: ToolsSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-[#F5F0E0] to-white"
      style={{
        transform: `translateY(${Math.max(0, (scrollY - 1600) * 0.02)}px)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            Moderne <span className="text-[#C04020]">Ausstattung</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neueste Technologie und bewährte Werkzeuge für präzise Ergebnisse und effiziente Arbeitsabläufe
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                  <i className={`${tool.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">
                  {tool.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {tool.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-[#F5F0E0] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#C04020] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] mb-1">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
