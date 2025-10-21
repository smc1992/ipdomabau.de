
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SpachtelTechniques() {
  const [activeTechnique, setActiveTechnique] = useState(0);

  const techniques = [
    {
      id: 'glaettetechnik',
      title: 'Glättetechniken',
      subtitle: 'Spiegelglatte Perfektion',
      description: 'Spiegelglatte, glänzende Oberflächen für moderne und elegante Räume in München.',
      image: '/images/spachtel-glaette.jpg',
      features: [
        'Spiegelglatte Oberflächen',
        'Hochglänzende Optik',
        'Ideal für Wohnräume',
        'Moderne Eleganz',
        'Pflegeleichte Oberfläche'
      ],
      applications: [
        'Repräsentative Wohnräume',
        'Elegante Geschäftsräume',
        'Moderne Büros',
        'Luxuriöse Badezimmer'
      ]
    },
    {
      id: 'marmor-stucco',
      title: 'Marmor- & Stucco-Techniken',
      subtitle: 'Luxuriöse Steinoptik',
      description: 'Täuschend echte Marmor- und Steinoptiken für exklusive Innenräume in München.',
      image: '/images/spachtel-marmor.jpg',
      features: [
        'Authentische Marmoroptik',
        'Traditionelle Stucco-Technik',
        'Natürliche Steinstrukturen',
        'Individuelle Farbgebung',
        'Langlebige Qualität'
      ],
      applications: [
        'Luxuriöse Wohnräume',
        'Edle Eingangsbereiche',
        'Repräsentative Büros',
        'Exklusive Hotels'
      ]
    },
    {
      id: 'strukturspachtelung',
      title: 'Kreative Strukturspachtelungen',
      subtitle: 'Lebendige Wandstrukturen',
      description: 'Individuelle Strukturen und Muster für einzigartige Wandgestaltung in München.',
      image: '/images/spachtel-struktur.jpg',
      features: [
        'Individuelle Strukturen',
        'Kreative Mustergestaltung',
        'Von grob bis fein',
        'Künstlerische Effekte',
        'Einzigartige Optik'
      ],
      applications: [
        'Kreative Wohnräume',
        'Künstlerische Akzentwände',
        'Moderne Lofts',
        'Designorientierte Büros'
      ]
    },
    {
      id: 'metallic-effekte',
      title: 'Metallic- & Perlmutt-Effekte',
      subtitle: 'Schimmernde Eleganz',
      description: 'Dezente Glanzeffekte mit metallischen und perlmuttartigen Pigmenten für München.',
      image: '/images/spachtel-metallic.jpg',
      features: [
        'Metallische Pigmente',
        'Perlmutt-Schimmer',
        'Lichtspieleffekte',
        'Dezente Eleganz',
        'Hochwertige Materialien'
      ],
      applications: [
        'Edle Wohnzimmer',
        'Luxuriöse Schlafzimmer',
        'Repräsentative Empfangsbereiche',
        'Exklusive Restaurants'
      ]
    },
    {
      id: 'betonoptik',
      title: 'Betonoptik',
      subtitle: 'Industrieller Charme',
      description: 'Moderne Betonspachteltechnik für minimalistisches Design in München.',
      image: '/images/spachtel-beton.jpg',
      features: [
        'Authentische Betonoptik',
        'Industrieller Stil',
        'Minimalistisches Design',
        'Roher Charme',
        'Moderne Ästhetik'
      ],
      applications: [
        'Moderne Lofts',
        'Industrielle Büros',
        'Minimalistische Wohnungen',
        'Zeitgenössische Geschäfte'
      ]
    }
  ];

  return (
    <section id="leistungen" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Spachteltechniken für München
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Von klassischen Glättetechniken bis zu modernen Betonoptiken – entdecken Sie unsere vielfältigen Spachteltechniken für exklusive Wandgestaltung
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {techniques.map((technique, index) => (
                <button
                  key={technique.id}
                  onClick={() => setActiveTechnique(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeTechnique === index
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-1">{technique.title}</h3>
                  <p className={`text-sm ${
                    activeTechnique === index ? 'text-white/80' : 'text-slate-500'
                  }`}>
                    {technique.subtitle}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="relative h-64 md:h-80">
                <img
                  src={techniques[activeTechnique].image}
                  alt={techniques[activeTechnique].title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {techniques[activeTechnique].title}
                  </h3>
                  <p className="text-slate-200 text-lg">
                    {techniques[activeTechnique].description}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      Eigenschaften
                    </h4>
                    <ul className="space-y-3">
                      {techniques[activeTechnique].features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-home-line text-white text-sm"></i>
                      </div>
                      Anwendungsbereiche
                    </h4>
                    <ul className="space-y-3">
                      {techniques[activeTechnique].applications.map((application, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                          <span className="text-slate-700">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-8 pt-6 border-t border-slate-100">
                  <Link 
                    href="/kontakt" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    Beratung für {techniques[activeTechnique].title}
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
