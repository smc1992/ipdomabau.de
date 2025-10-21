
'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface SustainabilityMetricsProps {
  scrollY: number;
}

const metrics = [
  {
    category: "Energieeffizienz",
    stats: [
      { label: "Durchschnittliche Energieeinsparung", value: "65%", description: "gegenüber unsanierten Gebäuden" },
      { label: "Erneuerbare Energien", value: "85%", description: "der Projekte mit nachhaltiger Technik" },
      { label: "Effizienzhaus-Standard", value: "12", description: "KfW-zertifizierte Projekte" }
    ],
    color: "orange"
  },
  {
    category: "Nachhaltigkeit",
    stats: [
      { label: "CO₂-Einsparung", value: "45%", description: "durch optimierte Materialwahl" },
      { label: "Wasserverbrauch-Reduktion", value: "40%", description: "durch effiziente Sanitärtechnik" },
      { label: "Recycling-Quote", value: "90%", description: "während der Bauphase" }
    ],
    color: "green"
  },
  {
    category: "Wohnqualität",
    stats: [
      { label: "Raumluftqualität", value: "100%", description: "erfüllen höchste Standards" },
      { label: "Tageslichtnutzung", value: "80%", description: "optimale Lichtverhältnisse" },
      { label: "Kundenzufriedenheit", value: "96%", description: "würden uns weiterempfehlen" }
    ],
    color: "blue"
  }
];

const certificationStats = [
  { name: "KfW Effizienzhaus", count: 8, total: 15 },
  { name: "Denkmalschutz", count: 12, total: 15 },
  { name: "BAFA Förderung", count: 10, total: 15 },
  { name: "Meisterqualität", count: 15, total: 15 }
];

export default function SustainabilityMetrics({ scrollY }: SustainabilityMetricsProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'border-[#C04020] bg-gradient-to-br from-[#C04020]/10 to-orange-50',
      green: 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50',
      blue: 'border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50'
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <section 
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F5F0E0] to-white mb-16"
      style={{
        transform: `translateY(${Math.max(0, (scrollY - 5200) * 0.02)}px)`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
              Unsere
              <br />
              <span className="text-[#C04020]">Bilanz</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Messbare Ergebnisse unseres Engagements für Qualität und Nachhaltigkeit - 
              der reale Nutzen unserer Arbeitsweise für unsere Kunden
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {metrics.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => {
                if (itemRefs.current) {
                  itemRefs.current[categoryIndex] = el;
                }
              }}
              className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 ${getColorClasses(category.color)} transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${
                visibleItems.includes(categoryIndex)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-6 sm:mb-8">{category.category}</h3>

              <div className="space-y-6">
                {category.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-[#C04020]">{stat.value}</span>
                    </div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-1 text-sm sm:text-base">{stat.label}</h4>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
              <span className="text-[#C04020]">Qualitäts</span> Erfolgsquote
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-4">
              Unser Qualitätsnachweis durch Zertifizierungen und Standards 
              bei allen 15 abgeschlossenen Projekten der letzten zwei Jahre
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationStats.map((cert, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (itemRefs.current) {
                    itemRefs.current[metrics.length + index] = el;
                  }
                }}
                className={`text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl hover:border-[#C04020] hover:shadow-lg transition-all duration-300 ${
                  visibleItems.includes(metrics.length + index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(metrics.length + index) * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#C04020] mb-2">
                  {cert.count}/{cert.total}
                </div>
                <h4 className="font-semibold text-[#1A1A1A] mb-2 text-sm sm:text-base">{cert.name}</h4>
                <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
                  <div 
                    className="bg-gradient-to-r from-[#C04020] to-[#A03318] h-3 rounded-full transition-all duration-1000"
                    style={{ 
                      width: visibleItems.includes(metrics.length + index) 
                        ? `${(cert.count / cert.total) * 100}%` 
                        : '0%' 
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {Math.round((cert.count / cert.total) * 100)}% Erfolgsquote
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
