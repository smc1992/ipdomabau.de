
export default function MalerProcess() {
  const steps = [
    {
      number: '01',
      title: 'Kostenlose Beratung',
      description: 'Vor-Ort-Termin in München und Umgebung zur Begutachtung und Farbberatung',
      icon: 'ri-user-voice-line'
    },
    {
      number: '02',
      title: 'Kostenvoranschlag',
      description: 'Detaillierte Kalkulation mit transparenten Preisen für Ihr Malerprojekt',
      icon: 'ri-file-text-line'
    },
    {
      number: '03',
      title: 'Terminplanung',
      description: 'Flexible Terminvereinbarung nach Ihren Wünschen und Verfügbarkeiten',
      icon: 'ri-calendar-line'
    },
    {
      number: '04',
      title: 'Vorbereitung',
      description: 'Professionelle Abdeckung und Vorbereitung der Räume und Oberflächen',
      icon: 'ri-tools-line'
    },
    {
      number: '05',
      title: 'Ausführung',
      description: 'Präzise Malerarbeiten mit hochwertigen Materialien und Werkzeugen',
      icon: 'ri-brush-line'
    },
    {
      number: '06',
      title: 'Übergabe',
      description: 'Gründliche Reinigung und Abnahme der fertigen Malerarbeiten',
      icon: 'ri-check-double-line'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unser Arbeitsprozess
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Beratung bis zur finalen Übergabe – so läuft Ihr Malerprojekt in München ab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center">
                      <i className={`${step.icon} text-white text-xl`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#C04020] mb-2">{step.number}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className="ri-arrow-right-line text-gray-400"></i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4">
              Schnelle Terminvereinbarung für München
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Kontaktieren Sie uns für einen kostenlosen Beratungstermin. Wir sind in ganz München und Umgebung für Sie da.
            </p>
            <a
              href="#kontakt"
              className="inline-block bg-gradient-to-r from-[#C04020] to-[#A03318] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer rounded-lg"
            >
              Jetzt Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
