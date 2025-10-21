
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InnenausbauProjects() {
  const [activeFilter, setActiveFilter] = useState('alle');

  const filters = [
    { id: 'alle', label: 'Alle Projekte' },
    { id: 'wohnungen', label: 'Wohnungen' },
    { id: 'haeuser', label: 'Häuser' },
    { id: 'bueros', label: 'Büros' },
    { id: 'gewerbe', label: 'Gewerbe' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Moderne Stadtwohnung Schwabing',
      category: 'wohnungen',
      location: 'München-Schwabing',
      area: '85 m²',
      duration: '4 Wochen',
      services: ['Trockenbau', 'Bodenbeläge', 'Malerarbeiten'],
      image: '/images/innenausbau-project-1.jpg',
      description: 'Kompletter Innenausbau einer Altbauwohnung mit modernen Materialien'
    },
    {
      id: 2,
      title: 'Einfamilienhaus Bogenhausen',
      category: 'haeuser',
      location: 'München-Bogenhausen',
      area: '180 m²',
      duration: '8 Wochen',
      services: ['Elektroinstallation', 'Sanitär', 'Trockenbau'],
      image: '/images/innenausbau-project-2.jpg',
      description: 'Umfassende Modernisierung mit Smart Home Integration'
    },
    {
      id: 3,
      title: 'Büroräume Maxvorstadt',
      category: 'bueros',
      location: 'München-Maxvorstadt',
      area: '120 m²',
      duration: '3 Wochen',
      services: ['Trockenbau', 'Elektroinstallation', 'Bodenbeläge'],
      image: '/images/innenausbau-project-3.jpg',
      description: 'Flexible Bürogestaltung mit modernen Arbeitsplätzen'
    },
    {
      id: 4,
      title: 'Penthouse Lehel',
      category: 'wohnungen',
      location: 'München-Lehel',
      area: '150 m²',
      duration: '6 Wochen',
      services: ['Malerarbeiten', 'Bodenbeläge', 'Sanitär'],
      image: '/images/innenausbau-project-4.jpg',
      description: 'Luxuriöse Ausstattung mit hochwertigen Materialien'
    },
    {
      id: 5,
      title: 'Praxisräume Sendling',
      category: 'gewerbe',
      location: 'München-Sendling',
      area: '95 m²',
      duration: '4 Wochen',
      services: ['Trockenbau', 'Elektroinstallation', 'Malerarbeiten'],
      image: '/images/innenausbau-project-5.jpg',
      description: 'Funktionale Gestaltung für medizinische Praxis'
    },
    {
      id: 6,
      title: 'Loft Glockenbachviertel',
      category: 'wohnungen',
      location: 'München-Glockenbachviertel',
      area: '110 m²',
      duration: '5 Wochen',
      services: ['Trockenbau', 'Bodenbeläge', 'Elektroinstallation'],
      image: '/images/innenausbau-project-6.jpg',
      description: 'Industrieller Charme mit modernen Elementen'
    }
  ];

  const filteredProjects = activeFilter === 'alle' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-[#C04020]">Referenzprojekte</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreich realisierten Innenausbau-Projekte in München und Umgebung
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[#C04020] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C04020] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.location}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.area}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#C04020] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#C04020]/10 rounded-full flex items-center justify-center">
                      <i className="ri-time-line text-[#C04020] text-xs"></i>
                    </div>
                    <span className="text-sm text-gray-600">{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#C04020]/10 rounded-full flex items-center justify-center">
                      <i className="ri-tools-line text-[#C04020] text-xs"></i>
                    </div>
                    <span className="text-sm text-gray-600">{project.services.length} Services</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-[#C04020] to-[#A03318] text-white py-3 rounded-lg hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold text-sm">
                  Projekt Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-[#C04020]/5 to-[#C04020]/10 rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ihr Projekt ist nicht dabei?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Jedes Projekt ist einzigartig. Lassen Sie uns gemeinsam Ihre individuellen Wünsche besprechen und ein maßgeschneidertes Konzept entwickeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <button className="bg-gradient-to-r from-[#C04020] to-[#A03318] text-white px-8 py-3 rounded-full hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold">
                  Kostenlose Beratung
                </button>
              </Link>
              <Link href="/referenzen">
                <button className="bg-white text-[#C04020] px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold border border-[#C04020]/20">
                  Portfolio ansehen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
