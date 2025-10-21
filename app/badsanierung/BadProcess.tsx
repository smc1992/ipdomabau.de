
'use client';

export default function BadProcess() {
  const steps = [
    {
      number: '01',
      title: 'Kostenlose Beratung',
      description: 'Vor-Ort-Termin zur Bestandsaufnahme und Bedarfsanalyse. Wir besprechen Ihre Wünsche und erstellen ein individuelles Konzept.',
      icon: 'ri-user-voice-line',
      duration: '1-2 Stunden'
    },
    {
      number: '02',
      title: 'Planung & Design',
      description: 'Detaillierte 3D-Planung Ihres neuen Bades mit Materialauswahl und technischer Auslegung aller Installationen.',
      icon: 'ri-draft-line',
      duration: '3-5 Tage'
    },
    {
      number: '03',
      title: 'Kostenvoranschlag',
      description: 'Transparenter und detaillierter Kostenvoranschlag mit allen Materialien und Arbeitsleistungen ohne versteckte Kosten.',
      icon: 'ri-calculator-line',
      duration: '2-3 Tage'
    },
    {
      number: '04',
      title: 'Demontage & Vorbereitung',
      description: 'Fachgerechte Demontage der alten Sanitäranlagen und Vorbereitung der Räumlichkeiten für die Neuinstallation.',
      icon: 'ri-hammer-line',
      duration: '1-2 Tage'
    },
    {
      number: '05',
      title: 'Installation & Montage',
      description: 'Professionelle Installation aller Sanitäranlagen, Fliesen, Elektrik und Heizung durch unsere erfahrenen Fachkräfte.',
      icon: 'ri-tools-line',
      duration: '5-10 Tage'
    },
    {
      number: '06',
      title: 'Abnahme & Übergabe',
      description: 'Gemeinsame Endabnahme mit Funktionsprüfung aller Installationen und Übergabe Ihres neuen Traumbades.',
      icon: 'ri-checkbox-circle-line',
      duration: '1 Tag'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[#C04020] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Unser Prozess
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            So läuft Ihre Badsanierung ab
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Beratung bis zur Übergabe Ihres neuen Bades – wir begleiten Sie durch jeden Schritt Ihrer Badsanierung.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#C04020] to-[#A03318] rounded-full"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="flex-1 lg:max-w-md">
                  <div className={`bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#C04020] ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center">
                        <i className={`${step.icon} text-white text-xl`}></i>
                      </div>
                      <div className="bg-[#C04020] text-white px-3 py-1 rounded-full text-sm font-bold">
                        {step.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                <div className="flex-1 lg:max-w-md">
                  {index % 2 !== 0 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#C04020]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center">
                          <i className={`${step.icon} text-white text-xl`}></i>
                        </div>
                        <div className="bg-[#C04020] text-white px-3 py-1 rounded-full text-sm font-bold">
                          {step.duration}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Gesamtdauer Ihrer Badsanierung</h3>
            <p className="text-xl mb-6">Je nach Umfang: 2-4 Wochen von Planung bis Fertigstellung</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm">Jahre Erfahrung</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm">Sanierte Bäder</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
