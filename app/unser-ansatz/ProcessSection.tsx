
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ProcessSectionProps {
  scrollY: number;
}

const processSteps = [
  {
    step: "01",
    title: "Erstberatung & Besichtigung",
    description: "Kostenlose Beratung vor Ort mit detaillierter Aufnahme aller Gegebenheiten und Ihrer Wünsche",
    duration: "1-2 Tage",
    icon: "ri-home-4-line"
  },
  {
    step: "02", 
    title: "Angebot & Planung",
    description: "Detailliertes Angebot mit transparenter Kostenaufstellung und technischen Zeichnungen",
    duration: "3-5 Tage",
    icon: "ri-file-text-line"
  },
  {
    step: "03",
    title: "Materialbestellung",
    description: "Beschaffung hochwertiger Materialien von bewährten Lieferanten und Herstellern",
    duration: "1-2 Wochen",
    icon: "ri-truck-line"
  },
  {
    step: "04",
    title: "Ausführung",
    description: "Professionelle Umsetzung durch erfahrene Fachkräfte mit kontinuierlicher Qualitätskontrolle",
    duration: "Je nach Projekt",
    icon: "ri-hammer-line"
  },
  {
    step: "05",
    title: "Abnahme & Übergabe",
    description: "Gemeinsame Endabnahme mit Dokumentation und Übergabe aller Unterlagen",
    duration: "1 Tag",
    icon: "ri-checkbox-circle-line"
  }
];

export default function ProcessSection({ scrollY }: ProcessSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section 
      id="process-section"
      ref={ref}
      className="py-20 bg-white"
      style={{
        transform: `translateY(${Math.max(0, (scrollY - 1200) * 0.02)}px)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            Unser <span className="text-[#C04020]">Projektablauf</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strukturierter Ablauf für maximale Transparenz und Effizienz – von der ersten Idee bis zur Schlüsselübergabe
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C04020] to-[#A03318] transform md:-translate-x-0.5 rounded-full"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gradient-to-br from-white to-[#F5F0E0] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ml-16 md:ml-0 border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <i className={`${step.icon} text-2xl text-white`}></i>
                      </div>
                      <div>
                        <span className="text-3xl font-bold text-[#C04020]">{step.step}</span>
                        <div className="text-sm text-gray-500 font-medium">{step.duration}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-full transform md:-translate-x-3 mt-8 shadow-lg border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
