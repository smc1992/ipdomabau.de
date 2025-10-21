
export default function InnenausbauBenefits() {
  const benefits = [
    {
      icon: 'ri-home-heart-line',
      title: 'Wohnkomfort steigern',
      description: 'Optimale Raumaufteilung und moderne Ausstattung für maximalen Wohnkomfort',
      features: ['Bessere Raumnutzung', 'Moderne Technik', 'Komfortable Ausstattung']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Wertsteigerung',
      description: 'Professioneller Innenausbau steigert den Wert Ihrer Immobilie nachhaltig',
      features: ['Höhere Verkaufspreise', 'Bessere Vermietbarkeit', 'Langfristige Investition']
    },
    {
      icon: 'ri-leaf-line',
      title: 'Energieeffizienz',
      description: 'Moderne Materialien und Techniken für optimale Energieeffizienz',
      features: ['Bessere Dämmung', 'Smart Home Integration', 'Niedrigere Nebenkosten']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Qualitätsgarantie',
      description: 'Umfassende Garantie auf alle Arbeiten und verwendete Materialien',
      features: ['Hochwertige Materialien', 'Fachgerechte Ausführung', 'Langlebige Lösungen']
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ihre <span className="text-[#C04020]">Vorteile</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Warum Sie sich für unseren professionellen Innenausbau entscheiden sollten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 h-full border border-gray-100 group-hover:border-[#C04020]/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${benefit.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>

                <div className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-[#C04020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-[#C04020] text-sm"></i>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              München & Umgebung - Ihr lokaler Partner
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C04020]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-map-pin-line text-[#C04020] text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lokale Expertise</h4>
                  <p className="text-gray-600 text-sm">Wir kennen die Besonderheiten Münchener Immobilien und lokale Bauvorschriften</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C04020]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-time-line text-[#C04020] text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Schnelle Anfahrt</h4>
                  <p className="text-gray-600 text-sm">Kurze Wege bedeuten flexible Termine und schnelle Reaktionszeiten</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C04020]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-team-line text-[#C04020] text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Regionale Partner</h4>
                  <p className="text-gray-600 text-sm">Zusammenarbeit mit lokalen Lieferanten für beste Qualität und faire Preise</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Kostenlose Erstberatung</h4>
              <p className="text-gray-600">Lassen Sie sich unverbindlich beraten</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Vor-Ort-Termin</span>
                <span className="font-semibold text-[#C04020]">Kostenlos</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Kostenvoranschlag</span>
                <span className="font-semibold text-[#C04020]">Kostenlos</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">3D-Visualisierung</span>
                <span className="font-semibold text-[#C04020]">Inklusive</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-600">Materialberatung</span>
                <span className="font-semibold text-[#C04020]">Inklusive</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#C04020] to-[#A03318] text-white py-4 rounded-xl hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold text-lg">
              Jetzt Termin vereinbaren
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                <i className="ri-phone-line mr-1"></i>
                Oder rufen Sie uns an: 089 / 123 456 78
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
