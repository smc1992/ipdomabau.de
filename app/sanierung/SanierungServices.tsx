
'use client';

import { useState } from 'react';

export default function SanierungServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'komplettsanierung',
      icon: 'ri-building-line',
      title: 'Komplettsanierung',
      description: 'Umfassende Modernisierung von Altbauten mit ganzheitlichem Konzept.',
      image: '/images/komplettsanierung.jpg',
      details: [
        'Bestandsanalyse und Schadensbewertung',
        'Statische Überprüfung und Verstärkung',
        'Kompletterneuerung der Haustechnik',
        'Neue Grundrissaufteilung nach Wunsch',
        'Dach- und Fassadensanierung',
        'Innenausbau mit modernen Standards'
      ],
      benefits: [
        'Wie-Neubau-Standard erreichen',
        'Maximale Wertsteigerung',
        'Individuelle Gestaltungsmöglichkeiten',
        'Langfristige Investitionssicherheit'
      ]
    },
    {
      id: 'energetisch',
      icon: 'ri-leaf-line',
      title: 'Energetische Sanierung',
      description: 'Nachhaltige Modernisierung für optimale Energieeffizienz.',
      image: '/images/energetisch.jpg',
      details: [
        'Wärmedämmung nach EnEV-Standards',
        'Moderne Heizungsanlagen',
        'Dreifachverglasung und neue Fenster',
        'Lüftungsanlagen mit Wärmerückgewinnung',
        'Photovoltaik und Solarthermie',
        'Smart Home Integration'
      ],
      benefits: [
        'Bis zu 80% Energieeinsparung',
        'KfW-Förderung bis 150.000€',
        'Deutlich niedrigere Nebenkosten',
        'CO2-neutral wohnen möglich'
      ]
    },
    {
      id: 'denkmalschutz',
      icon: 'ri-ancient-gate-line',
      title: 'Denkmalschutz-Sanierung',
      description: 'Behutsame Modernisierung unter Wahrung des historischen Charakters.',
      image: '/images/denkmalschutz.jpg',
      details: [
        'Abstimmung mit Denkmalschutzbehörden',
        'Originalgetreue Materialauswahl',
        'Traditionelle Handwerkstechniken',
        'Moderne Technik unsichtbar integriert',
        'Restaurierung historischer Elemente',
        'Dokumentation aller Arbeitsschritte'
      ],
      benefits: [
        'Steuerliche Abschreibungsmöglichkeiten',
        'Erhalt des kulturellen Erbes',
        'Einzigartige Wohnatmosphäre',
        'Besondere Wertstabilität'
      ]
    },
    {
      id: 'schadstoff',
      icon: 'ri-shield-check-line',
      title: 'Schadstoffsanierung',
      description: 'Professionelle Entfernung gesundheitsschädlicher Materialien.',
      image: '/images/schadstoff.jpg',
      details: [
        'Asbest-Sanierung nach TRGS 519',
        'PCB und PAK Entfernung',
        'Schimmelsanierung und -prävention',
        'Blei- und Quecksilber-Beseitigung',
        'Raumluftmessungen vor und nach Sanierung',
        'Entsorgung nach Gefahrstoffverordnung'
      ],
      benefits: [
        'Gesunde Raumluft garantiert',
        'Rechtssicherheit durch Zertifizierung',
        'Professionelle Entsorgung',
        'Langfristige Gesundheitsvorsorge'
      ]
    },
    {
      id: 'barrierefrei',
      icon: 'ri-wheelchair-line',
      title: 'Barrierefreier Umbau',
      description: 'Altersgerechte und behindertengerechte Wohnraumanpassung.',
      image: '/images/barrierefrei.jpg',
      details: [
        'Schwellenlose Übergänge schaffen',
        'Badezimmer behindertengerecht umbauen',
        'Türverbreiterungen und Rampen',
        'Aufzug- oder Treppenlift-Installation',
        'Höhenverstellbare Küchenelemente',
        'Beleuchtung und Bedienelemente anpassen'
      ],
      benefits: [
        'KfW-Zuschuss bis 6.250€',
        'Pflegekasse-Förderung möglich',
        'Selbstständigkeit erhalten',
        'Zukunftssichere Wohnlösung'
      ]
    }
  ];

  return (
    <section id="leistungen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unsere Sanierungsleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der energetischen Modernisierung bis zur denkmalgerechten Restaurierung – 
            wir bieten maßgeschneiderte Lösungen für jeden Sanierungsfall.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeService === index
                      ? 'bg-[#C04020] text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                      activeService === index ? 'bg-white/20' : 'bg-[#C04020]/10'
                    }`}>
                      <i className={`${service.icon} text-xl ${
                        activeService === index ? 'text-white' : 'text-[#C04020]'
                      }`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      <p className={`text-sm mt-1 ${
                        activeService === index ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-80">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {services[activeService].title}
                  </h3>
                  <p className="text-gray-200 text-lg">
                    {services[activeService].description}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-[#1A1A1A] mb-6 flex items-center">
                      <div className="w-8 h-8 bg-[#C04020] rounded-lg flex items-center justify-center mr-3">
                        <i className="ri-tools-line text-white"></i>
                      </div>
                      Leistungsumfang
                    </h4>
                    <ul className="space-y-4">
                      {services[activeService].details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#C04020] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <i className="ri-check-line text-white text-sm"></i>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#1A1A1A] mb-6 flex items-center">
                      <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                        <i className="ri-star-line text-white"></i>
                      </div>
                      Ihre Vorteile
                    </h4>
                    <ul className="space-y-4">
                      {services[activeService].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <i className="ri-gift-line text-white text-sm"></i>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{benefit}</span>
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
