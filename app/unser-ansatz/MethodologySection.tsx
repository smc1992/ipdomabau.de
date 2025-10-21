

'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface MethodologySectionProps {
  scrollY: number;
}

const methodologies = [
  {
    icon: "ri-compass-3-line",
    title: "Bedarfsanalyse",
    description: "Umfassende Analyse Ihrer Anforderungen und Wünsche für eine maßgeschneiderte Lösung",
    color: "from-[#C04020] to-[#A03318]"
  },
  {
    icon: "ri-ruler-2-line",
    title: "Präzise Planung",
    description: "Detaillierte Projektplanung mit modernsten CAD-Systemen und 3D-Visualisierung",
    color: "from-[#1A1A1A] to-[#2A2A2A]"
  },
  {
    icon: "ri-team-line",
    title: "Fachkompetenz",
    description: "Erfahrene Meister und Fachkräfte mit jahrelanger Expertise in allen Gewerken",
    color: "from-[#C04020] to-[#A03318]"
  },
  {
    icon: "ri-shield-check-line",
    title: "Qualitätskontrolle",
    description: "Kontinuierliche Überwachung und Kontrolle aller Arbeitsschritte für höchste Qualität",
    color: "from-[#1A1A1A] to-[#2A2A2A]"
  }
];

export default function MethodologySection({ scrollY }: MethodologySectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section 
      id="methodology-section"
      ref={ref}
      className="py-20 bg-gradient-to-br from-[#F5F0E0] to-white"
      style={{
        transform: `translateY(${Math.max(0, (scrollY - 800) * 0.02)}px)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            Unsere <span className="text-[#C04020]">Methodik</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mit bewährten Verfahren und innovativen Ansätzen realisieren wir Ihr Bauprojekt termingerecht und in höchster Qualität
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((method, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <i className={`${method.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                {method.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

