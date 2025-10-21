
'use client';

import { useState } from 'react';

export default function SanierungProjects() {
  const [activeCategory, setActiveCategory] = useState('alle');

  const categories = [
    { id: 'alle', name: 'Alle Projekte' },
    { id: 'energetisch', name: 'Energetische Sanierung' },
    { id: 'denkmalschutz', name: 'Denkmalschutz' },
    { id: 'komplett', name: 'Komplettsanierung' },
    { id: 'barrierefrei', name: 'Barrierefreier Umbau' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Villa Schwabing - Denkmalschutz',
      category: 'denkmalschutz',
      year: '2023',
      area: '280 m²',
      duration: '8 Monate',
      description: 'Behutsame Sanierung einer denkmalgeschützten Gründerzeitvilla unter Wahrung des historischen Charakters.',
      image: '/images/villa-schwabing.jpg',
      features: ['Originalstuck restauriert', 'Moderne Haustechnik', 'Energieeffizienz KfW 115', 'Denkmalschutz-konform']
    },
    {
      id: 2,
      title: 'Mehrfamilienhaus Maxvorstadt',
      category: 'energetisch',
      year: '2023',
      area: '450 m²',
      duration: '6 Monate',
      description: 'Energetische Komplettsanierung mit Wärmedämmung, neuer Heizung und Photovoltaikanlage.',
      image: '/images/maxvorstadt-energy.jpg',
      features: ['WDVS-Dämmung', 'Wärmepumpe', 'Photovoltaik 15 kWp', '75% Energieeinsparung']
    },
    {
      id: 3,
      title: 'Einfamilienhaus Bogenhausen',
      category: 'komplett',
      year: '2022',
      area: '180 m²',
      duration: '10 Monate',
      description: 'Komplette Kernsanierung eines 70er-Jahre Hauses mit moderner Grundrissgestaltung.',
      image: '/images/bogenhausen-complete.jpg',
      features: ['Offene Wohnküche', 'Neues Dachgeschoss', 'Smart Home System', 'Garten-Neugestaltung']
    },
    {
      id: 4,
      title: 'Seniorenwohnung Haidhausen',
      category: 'barrierefrei',
      year: '2023',
      area: '95 m²',
      duration: '4 Monate',
      description: 'Barrierefreier Umbau einer Altbauwohnung für altersgerechtes Wohnen.',
      image: '/images/haidhausen-accessible.jpg',
      features: ['Schwellenlos', 'Begehbare Dusche', 'Höhenverstellbare Küche', 'KfW-Förderung erhalten']
    },
    {
      id: 5,
      title: 'Altbau Lehel - Energetisch',
      category: 'energetisch',
      year: '2022',
      area: '320 m²',
      duration: '7 Monate',
      description: 'Energetische Sanierung mit Fokus auf Nachhaltigkeit und Wohnkomfort.',
      image: '/images/lehel-energy.jpg',
      features: ['Pelletheizung', 'Dreifachverglasung', 'Kontrollierte Lüftung', 'KfW Effizienzhaus 85']
    },
    {
      id: 6,
      title: 'Stadthaus Au - Denkmalschutz',
      category: 'denkmalschutz',
      year: '2022',
      area: '220 m²',
      duration: '9 Monate',
      description: 'Restaurierung eines historischen Stadthauses mit modernen Wohnstandards.',
      image: '/images/au-heritage.jpg',
      features: ['Historische Fenster restauriert', 'Kastenfenster-System', 'Lehmputz-Sanierung', 'Denkmalförderung']
    }
  ];

  const filteredProjects = activeCategory === 'alle' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unsere Sanierungsprojekte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Sanierungsprojekte 
            in München und Umgebung.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-[#C04020] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C04020] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#C04020] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {project.area}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {project.duration}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#C04020] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer">
            Alle Referenzen ansehen
          </button>
        </div>
      </div>
    </section>
  );
}
