
'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface ApproachSectionProps {
  scrollY: number;
}

const steps = [
  {
    number: "01",
    title: "Beratung & Planung",
    description: "Umfassende Beratung und detaillierte Planung Ihres Bauprojekts. Wir analysieren Ihre Wünsche und entwickeln maßgeschneiderte Lösungen für optimale Ergebnisse.",
    icon: "ri-compass-3-line"
  },
  {
    number: "02",
    title: "Materialauswahl",
    description: "Sorgfältige Auswahl hochwertiger Materialien und Produkte. Wir setzen auf bewährte Qualität und innovative Lösungen für langlebige Ergebnisse.",
    icon: "ri-hammer-line"
  },
  {
    number: "03",
    title: "Fachgerechte Ausführung",
    description: "Professionelle Umsetzung durch erfahrene Handwerker. Präzise Arbeit nach höchsten Standards mit modernsten Techniken und Werkzeugen.",
    icon: "ri-tools-line"
  },
  {
    number: "04",
    title: "Qualitätskontrolle",
    description: "Kontinuierliche Überwachung und Endkontrolle aller Arbeiten. Wir garantieren erstklassige Qualität und Ihre vollste Zufriedenheit.",
    icon: "ri-shield-check-line"
  }
];

export default function ApproachSection({ scrollY }: ApproachSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleSteps(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8" 
      id="approach"
      style={{
        transform: `translateY(${Math.max(0, (scrollY - 2400) * 0.03)}px)`
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6">
            Unser
            <br />
            <span className="text-[#C04020]">Vorgehen</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Systematische Herangehensweise für perfekte Ergebnisse – Von der ersten Beratung bis zur finalen Abnahme mit höchster Präzision
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#C04020]/20 transform md:-translate-x-px"></div>
          
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (stepRefs.current) {
                    stepRefs.current[index] = el;
                  }
                }}
                className={`relative transition-all duration-1000 ${ 
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-start ${ 
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`w-full md:w-1/2 ${ 
                    index % 2 === 0 ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'
                  }`}>
                    <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 ml-8 sm:ml-12 md:ml-0 border-l-4 border-[#C04020]">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#C04020]/10 flex items-center justify-center mr-3 sm:mr-4 rounded-lg">
                          <i className={`${step.icon} w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-[#C04020] text-xl sm:text-2xl`}></i>
                        </div>
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#C04020]/30">{step.number}</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#C04020] rounded-full transform md:-translate-x-2 mt-6 sm:mt-8"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12">
          <Link href="/unser-ansatz">
            <button className="bg-[#C04020] hover:bg-[#A03318] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer w-full sm:w-auto rounded-full">
              Mehr über unser Vorgehen
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}