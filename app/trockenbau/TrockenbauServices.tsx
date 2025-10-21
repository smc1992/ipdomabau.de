
'use client';

import { useState } from 'react';

export default function TrockenbauServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Raumaufteilung & Wände",
      icon: "ri-layout-4-line",
      description: "Flexible Raumaufteilung mit modernen Trockenbausystemen",
      features: [
        "Nicht tragende Trennwände",
        "Raumaufteilung nach Maß",
        "Flexible Grundrissgestaltung",
        "Schnelle und saubere Montage"
      ],
      areas: "Schwabing, Maxvorstadt, Lehel, Haidhausen, Bogenhausen"
    },
    {
      title: "Schallschutz & Dämmung",
      icon: "ri-volume-mute-line",
      description: "Effektiver Schallschutz für ruhiges Wohnen und Arbeiten",
      features: [
        "Schallschutzwände nach DIN 4109",
        "Akustikdecken und -wände",
        "Wärmedämmung integriert",
        "Brandschutz nach Vorschrift"
      ],
      areas: "Sendling, Neuhausen, Laim, Pasing, Obermenzing"
    },
    {
      title: "Deckenverkleidung",
      icon: "ri-building-2-line",
      description: "Moderne Deckengestaltung mit funktionalen Eigenschaften",
      features: [
        "Abgehängte Decken",
        "Beleuchtungsintegration",
        "Akustikdecken",
        "Brandschutzdecken"
      ],
      areas: "Giesing, Ramersdorf, Berg am Laim, Trudering, Haar"
    },
    {
      title: "Spezialarbeiten",
      icon: "ri-tools-line",
      description: "Individuelle Trockenbaulösungen für besondere Anforderungen",
      features: [
        "Nischen und Einbauten",
        "Rundungen und Bögen",
        "Designelemente",
        "Reparatur und Sanierung"
      ],
      areas: "Milbertshofen, Moosach, Feldmoching, Unterföhring, Garching"
    }
  ];

  return (
    <section id="trockenbau-services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unsere Trockenbau-Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Trockenbaulösungen für München und Umgebung - 
            von der Planung bis zur schlüsselfertigen Übergabe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? 'bg-[#C04020] text-white shadow-xl'
                    : 'bg-white text-gray-900 hover:shadow-lg'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                    activeService === index ? 'bg-white/20' : 'bg-[#C04020]'
                  }`}>
                    <i className={`${service.icon} text-xl ${
                      activeService === index ? 'text-white' : 'text-white'
                    }`}></i>
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className={`${
                  activeService === index ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-4">
                <i className={`${services[activeService].icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {services[activeService].description}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Leistungsumfang:</h4>
              <ul className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <i className="ri-check-line text-[#C04020] text-xl mr-3"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Einsatzgebiete:</h4>
              <p className="text-gray-600 text-sm">
                {services[activeService].areas}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}