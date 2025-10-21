
'use client';

import { useEffect, useState } from 'react';

export default function CompanyHistory() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('company-history');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: '2013',
      title: 'Gründung von DOMABAU',
      description: 'Start als Meisterbetrieb in München mit Fokus auf Qualität und Präzision'
    },
    {
      year: '2016',
      title: 'Erweiterung des Teams',
      description: 'Aufbau eines erfahrenen Fachkräfte-Teams für alle Gewerke'
    },
    {
      year: '2019',
      title: 'Spezialisierung Badsanierung',
      description: 'Entwicklung zur Komplettlösung für moderne Badezimmer'
    },
    {
      year: '2022',
      title: 'Nachhaltigkeit im Fokus',
      description: 'Integration energieeffizienter Lösungen und nachhaltiger Materialien'
    },
    {
      year: '2025',
      title: 'Über 500 Projekte',
      description: 'Erfolgreiche Realisierung von Bau- und Renovierungsprojekten in München'
    }
  ];

  return (
    <section id="company-history" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Unsere <span className="text-[#C04020]">Geschichte</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Über 10 Jahre Erfahrung, Leidenschaft und kontinuierliche Weiterentwicklung im Münchner Baugewerbe
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#C04020] to-[#A03318] rounded-full z-0"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-8 sm:mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-full md:w-1/2 px-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 relative z-10">
                  <div className="text-2xl sm:text-3xl font-bold text-[#C04020] mb-2">{milestone.year}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">{milestone.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{milestone.description}</p>
                </div>
              </div>
              
              {/* Timeline Dot - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#C04020] rounded-full border-4 border-white shadow-lg z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
