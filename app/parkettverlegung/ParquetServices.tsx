
'use client';

import { useState } from 'react';

export default function ParquetServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'massivparkett',
      icon: 'ri-layout-grid-line',
      title: 'Massivparkett',
      description: 'Echtes Holz für höchste Ansprüche und Langlebigkeit.',
      image: '/images/massivparkett-detail.jpg',
      details: [
        'Eiche, Buche, Nussbaum und exotische Hölzer',
        'Verschiedene Stärken von 15-22mm',
        'Mehrfach schleif- und renovierbar',
        'Natürliche Oberflächenbehandlung',
        'Traditionelle Verlegetechniken'
      ],
      benefits: [
        'Lebenslange Haltbarkeit',
        'Natürliches Raumklima',
        'Wertsteigerung der Immobilie',
        'Individuelle Maserung'
      ]
    },
    {
      id: 'fertigparkett',
      icon: 'ri-stack-line',
      title: 'Fertigparkett',
      description: 'Moderne Lösung mit schneller Verlegung und sofortiger Nutzung.',
      image: '/images/fertigparkett-detail.jpg',
      details: [
        '2-Schicht und 3-Schicht Aufbau',
        'Klick-Verbindung für schnelle Verlegung',
        'Bereits oberflächenbehandelt',
        'Fußbodenheizung geeignet',
        'Große Formatvielfalt'
      ],
      benefits: [
        'Schnelle Installation',
        'Sofort begehbar',
        'Preis-Leistungs-Verhältnis',
        'Gleichmäßige Optik'
      ]
    },
    {
      id: 'schleifen',
      icon: 'ri-brush-line',
      title: 'Schleifen & Versiegeln',
      description: 'Professionelle Aufarbeitung für neuen Glanz.',
      image: '/images/schleifen-detail.jpg',
      details: [
        'Maschinelles Abschleifen in mehreren Stufen',
        'Reparatur von Kratzern und Dellen',
        'Verschiedene Versiegelungsarten',
        'Öl- oder Lackoberflächen',
        'Farbbehandlungen möglich'
      ],
      benefits: [
        'Wie neuer Boden',
        'Schutz vor Abnutzung',
        'Pflegeleichte Oberfläche',
        'Kostengünstige Renovierung'
      ]
    },
    {
      id: 'reparatur',
      icon: 'ri-tools-line',
      title: 'Reparatur & Restaurierung',
      description: 'Fachgerechte Instandsetzung historischer und beschädigter Böden.',
      image: '/images/reparatur-detail.jpg',
      details: [
        'Austausch einzelner Parkettstäbe',
        'Reparatur von Wasserschäden',
        'Historische Parkettrestaurierung',
        'Farbabstimmung und Nachbearbeitung',
        'Denkmalschutz-konforme Arbeiten'
      ],
      benefits: [
        'Erhalt historischer Substanz',
        'Kostenersparnis gegenüber Neukauf',
        'Originalgetreue Restaurierung',
        'Fachgerechte Ausführung'
      ]
    }
  ];

  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Unsere Parkettleistungen
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Neuverlegung bis zur Restaurierung – wir bieten alle Leistungen rund um Parkett
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-2 overflow-x-auto lg:overflow-x-visible">
              <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 pb-2 lg:pb-0">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`flex-shrink-0 lg:w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeService === index
                        ? 'bg-[#C04020] text-white shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded ${
                        activeService === index ? 'bg-white/20' : 'bg-[#C04020]/10'
                      }`}>
                        <i className={`${service.icon} text-sm sm:text-lg ${
                          activeService === index ? 'text-white' : 'text-[#C04020]'
                        }`}></i>
                      </div>
                      <span className="font-semibold text-sm sm:text-base">{service.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    {services[activeService].description}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 sm:mb-4">
                      Leistungsumfang
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {services[activeService].details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#C04020] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <i className="ri-check-line text-white text-xs sm:text-sm"></i>
                          </div>
                          <span className="text-sm sm:text-base text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 sm:mb-4">
                      Ihre Vorteile
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {services[activeService].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <i className="ri-star-line text-white text-xs sm:text-sm"></i>
                          </div>
                          <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
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
