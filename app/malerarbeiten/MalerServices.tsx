'use client';

import { useState } from 'react';

export default function MalerServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'innenmalerei',
      icon: 'ri-brush-line',
      title: 'Innenmalerei',
      description: 'Hochwertige Wandgestaltung für Wohnräume und Büros in München.',
      image: '/images/maler-interior.jpg',
      details: [
        'Wandanstriche mit Dispersions- und Latexfarben',
        'Deckenanstriche und Strukturputz',
        'Tapezierarbeiten und Wandverkleidungen',
        'Farbberatung und Raumkonzepte',
        'Spachtel- und Grundierungsarbeiten'
      ],
      areas: [
        'München Innenstadt',
        'Schwabing-Freimann',
        'Maxvorstadt',
        'Lehel und Haidhausen'
      ]
    },
    {
      id: 'aussenmalerei',
      icon: 'ri-home-line',
      title: 'Außenmalerei',
      description: 'Fassadenanstriche und Außengestaltung für München und Umgebung.',
      image: '/images/maler-exterior.jpg',
      details: [
        'Fassadenanstriche mit Silikat- und Dispersionsfarben',
        'Putzreparaturen und Grundierungen',
        'Holzschutzanstriche für Fenster und Türen',
        'Balkon- und Terrassengestaltung',
        'Graffiti-Entfernung und Schutzanstriche'
      ],
      areas: [
        'München und alle Stadtteile',
        'Starnberg und Umgebung',
        'Freising und Landkreis',
        'Dachau und Fürstenfeldbruck'
      ]
    },
    {
      id: 'renovierung',
      icon: 'ri-paint-brush-line',
      title: 'Renovierung & Sanierung',
      description: 'Komplette Renovierungsarbeiten für Münchner Immobilien.',
      image: '/images/maler-renovation.jpg',
      details: [
        'Komplettrenovierung von Wohnungen und Häusern',
        'Altbausanierung in München',
        'Schimmelbeseitigung und Feuchtigkeitsschutz',
        'Denkmalschutz-konforme Anstriche',
        'Energetische Sanierung mit Wärmedämmung'
      ],
      areas: [
        'Münchner Altstadt',
        'Glockenbachviertel',
        'Westend und Sendling',
        'Bogenhausen und Grünwald'
      ]
    },
    {
      id: 'spezialarbeiten',
      icon: 'ri-palette-line',
      title: 'Spezialarbeiten',
      description: 'Kreative Wandgestaltung und Spezialtechniken für München.',
      image: '/images/maler-special.jpg',
      details: [
        'Dekorative Maltechniken und Wandgestaltung',
        'Spachteltechniken und Strukturputz',
        'Lasurtechniken und Wischtechniken',
        'Schablonentechnik und Wandtattoos',
        'Antikmöbel-Restaurierung und Lackierungen'
      ],
      areas: [
        'Exklusive Münchner Stadtteile',
        'Nymphenburg und Neuhausen',
        'Solln und Pullach',
        'Gräfelfing und Planegg'
      ]
    }
  ];

  return (
    <section id="leistungen" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Malerarbeiten München
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Malerdienstleistungen für alle Stadtteile Münchens und das gesamte Umland
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeService === index
                      ? 'bg-[#C04020] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 flex items-center justify-center rounded ${
                      activeService === index ? 'bg-white/20' : 'bg-[#C04020]/10'
                    }`}>
                      <i className={`${service.icon} text-lg ${
                        activeService === index ? 'text-white' : 'text-[#C04020]'
                      }`}></i>
                    </div>
                    <span className="font-semibold text-sm sm:text-base">{service.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base">
                    {services[activeService].description}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-4">
                      Leistungsumfang
                    </h4>
                    <ul className="space-y-3">
                      {services[activeService].details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-[#C04020] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <i className="ri-check-line text-white text-sm"></i>
                          </div>
                          <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-4">
                      Einsatzgebiete München
                    </h4>
                    <ul className="space-y-3">
                      {services[activeService].areas.map((area, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <i className="ri-map-pin-line text-white text-sm"></i>
                          </div>
                          <span className="text-gray-700 text-sm sm:text-base">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}