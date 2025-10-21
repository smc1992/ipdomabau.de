
'use client';

export default function BadServices() {
  const services = [
    {
      icon: 'ri-home-4-line',
      title: 'Komplette Badsanierung',
      description: 'Von der Planung bis zur Fertigstellung übernehmen wir die komplette Neugestaltung Ihres Badezimmers. Demontage, Neuverlegung von Leitungen, Fliesen, Armaturen und Möbel.',
      features: ['Komplettplanung', 'Demontage & Entsorgung', 'Sanitärinstallation', 'Fliesenverlegung']
    },
    {
      icon: 'ri-wheelchair-line',
      title: 'Barrierefreies Bad',
      description: 'Für mehr Komfort und Sicherheit bieten wir barrierefreie Bäder mit ebenerdigen Duschen, rutschfesten Böden und ergonomischen Sanitäranlagen.',
      features: ['Ebenerdige Duschen', 'Rutschfeste Böden', 'Haltegriffe', 'Ergonomische Ausstattung']
    },
    {
      icon: 'ri-layout-grid-line',
      title: 'Boden- & Wandgestaltung',
      description: 'Hochwertige Fliesen, Natursteine oder Designböden verleihen Ihrem Bad eine besondere Optik und sind langlebig sowie pflegeleicht.',
      features: ['Premium Fliesen', 'Natursteine', 'Designböden', 'Fugenlose Oberflächen']
    },
    {
      icon: 'ri-drop-line',
      title: 'Sanitärinstallation',
      description: 'Moderne Armaturen, Badewannen, Duschen und Waschbecken für höchsten Komfort. Fachgerechte Installation nach neuesten Standards.',
      features: ['Moderne Armaturen', 'Wellness-Duschen', 'Designer-Waschbecken', 'Smart-Home Integration']
    },
    {
      icon: 'ri-temp-hot-line',
      title: 'Heizung & Lüftung',
      description: 'Angenehme Raumtemperatur und optimale Luftzirkulation durch effiziente Heizlösungen und professionelle Belüftungssysteme.',
      features: ['Fußbodenheizung', 'Handtuchheizkörper', 'Belüftungsanlagen', 'Energieeffiziente Systeme']
    },
    {
      icon: 'ri-brush-line',
      title: 'Renovierung & Modernisierung',
      description: 'Gezielte Modernisierungsmaßnahmen bringen Ihr Badezimmer auf den neuesten Stand – von neuen Fliesen bis zu modernen Sanitärinstallationen.',
      features: ['Teilrenovierung', 'Oberflächenerneuerung', 'Armaturentausch', 'LED-Beleuchtung']
    }
  ];

  return (
    <section id="leistungen" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[#C04020] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Badsanierung München
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der kompletten Neugestaltung bis zur gezielten Modernisierung – wir bieten maßgeschneiderte Lösungen für Ihr Traumbad in München und Umgebung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-[#C04020] rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Servicegebiete in München und Umgebung
            </h3>
            <p className="text-gray-600 mb-6">
              Wir sind Ihr zuverlässiger Partner für Badsanierung in München und den umliegenden Gemeinden.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>München Zentrum</div>
              <div>Schwabing</div>
              <div>Maxvorstadt</div>
              <div>Lehel</div>
              <div>Haidhausen</div>
              <div>Au-Haidhausen</div>
              <div>Sendling</div>
              <div>Neuhausen</div>
              <div>Nymphenburg</div>
              <div>Pasing</div>
              <div>Giesing</div>
              <div>Bogenhausen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
