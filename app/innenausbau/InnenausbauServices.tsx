'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InnenausbauServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'trockenbau',
      title: 'Trockenbau',
      description: 'Professionelle Trockenbauarbeiten für flexible Raumaufteilung',
      details: 'Wände, Decken, Vorsatzschalen und komplexe Konstruktionen mit modernsten Materialien und Techniken.',
      features: ['Raumaufteilung', 'Schallschutz', 'Brandschutz', 'Feuchtraumgeeignet'],
      icon: 'ri-building-line'
    },
    {
      id: 'bodenbelaege',
      title: 'Bodenbeläge',
      description: 'Hochwertige Bodenbeläge für jeden Anspruch und Stil',
      details: 'Von Parkett über Fliesen bis hin zu modernen Designböden - wir verlegen alle Arten von Bodenbelägen.',
      features: ['Parkett', 'Laminat', 'Fliesen', 'Designböden'],
      icon: 'ri-layout-grid-line'
    },
    {
      id: 'malerarbeiten',
      title: 'Malerarbeiten',
      description: 'Perfekte Oberflächengestaltung mit hochwertigen Materialien',
      details: 'Innen- und Außenmalerarbeiten, Spachteltechniken und kreative Wandgestaltung für Ihr Zuhause.',
      features: ['Innenmalerei', 'Spachteltechnik', 'Tapezieren', 'Fassadenmalerei'],
      icon: 'ri-brush-line'
    },
    {
      id: 'elektroinstallation',
      title: 'Elektroinstallation',
      description: 'Moderne Elektroinstallationen für Smart Home und Komfort',
      details: 'Komplette Elektroinstallationen, Smart Home Integration und energieeffiziente Beleuchtungskonzepte.',
      features: ['Smart Home', 'LED-Beleuchtung', 'Steckdosen', 'Sicherheitstechnik'],
      icon: 'ri-flashlight-line'
    },
    {
      id: 'sanitaer',
      title: 'Sanitärinstallation',
      description: 'Komplette Badgestaltung und Sanitärinstallationen',
      details: 'Von der Planung bis zur Umsetzung - wir gestalten Ihr Traumbad mit modernster Sanitärtechnik.',
      features: ['Badplanung', 'Heizungsinstallation', 'Rohrleitungen', 'Armaturen'],
      icon: 'ri-drop-line'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-[#C04020]">Innenausbau-Leistungen</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Kompletter Innenausbau aus einer Hand - von der ersten Planung bis zur finalen Übergabe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 lg:hidden mb-6">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeService === index
                      ? 'bg-[#C04020] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className="hidden lg:block space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-[#C04020] text-white shadow-xl transform scale-105'
                      : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeService === index ? 'bg-white/20' : 'bg-[#C04020]/10'
                    }`}>
                      <i className={`${service.icon} text-xl ${
                        activeService === index ? 'text-white' : 'text-[#C04020]'
                      }`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                      <p className={`text-sm ${
                        activeService === index ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      activeService === index 
                        ? 'border-white bg-white' 
                        : 'border-gray-300'
                    }`}>
                      {activeService === index && (
                        <div className="w-3 h-3 bg-[#C04020] rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:sticky lg:top-8">
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#C04020]/10 rounded-xl flex items-center justify-center">
                  <i className={`${services[activeService].icon} text-2xl text-[#C04020]`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                  <p className="text-gray-600">{services[activeService].description}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {services[activeService].details}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Leistungsumfang:</h4>
              <div className="grid grid-cols-2 gap-3">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#C04020]/10 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-[#C04020] text-sm"></i>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#C04020]/5 to-[#C04020]/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-[#C04020] rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-white text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Kostenlose Beratung</div>
                  <div className="text-sm text-gray-600">Unverbindliches Angebot</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-[#C04020] to-[#A03318] text-white py-3 rounded-lg hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold">
                <Link href="/kontakt" className="block w-full h-full">
                  Jetzt anfragen
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
