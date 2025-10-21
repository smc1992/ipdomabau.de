
'use client';

export default function TrockenbauBenefits() {
  const benefits = [
    {
      icon: "ri-speed-line",
      title: "Schnelle Montage",
      description: "Trockenbau ist deutlich schneller als herkömmliche Bauweisen. Keine Trocknungszeiten erforderlich.",
      highlight: "Bis zu 70% schneller"
    },
    {
      icon: "ri-leaf-line",
      title: "Umweltfreundlich",
      description: "Nachhaltige Materialien und trockene Bauweise ohne Wasser und Chemikalien.",
      highlight: "100% recyclebar"
    },
    {
      icon: "ri-volume-mute-line",
      title: "Optimaler Schallschutz",
      description: "Moderne Dämmstoffe sorgen für hervorragenden Schallschutz zwischen den Räumen.",
      highlight: "Bis zu 60 dB Dämmung"
    },
    {
      icon: "ri-money-euro-circle-line",
      title: "Kosteneffizient",
      description: "Günstigere Alternative zu massiven Wänden bei gleicher oder besserer Funktionalität.",
      highlight: "30% Kostenersparnis"
    },
    {
      icon: "ri-tools-line",
      title: "Flexibel & Anpassbar",
      description: "Einfache Änderungen und Anpassungen auch nach der Montage möglich.",
      highlight: "Jederzeit erweiterbar"
    },
    {
      icon: "ri-fire-line",
      title: "Brandschutz",
      description: "Zertifizierte Brandschutzlösungen nach aktuellen Bauvorschriften und Normen.",
      highlight: "F30 bis F90 Klassen"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Vorteile von Trockenbau
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Warum Trockenbau die moderne Lösung für Ihre Raumgestaltung ist
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${benefit.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
              
              <div className="inline-block bg-[#C04020]/10 text-[#C04020] px-4 py-2 rounded-full text-sm font-semibold">
                {benefit.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Warum DOMABAU für Ihren Trockenbau?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Meisterbetrieb:</strong>
                    <span className="text-gray-600 ml-2">Zertifizierte Qualität und Fachkompetenz</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">15+ Jahre Erfahrung:</strong>
                    <span className="text-gray-600 ml-2">Bewährte Expertise in München und Umgebung</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Hochwertige Materialien:</strong>
                    <span className="text-gray-600 ml-2">Nur zertifizierte Markenprodukte</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Termingarantie:</strong>
                    <span className="text-gray-600 ml-2">Pünktliche Fertigstellung zugesichert</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Faire Preise:</strong>
                    <span className="text-gray-600 ml-2">Transparente Kostenvoranschläge ohne versteckte Kosten</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div 
                className="w-full h-64 bg-cover bg-center rounded-2xl mb-6"
                style={{
                  backgroundImage: `url('/images/trockenbau-team.jpg')`
                }}
              ></div>
              <p className="text-gray-600 italic">
                "Unser erfahrenes Team sorgt für perfekte Ergebnisse"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}