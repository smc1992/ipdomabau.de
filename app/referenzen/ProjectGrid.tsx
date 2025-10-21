
'use client';

import { useEffect, useState } from 'react';

interface ProjectGridProps {
  scrollY: number;
  selectedCategory: string;
}

export default function ProjectGrid({ scrollY, selectedCategory }: ProjectGridProps) {
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

    const element = document.getElementById('projekte');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const allProjects = [
    {
      id: 1,
      title: 'Luxus-Badsanierung München-Schwabing',
      category: 'Badsanierung',
      location: 'München-Schwabing',
      duration: '4 Wochen',
      description:
        'Professionelle Badsanierung mit modernen Fliesen und hochwertigen Sanitäranlagen in München-Schwabing.',
      beforeImage:
        '/images/referenz-innenausbau-bad.jpg',
      afterImage:
        '/images/referenz-rohbau-wohnzimmer.jpg',
      features: [
        'Bodengleiche Dusche',
        'Fußbodenheizung',
        'LED-Beleuchtung',
        'Hochwertige Armaturen',
      ],
    },
    {
      id: 2,
      title: 'Wohnungsausbau München-Pasing',
      category: 'Innenausbau',
      location: 'München-Pasing',
      duration: '6 Wochen',
      description:
        'Innenausbau einer Wohnung mit modernen Materialien und präziser Ausführung in München-Pasing.',
      beforeImage:
        '/images/referenz-rohbau-treppenhaus.jpg',
      afterImage:
        '/images/referenz-innenausbau-kueche.jpg',
      features: [
        'Trockenbau',
        'Spachteltechnik Q4',
        'Parkettverlegung',
        'Malerarbeiten',
      ],
    },
    {
      id: 3,
      title: 'Altbausanierung München-Maxvorstadt',
      category: 'Sanierung',
      location: 'München-Maxvorstadt',
      duration: '8 Wochen',
      description:
        'Umfassende Sanierung eines Altbaus mit historischer Fassade und modernem Innenausbau in München-Maxvorstadt.',
      beforeImage:
        '/images/referenz-1-kueche.jpg',
      afterImage:
        '/images/referenz-innenausbau-schlafzimmer.jpg',
      features: [
        'Stuckrestaurierung',
        'WDVS-Dämmung',
        'Fensteraustausch',
        'Fassadensanierung',
      ],
    },
    {
      id: 4,
      title: 'Küchenerweiterung München-Bogenhausen',
      category: 'Renovierung',
      location: 'München-Bogenhausen',
      duration: '3 Wochen',
      description:
        'Professionelle Küchenerweiterung mit Wanddurchbruch und moderner Raumaufteilung in München-Bogenhausen.',
      beforeImage:
        '/images/referenz-innenausbau-esszimmer.jpg',
      afterImage:
        '/images/referenz-rohbau-buero.jpg',
      features: [
        'Wanddurchbruch',
        'Fliesenarbeiten',
        'Elektroinstallation',
        'Malerarbeiten',
      ],
    },
    {
      id: 5,
      title: 'Penthouse-Ausbau München-Lehel',
      category: 'Innenausbau',
      location: 'München-Lehel',
      duration: '10 Wochen',
      description:
        'Luxuriöser Penthouse-Ausbau mit hochwertigen Materialien und individueller Architektur in München-Lehel.',
      beforeImage:
        '/images/referenz-rohbau-treppenhaus.jpg',
      afterImage:
        '/images/referenz-innenausbau-kueche.jpg',
      features: [
        'Designparkett',
        'Naturstein',
        'Einbauschränke',
        'Smart Home',
      ],
    },
    {
      id: 6,
      title: 'Einfamilienhaus-Neubau Grünwald',
      category: 'Neubau',
      location: 'Grünwald',
      duration: '16 Wochen',
      description:
        'Moderne Einfamilienhaus-Neubau mit nachhaltigen Materialien und effizienter Energieplanung in Grünwald.',
      beforeImage:
        '/images/referenz-1-kueche.jpg',
      afterImage:
        '/images/referenz-rohbau-wohnzimmer.jpg',
      features: ['KfW-55 Standard', 'Wärmepumpe', 'Photovoltaik', 'Smart Home'],
    },
  ];

  const filteredProjects =
    selectedCategory === 'Alle'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projekte" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {selectedCategory === 'Alle' ? 'Alle Projekte' : selectedCategory}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Entdecken Sie unsere hochwertigen Bau- und Renovierungsprojekte in München
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 delay-${index *
                100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={project.beforeImage}
                        alt={`${project.title} - Vorher`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={project.afterImage}
                        alt={`${project.title} - Nachher`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-[#C04020]/10 text-[#C04020] rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-slate-500 text-sm flex items-center">
                      <i className="ri-map-pin-line mr-1"></i>
                      {project.location}
                    </span>
                    <span className="text-slate-500 text-sm flex items-center">
                      <i className="ri-time-line mr-1"></i>
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#C04020] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 text-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white"
            id="kontakt"
          >
            <h3 className="text-3xl font-bold mb-4">Ihr Projekt ist nicht dabei?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihr individuelles Bau- oder Renovierungsprojekt planen und
              realisieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#C04020] to-[#A0351A] hover:from-[#A0351A] hover:to-[#8B2E17] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Kostenlose Beratung
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
