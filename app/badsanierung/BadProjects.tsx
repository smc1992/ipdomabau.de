'use client';

import Link from 'next/link';

export default function BadProjects() {
  const projects = [
    {
      title: 'Luxus-Badsanierung Schwabing',
      location: 'München-Schwabing',
      area: '12 m²',
      duration: '3 Wochen',
      image: '/images/bad-projekt-1.jpg',
      features: ['Freistehende Badewanne', 'Regendusche', 'Marmorfliesen', 'Smart-Home Integration']
    },
    {
      title: 'Barrierefreie Badsanierung',
      location: 'München-Haidhausen',
      area: '8 m²',
      duration: '2 Wochen',
      image: '/images/bad-projekt-2.jpg',
      features: ['Ebenerdige Dusche', 'Haltegriffe', 'Rutschfeste Fliesen', 'Unterfahrbarer Waschtisch']
    },
    {
      title: 'Moderne Familienbad-Sanierung',
      location: 'München-Pasing',
      area: '15 m²',
      duration: '4 Wochen',
      image: '/images/bad-projekt-3.jpg',
      features: ['Doppelwaschtisch', 'Badewanne + Dusche', 'Viel Stauraum', 'Fußbodenheizung']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[#C04020] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Referenzen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unsere Badsanierung-Projekte
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie einige unserer erfolgreich realisierten Badsanierungen in München und lassen Sie sich inspirieren.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">{project.location}</div>
                  <div className="text-xs opacity-90">{project.area} • {project.duration}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#C04020] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Fertigstellung: 2024
                  </div>
                  <div className="text-[#C04020] font-semibold text-sm">
                    Projekt ansehen →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/referenzen"
            className="inline-flex items-center bg-[#C04020] text-white px-8 py-4 rounded-xl hover:bg-[#A03318] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            <i className="ri-gallery-line mr-2"></i>
            Alle Referenzen ansehen
          </Link>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Kundenstimmen zu unserer Badsanierung
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">5.0/5</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Unser Bad wurde in nur 3 Wochen komplett saniert. Das Team war sehr professionell und sauber. Das Ergebnis übertrifft unsere Erwartungen!"
                  </p>
                  <div className="text-sm font-semibold text-gray-900">Familie Müller, Schwabing</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">5.0/5</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Barrierefreie Sanierung perfekt umgesetzt. Alle Termine eingehalten und sehr faire Preise. Absolut empfehlenswert!"
                  </p>
                  <div className="text-sm font-semibold text-gray-900">Herr Schmidt, Haidhausen</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/bad-kunden.jpg"
                alt="Zufriedene Kunden nach Badsanierung"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold mb-2">98%</div>
                <div className="text-sm">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}