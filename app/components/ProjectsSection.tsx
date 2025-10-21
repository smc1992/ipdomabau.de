
'use client';

import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Badsanierung München-Schwabing',
      description: 'Moderne Fliesen, neue Raumaufteilung, Fertigstellung in 4 Wochen.',
      location: 'München-Schwabing',
      duration: '4 Wochen',
      beforeImage: '/images/project-bath-before.jpg',
      afterImage: '/images/project-bath-after.jpg'
    },
    {
      title: 'Wohnungsausbau Pasing',
      description: 'Trockenbau, Spachtelarbeiten und Parkett aus einer Hand.',
      location: 'München-Pasing',
      duration: '6 Wochen',
      beforeImage: '/images/project-apartment-before.jpg',
      afterImage: '/images/project-apartment-after.jpg'
    },
    {
      title: 'Büroumbau Maxvorstadt',
      description: 'Komplette Sanierung mit modernem Innenausbau und Akustiklösungen.',
      location: 'München-Maxvorstadt',
      duration: '8 Wochen',
      beforeImage: '/images/project-office-before.jpg',
      afterImage: '/images/project-office-after.jpg'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Unsere Referenzen
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Überzeugen Sie sich von der Qualität unserer Arbeit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <div className="grid grid-cols-2 h-48 sm:h-64">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.beforeImage}
                      alt={`${project.title} - Vorher`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
                      Vorher
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.afterImage}
                      alt={`${project.title} - Nachher`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#C04020] text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
                      Nachher
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2 sm:mb-3 group-hover:text-[#C04020] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500 space-y-2 sm:space-y-0">
                  <div className="flex items-center">
                    <i className="ri-map-pin-line mr-2"></i>
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-time-line mr-2"></i>
                    {project.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link 
            href="/referenzen" 
            className="inline-block bg-[#C04020] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer"
          >
            Weitere Projekte
          </Link>
        </div>
      </div>
    </section>
  );
}
