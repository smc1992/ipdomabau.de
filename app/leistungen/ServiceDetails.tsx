
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServiceDetails() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'innenausbau',
      icon: 'ri-home-4-line',
      title: 'Innenausbau',
      description: 'Räume neu gestalten – funktional, ästhetisch und langlebig.',
      image: '/images/service-interior-detail.jpg',
      details: [
        'Trockenbau und Wandgestaltung',
        'Deckenverkleidungen und Abhängungen',
        'Raumaufteilung und Grundrissänderungen',
        'Einbau von Türen und Fenstern',
        'Elektro- und Sanitärvorbereitungen'
      ],
      benefits: [
        'Individuelle Raumkonzepte',
        'Hochwertige Materialien',
        'Termingerechte Ausführung',
        'Meisterqualität garantiert'
      ]
    },
    {
      id: 'sanierung',
      icon: 'ri-hammer-line',
      title: 'Sanierung & Renovierung',
      description: 'Nachhaltige Lösungen für Altbau und Neubau.',
      image: '/images/service-renovation-detail.jpg',
      details: [
        'Komplettsanierung von Altbauten',
        'Energetische Modernisierung',
        'Denkmalschutz-konforme Sanierung',
        'Schadstoffsanierung',
        'Barrierefreie Umbauten'
      ],
      benefits: [
        'Wertsteigerung der Immobilie',
        'Energiekosten senken',
        'Wohnkomfort erhöhen',
        'Nachhaltige Bauweise'
      ]
    },
    {
      id: 'trockenbau',
      icon: 'ri-building-line',
      title: 'Trockenbau',
      description: 'Moderne Trockenbaulösungen für Raumaufteilung und Schallschutz.',
      image: '/images/service-drywall-detail.jpg',
      details: [
        'Raumaufteilung mit Trockenbauwänden',
        'Schallschutz und Wärmedämmung',
        'Deckenverkleidungen und Abhängungen',
        'Brandschutzwände',
        'Spachteln und Oberflächenbearbeitung'
      ],
      benefits: [
        'Schnelle Bauweise',
        'Flexible Raumgestaltung',
        'Optimaler Schallschutz',
        'Kosteneffiziente Lösung'
      ]
    },
    {
      id: 'malerarbeiten',
      icon: 'ri-brush-line',
      title: 'Malerarbeiten',
      description: 'Professionelle Innen- und Außenmalerei mit hochwertigen Materialien.',
      image: '/images/service-painting-detail.jpg',
      details: [
        'Innenmalerei und Wandgestaltung',
        'Fassadenanstriche und Außenmalerei',
        'Tapezierarbeiten',
        'Spezialanstriche und Beschichtungen',
        'Renovierung und Auffrischung'
      ],
      benefits: [
        'Hochwertige Materialien',
        'Fachgerechte Ausführung',
        'Langanhaltende Ergebnisse',
        'Individuelle Farbberatung'
      ]
    },
    {
      id: 'parkett',
      icon: 'ri-layout-grid-line',
      title: 'Parkettverlegung',
      description: 'Natürlich, edel und langlebig – Parkettarbeiten mit Präzision.',
      image: '/images/service-parquet-detail.jpg',
      details: [
        'Massivparkett und Fertigparkett',
        'Schleifen und Versiegelung',
        'Reparatur und Restaurierung',
        'Fußbodenheizung-kompatibel',
        'Verschiedene Verlegemuster'
      ],
      benefits: [
        'Natürliche Materialien',
        'Langlebigkeit',
        'Raumklima-verbessernd',
        'Wertsteigerung'
      ]
    },
    {
      id: 'spachtelarbeiten',
      icon: 'ri-palette-line',
      title: 'Spachtelarbeiten',
      description: 'Exklusive Spachteltechniken Q1-Q4 für besondere Wandgestaltung.',
      image: '/images/service-spachtel-detail.jpg',
      details: [
        'Glättetechniken Q1-Q4',
        'Marmor- und Stucco-Techniken',
        'Kreative Strukturspachtelungen',
        'Metallic- und Perlmutt-Effekte',
        'Betonoptik Spachtelung'
      ],
      benefits: [
        'Exklusive Wandgestaltung',
        'Individuelle Oberflächeneffekte',
        'Hochwertige Materialien',
        'Meisterhafte Ausführung'
      ]
    },
    {
      id: 'badmodernisierung',
      icon: 'ri-home-repair-line',
      title: 'Badmodernisierung',
      description: 'Komplette Badsanierung und moderne Badgestaltung nach Ihren Wünschen.',
      image: '/images/service-bathroom-detail.jpg',
      details: [
        'Komplette Badsanierung',
        'Moderne Badgestaltung',
        'Fliesenarbeiten',
        'Sanitärinstallation',
        'Barrierefreie Badlösungen'
      ],
      benefits: [
        'Moderne Ausstattung',
        'Wertsteigerung',
        'Energieeffizienz',
        'Individuelle Gestaltung'
      ]
    },
    {
      id: 'bausanierung',
      icon: 'ri-shield-check-line',
      title: 'Bausanierung',
      description: 'Fachgerechte Sanierung von Altbauten und denkmalgeschützten Gebäuden.',
      image: '/images/service-building-renovation-detail.jpg',
      details: [
        'Altbausanierung',
        'Denkmalschutz-konforme Arbeiten',
        'Fassadensanierung',
        'Strukturelle Verstärkung',
        'Feuchtigkeitsschäden beheben'
      ],
      benefits: [
        'Erhalt historischer Substanz',
        'Moderne Standards',
        'Fachgerechte Ausführung',
        'Langfristige Lösungen'
      ]
    },
    {
      id: 'handwerkerservice',
      icon: 'ri-tools-line',
      title: 'Handwerkerservice',
      description: 'Kleinreparaturen, Wartungsarbeiten und schnelle Lösungen für Ihr Zuhause.',
      image: '/images/service-handyman-detail.jpg',
      details: [
        'Kleinreparaturen aller Art',
        'Wartungsarbeiten',
        'Montageservice',
        'Notfallreparaturen',
        'Regelmäßige Instandhaltung'
      ],
      benefits: [
        'Schnelle Verfügbarkeit',
        'Faire Preise',
        'Zuverlässiger Service',
        'Kompetente Beratung'
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 md:mb-6">
            Detaillierte Leistungsübersicht
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie mehr über unsere Kernkompetenzen und Spezialisierungen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-3 md:p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeService === index
                      ? 'bg-[#C04020] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded ${
                      activeService === index ? 'bg-white/20' : 'bg-[#C04020]/10'
                    }`}>
                      <i className={`${service.icon} text-sm md:text-lg ${
                        activeService === index ? 'text-white' : 'text-[#C04020]'
                      }`}></i>
                    </div>
                    <span className="font-semibold text-sm md:text-base">{service.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 md:h-64">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {services[activeService].description}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-4">
                      Leistungsumfang
                    </h4>
                    <ul className="space-y-3">
                      {services[activeService].details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-4 h-4 md:w-5 md:h-5 bg-[#C04020] rounded-full flex items-center justify-center mt-0.5">
                            <i className="ri-check-line text-white text-xs md:text-sm"></i>
                          </div>
                          <span className="text-sm md:text-base text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-4">
                      Ihre Vorteile
                    </h4>
                    <ul className="space-y-3">
                      {services[activeService].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-4 h-4 md:w-5 md:h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                            <i className="ri-star-line text-white text-xs md:text-sm"></i>
                          </div>
                          <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link 
                    href="/kontakt" 
                    className="inline-block bg-[#C04020] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                  >
                    Jetzt Beratungstermin vereinbaren
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
