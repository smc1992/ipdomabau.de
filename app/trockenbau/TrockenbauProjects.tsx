
'use client';

import { useState } from 'react';

export default function TrockenbauProjects() {
  const [activeFilter, setActiveFilter] = useState('alle');

  const projects = [
    {
      id: 1,
      title: "Büroaufteilung Maxvorstadt",
      category: "gewerbe",
      location: "München-Maxvorstadt",
      description: "Flexible Büroaufteilung mit Schallschutzwänden für ein Startup-Unternehmen",
      image: "Modern office space with drywall partitions, glass elements, professional lighting, clean white walls, contemporary design, Munich business district, open workspace concept",
      details: "280 m² Bürofläche, 12 neue Räume, Brandschutz F30"
    },
    {
      id: 2,
      title: "Wohnungsaufteilung Schwabing",
      category: "wohnung",
      location: "München-Schwabing",
      description: "Raumaufteilung einer großen Altbauwohnung in moderne Wohnbereiche",
      image: "Elegant apartment interior with modern drywall partitions, high ceilings, classic Munich architecture, bright living spaces, contemporary room division",
      details: "120 m² Wohnung, 3 neue Zimmer, Schallschutz optimiert"
    },
    {
      id: 3,
      title: "Einfamilienhaus Bogenhausen",
      category: "haus",
      location: "München-Bogenhausen",
      description: "Kompletter Innenausbau mit Trockenbau für Neubau-Einfamilienhaus",
      image: "Luxury family home interior construction, drywall installation, modern architecture, spacious rooms, high-end finishes, Munich residential area",
      details: "200 m² Wohnfläche, 8 Räume, integrierte Dämmung"
    },
    {
      id: 4,
      title: "Praxisumbau Lehel",
      category: "gewerbe",
      location: "München-Lehel",
      description: "Umbau einer Arztpraxis mit speziellen Schallschutz- und Hygieneanforderungen",
      image: "Medical practice interior with professional drywall construction, clean white surfaces, medical equipment integration, sterile environment, professional healthcare design",
      details: "150 m² Praxisfläche, 6 Behandlungsräume, Hygieneschutz"
    },
    {
      id: 5,
      title: "Dachgeschoss Haidhausen",
      category: "wohnung",
      location: "München-Haidhausen",
      description: "Dachgeschossausbau mit Trockenbau und integrierter Wärmedämmung",
      image: "Attic conversion with drywall construction, sloped ceilings, skylights, cozy living space, thermal insulation, Munich rooftop apartment",
      details: "80 m² Dachgeschoss, 3 Zimmer, Wärmedämmung integriert"
    },
    {
      id: 6,
      title: "Ladenumbau Sendling",
      category: "gewerbe",
      location: "München-Sendling",
      description: "Umbau eines Einzelhandelsgeschäfts mit flexiblen Trockenbau-Elementen",
      image: "Retail store interior renovation with flexible drywall systems, modern commercial design, shopping area, display walls, contemporary retail space",
      details: "180 m² Verkaufsfläche, flexible Wandsysteme, Brandschutz"
    }
  ];

  const categories = [
    { id: 'alle', name: 'Alle Projekte', count: projects.length },
    { id: 'wohnung', name: 'Wohnungen', count: projects.filter(p => p.category === 'wohnung').length },
    { id: 'haus', name: 'Häuser', count: projects.filter(p => p.category === 'haus').length },
    { id: 'gewerbe', name: 'Gewerbe', count: projects.filter(p => p.category === 'gewerbe').length }
  ];

  const filteredProjects = activeFilter === 'alle' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unsere Trockenbau-Projekte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Referenzen aus München und Umgebung - von Wohnungen bis zu Gewerbeobjekten
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === category.id
                  ? 'bg-[#C04020] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url('/images/trockenbau-project-${project.id}.jpg')`
                }}
              ></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'wohnung' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'haus' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.category === 'wohnung' ? 'Wohnung' :
                     project.category === 'haus' ? 'Haus' : 'Gewerbe'}
                  </span>
                  <span className="text-sm text-gray-500">{project.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">{project.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ihr Projekt ist nicht dabei?</h3>
            <p className="text-lg mb-6 opacity-90">
              Wir realisieren individuelle Trockenbau-Lösungen für jeden Bedarf
            </p>
            <button className="bg-white text-[#C04020] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Kostenlose Beratung anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}