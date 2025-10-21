export default function InnenausbauProcess() {
  const steps = [
    {
      number: '01',
      title: 'Erstberatung',
      description: 'Kostenlose Beratung vor Ort zur Erfassung Ihrer Wünsche und Anforderungen',
      icon: 'ri-chat-3-line',
      duration: '1-2 Stunden'
    },
    {
      number: '02',
      title: 'Planung & Design',
      description: 'Detaillierte Planung mit 3D-Visualisierung und Materialauswahl',
      icon: 'ri-draft-line',
      duration: '3-5 Tage'
    },
    {
      number: '03',
      title: 'Kostenvoranschlag',
      description: 'Transparente Kostenaufstellung mit detaillierter Leistungsbeschreibung',
      icon: 'ri-calculator-line',
      duration: '2-3 Tage'
    },
    {
      number: '04',
      title: 'Materialbestellung',
      description: 'Beschaffung hochwertiger Materialien von unseren Partnern',
      icon: 'ri-truck-line',
      duration: '1-2 Wochen'
    },
    {
      number: '05',
      title: 'Ausführung',
      description: 'Professionelle Umsetzung durch unser erfahrenes Handwerkerteam',
      icon: 'ri-hammer-line',
      duration: 'Je nach Projekt'
    },
    {
      number: '06',
      title: 'Übergabe',
      description: 'Finale Abnahme und Übergabe mit Garantie und Pflegehinweisen',
      icon: 'ri-key-line',
      duration: '1 Tag'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unser <span className="text-[#C04020]">Arbeitsprozess</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Idee bis zur finalen Übergabe - so läuft Ihr Innenausbau-Projekt ab
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 group-hover:border-[#C04020]/20">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-[#C04020]/10 rounded-full flex items-center justify-center">
                        <i className={`${step.icon} text-[#C04020] text-sm`}></i>
                      </div>
                      <span className="text-sm text-[#C04020] font-medium">{step.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-full transition-all duration-1000 group-hover:w-full"
                    style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg border-2 border-[#C04020]/20 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-[#C04020]"></i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-[#C04020]/5 to-[#C04020]/10 rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Bereit für Ihr Innenausbau-Projekt?
              </h3>
              <p className="text-gray-600 mb-6">
                Lassen Sie uns gemeinsam Ihre Wohnträume verwirklichen. Kontaktieren Sie uns für eine kostenlose Erstberatung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#C04020] to-[#A03318] text-white px-8 py-3 rounded-full hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold">
                  Kostenlose Beratung
                </button>
                <button className="bg-white text-[#C04020] px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold border border-[#C04020]/20">
                  Referenzen ansehen
                </button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#C04020]">15+</div>
                    <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#C04020]">500+</div>
                    <div className="text-sm text-gray-600">Projekte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#C04020]">98%</div>
                    <div className="text-sm text-gray-600">Zufriedenheit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#C04020]">24/7</div>
                    <div className="text-sm text-gray-600">Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}