
export default function SanierungProcess() {
  const steps = [
    {
      number: '01',
      title: 'Bestandsaufnahme',
      description: 'Detaillierte Analyse der Bausubstanz, Schadenserfassung und Potentialbewertung',
      icon: 'ri-search-line',
      duration: '1-2 Wochen'
    },
    {
      number: '02', 
      title: 'Sanierungskonzept',
      description: 'Entwicklung eines maßgeschneiderten Sanierungsplans mit Kosten- und Zeitplanung',
      icon: 'ri-draft-line',
      duration: '2-3 Wochen'
    },
    {
      number: '03',
      title: 'Genehmigungen',
      description: 'Beantragung aller erforderlichen Baugenehmigungen und Fördermittel',
      icon: 'ri-file-text-line',
      duration: '4-8 Wochen'
    },
    {
      number: '04',
      title: 'Rohbauarbeiten',
      description: 'Strukturelle Sanierung, Statik, Rohinstallationen und Dämmung',
      icon: 'ri-hammer-line',
      duration: '8-16 Wochen'
    },
    {
      number: '05',
      title: 'Ausbauarbeiten',
      description: 'Innenausbau, Haustechnik, Böden, Wände und finale Installationen',
      icon: 'ri-tools-line',
      duration: '6-12 Wochen'
    },
    {
      number: '06',
      title: 'Abnahme & Übergabe',
      description: 'Qualitätskontrolle, behördliche Abnahmen und Schlüsselübergabe',
      icon: 'ri-key-line',
      duration: '1-2 Wochen'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unser Sanierungsprozess
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strukturiert, transparent und termingerecht – so führen wir Ihre Sanierung 
            von der ersten Analyse bis zur schlüsselfertigen Übergabe durch.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#C04020] to-emerald-500 hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className={`flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:space-x-12`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:mb-0 mb-8`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <div className="w-12 h-12 bg-[#C04020] rounded-xl flex items-center justify-center mr-4">
                        <i className={`${step.icon} text-white text-xl`}></i>
                      </div>
                      <span className="text-sm font-semibold text-[#C04020] bg-[#C04020]/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#C04020]/10 to-emerald-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
              Gesamtdauer: 6-12 Monate
            </h3>
            <p className="text-gray-600 mb-6">
              Je nach Umfang und Komplexität Ihres Sanierungsprojekts. 
              Wir halten Sie während des gesamten Prozesses auf dem Laufenden.
            </p>
            <button className="bg-[#C04020] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer">
              Kostenlose Erstberatung vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
