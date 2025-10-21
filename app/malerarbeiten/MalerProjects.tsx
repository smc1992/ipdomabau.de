
'use client';

import { useState } from 'react';

export default function MalerProjects() {
  const [activeFilter, setActiveFilter] = useState('alle');

  const filters = [
    { id: 'alle', label: 'Alle Projekte' },
    { id: 'wohnung', label: 'Wohnungen' },
    { id: 'haus', label: 'Häuser' },
    { id: 'gewerbe', label: 'Gewerbe' },
    { id: 'fassade', label: 'Fassaden' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Altbauwohnung Schwabing',
      category: 'wohnung',
      location: 'München-Schwabing',
      description: 'Komplette Renovierung einer 4-Zimmer-Altbauwohnung mit hochwertigen Wandfarben',
      image: '/images/projekt-schwabing.jpg',
      details: ['Innenmalerei', 'Tapezierarbeiten', 'Spachtelarbeiten']
    },
    {
      id: 2,
      title: 'Einfamilienhaus Grünwald',
      category: 'haus',
      location: 'Grünwald bei München',
      description: 'Innen- und Außenanstrich eines modernen Einfamilienhauses',
      image: '/images/projekt-gruenwald.jpg',
      details: ['Fassadenanstrich', 'Innenmalerei', 'Holzschutz']
    },
    {
      id: 3,
      title: 'Bürogebäude Maxvorstadt',
      category: 'gewerbe',
      location: 'München-Maxvorstadt',
      description: 'Gewerbliche Malerarbeiten für modernes Bürogebäude',
      image: '/images/projekt-maxvorstadt.jpg',
      details: ['Gewerbeanstrich', 'Brandschutzfarben', 'Bodenmarkierungen']
    },
    {
      id: 4,
      title: 'Villa Bogenhausen',
      category: 'haus',
      location: 'München-Bogenhausen',
      description: 'Exklusive Malerarbeiten in repräsentativer Villa',
      image: '/images/projekt-bogenhausen.jpg',
      details: ['Dekorative Techniken', 'Goldleisten', 'Spezialfarben']
    },
    {
      id: 5,
      title: 'Fassadensanierung Lehel',
      category: 'fassade',
      location: 'München-Lehel',
      description: 'Denkmalschutz-konforme Fassadenerneuerung im Lehel',
      image: '/images/projekt-lehel.jpg',
      details: ['Denkmalschutz', 'Silikatfarben', 'Putzreparatur']
    },
    {
      id: 6,
      title: 'Penthouse Glockenbachviertel',
      category: 'wohnung',
      location: 'München-Glockenbachviertel',
      description: 'Hochwertige Innengestaltung einer Penthouse-Wohnung',
      image: '/images/projekt-glockenbach.jpg',
      details: ['Designfarben', 'Akzentwände', 'Hochglanzlackierung']
    }
  ];

  const filteredProjects = activeFilter === 'alle' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Referenzprojekte München
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreich abgeschlossenen Malerprojekte in München und Umgebung
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#C04020] to-[#A03318] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-[#C04020] bg-[#C04020]/10 px-3 py-1 rounded-full">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.details.map((detail, index) => (
                    <span key={index} className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4">
              Ihr Projekt in München
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Lassen Sie sich von unseren Referenzen inspirieren und starten Sie Ihr eigenes Malerprojekt in München.
            </p>
            <a
              href="#kontakt"
              className="inline-block bg-gradient-to-r from-[#C04020] to-[#A03318] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer rounded-lg"
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
