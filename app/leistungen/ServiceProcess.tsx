
export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'Erstberatung',
      description: 'Kostenlose Beratung vor Ort mit detaillierter Bestandsaufnahme und Bedarfsanalyse.',
      icon: 'ri-chat-3-line'
    },
    {
      number: '02',
      title: 'Planung & Angebot',
      description: 'Detaillierte Planung mit 3D-Visualisierung und transparentem Festpreisangebot.',
      icon: 'ri-draft-line'
    },
    {
      number: '03',
      title: 'Materialauswahl',
      description: 'Gemeinsame Auswahl hochwertiger Materialien in unserem Showroom oder vor Ort.',
      icon: 'ri-palette-line'
    },
    {
      number: '04',
      title: 'Terminplanung',
      description: 'Verbindliche Terminplanung mit transparenter Kommunikation über alle Arbeitsschritte.',
      icon: 'ri-calendar-line'
    },
    {
      number: '05',
      title: 'Ausführung',
      description: 'Professionelle Umsetzung durch erfahrene Meister und Fachkräfte mit regelmäßiger Qualitätskontrolle.',
      icon: 'ri-tools-line'
    },
    {
      number: '06',
      title: 'Abnahme & Service',
      description: 'Gemeinsame Endabnahme mit Dokumentation und langfristigem Kundenservice.',
      icon: 'ri-shield-check-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unser Projektablauf
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Idee bis zur Fertigstellung – so läuft Ihr Projekt bei DOMABAU ab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#C04020] text-white rounded-full flex items-center justify-center mr-4">
                    <i className={`${step.icon} text-xl`}></i>
                  </div>
                  <div className="text-3xl font-bold text-[#C04020]">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white border-2 border-[#C04020] rounded-full flex items-center justify-center">
                    <i className="ri-arrow-right-line text-[#C04020]"></i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Ihr Projekt?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Lassen Sie uns gemeinsam Ihre Vorstellungen verwirklichen
            </p>
            <a 
              href="/kontakt" 
              className="inline-block bg-white text-[#C04020] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Jetzt Beratungstermin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
