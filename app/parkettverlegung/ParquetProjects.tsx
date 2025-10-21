
'use client';

import { useState } from 'react';

export default function ParquetProjects() {
  const [activeCategory, setActiveCategory] = useState('alle');

  const categories = [
    { id: 'alle', name: 'Alle Projekte' },
    { id: 'wohnbereich', name: 'Wohnbereich' },
    { id: 'gewerbe', name: 'Gewerbe' },
    { id: 'restaurierung', name: 'Restaurierung' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Einfamilienhaus Bogenhausen',
      category: 'wohnbereich',
      location: 'München-Bogenhausen',
      area: '180 m²',
      material: 'Eiche Massivparkett',
      image: '/images/project-bogenhausen.jpg',
      description: 'Komplette Parkettverlegung in einem Einfamilienhaus mit hochwertiger Eiche.'
    },
    {
      id: 2,
      title: 'Penthouse Maxvorstadt',
      category: 'wohnbereich',
      location: 'München-Maxvorstadt',
      area: '220 m²',
      material: 'Nussbaum Fertigparkett',
      image: '/images/project-maxvorstadt.jpg',
      description: 'Exklusive Penthouse-Ausstattung mit dunklem Nussbaum-Fertigparkett.'
    },
    {
      id: 3,
      title: 'Bürogebäude Schwabing',
      category: 'gewerbe',
      location: 'München-Schwabing',
      area: '450 m²',
      material: 'Eiche Fertigparkett',
      image: '/images/project-office-schwabing.jpg',
      description: 'Gewerbliche Parkettverlegung in modernem Bürogebäude.'
    },
    {
      id: 4,
      title: 'Altbau-Sanierung Lehel',
      category: 'restaurierung',
      location: 'München-Lehel',
      area: '160 m²',
      material: 'Historisches Eichenparkett',
      image: '/images/project-lehel-restoration.jpg',
      description: 'Denkmalgerechte Restaurierung historischen Parketts aus den 1920er Jahren.'
    },
    {
      id: 5,
      title: 'Villa Grünwald',
      category: 'wohnbereich',
      location: 'Grünwald',
      area: '320 m²',
      material: 'Eiche Landhausdielen',
      image: '/images/project-villa-gruenwald.jpg',
      description: 'Großzügige Villa mit breiten Eichen-Landhausdielen ausgestattet.'
    },
    {
      id: 6,
      title: 'Restaurant Altstadt',
      category: 'gewerbe',
      location: 'München-Altstadt',
      area: '280 m²',
      material: 'Eiche Massivparkett',
      image: '/images/project-restaurant-altstadt.jpg',
      description: 'Traditionelles Restaurant mit robustem Massivparkett für hohe Beanspruchung.'
    }
  ];

  const filteredProjects = activeCategory === 'alle' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Unsere Parkettverlegung-Projekte
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere realisierten Parkettverlegungen in München und Umgebung
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-[#C04020] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 sm:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-[#C04020] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {project.area}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <i className="ri-map-pin-line mr-2 text-sm"></i>
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500 block">Material</span>
                      <span className="text-sm font-semibold text-[#1A1A1A]">
                        {project.material}
                      </span>
                    </div>
                    <button className="text-[#C04020] hover:text-[#A03318] font-semibold text-sm cursor-pointer">
                      Details ansehen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
