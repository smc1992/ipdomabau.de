
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AwardsSection() {
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

    const element = document.getElementById('awards-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: 'ri-medal-line',
      title: 'Meisterbetrieb',
      description: 'Zertifizierter Handwerksmeister seit 2013'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Qualitätsgarantie',
      description: '5 Jahre Gewährleistung auf alle Arbeiten'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Kundenzufriedenheit',
      description: '98% Weiterempfehlungsrate unserer Kunden'
    },
    {
      icon: 'ri-time-line',
      title: 'Termintreue',
      description: 'Pünktliche Fertigstellung aller Projekte'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Nachhaltigkeit',
      description: 'Umweltfreundliche Materialien und Verfahren'
    },
    {
      icon: 'ri-tools-line',
      title: 'Moderne Technik',
      description: 'Neueste Werkzeuge und Technologien'
    }
  ];

  const stats = [
    { number: '500+', label: 'Abgeschlossene Projekte' },
    { number: '12', label: 'Jahre Erfahrung' },
    { number: '98%', label: 'Kundenzufriedenheit' },
    { number: '24h', label: 'Reaktionszeit' }
  ];

  return (
    <section id="awards-section" className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Qualität & <span className="text-[#C04020]">Vertrauen</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Auszeichnungen und Zertifizierungen, die unsere Kompetenz und Zuverlässigkeit bestätigen
          </p>
        </div>

        {/* Statistiken */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C04020] mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Auszeichnungen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 h-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#C04020]/10 to-[#C04020]/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${achievement.icon} text-xl sm:text-2xl text-[#C04020]`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{achievement.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Überzeugen Sie sich selbst</h3>
            <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Lassen Sie uns gemeinsam Ihr nächstes Bauprojekt realisieren. 
              Kontaktieren Sie uns für eine unverbindliche Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/kontakt">
                <button className="w-full sm:w-auto bg-[#C04020] hover:bg-[#A03318] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                  Beratungstermin vereinbaren
                </button>
              </Link>
              <Link href="/referenzen">
                <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  Referenzen ansehen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
