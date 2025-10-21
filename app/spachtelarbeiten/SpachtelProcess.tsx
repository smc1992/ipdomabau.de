
'use client';

export default function SpachtelProcess() {
  const processSteps = [
    {
      step: '01',
      title: 'Beratung & Planung',
      description: 'Kostenlose Vor-Ort-Beratung in München. Wir analysieren Ihre Wände und beraten Sie zu den passenden Spachteltechniken.',
      icon: 'ri-search-line',
      details: [
        'Kostenlose Vor-Ort-Besichtigung',
        'Wandanalyse und Untergrundprüfung',
        'Beratung zu Spachteltechniken',
        'Farbberatung und Mustervorschläge'
      ]
    },
    {
      step: '02',
      title: 'Kostenvoranschlag',
      description: 'Detaillierter Kostenvoranschlag mit transparenter Aufschlüsselung aller Spachtelarbeiten für Ihr Projekt in München.',
      icon: 'ri-calculator-line',
      details: [
        'Transparente Kostenaufstellung',
        'Materialauswahl und -kosten',
        'Zeitplanung für die Arbeiten',
        'Keine versteckten Kosten'
      ]
    },
    {
      step: '03',
      title: 'Vorbereitung',
      description: 'Professionelle Vorbereitung der Wände und Schutz Ihrer Möbel. Wir sorgen für optimale Arbeitsbedingungen.',
      icon: 'ri-tools-line',
      details: [
        'Abdeckung von Möbeln und Böden',
        'Untergrundvorbereitung',
        'Reparatur von Rissen und Löchern',
        'Grundierung bei Bedarf'
      ]
    },
    {
      step: '04',
      title: 'Spachtelarbeiten',
      description: 'Fachgerechte Ausführung der gewählten Spachteltechnik durch unsere erfahrenen Handwerker in München.',
      icon: 'ri-brush-line',
      details: [
        'Professionelle Spachteltechnik',
        'Mehrschichtiger Aufbau',
        'Präzise Oberflächenbearbeitung',
        'Qualitätskontrolle während der Arbeit'
      ]
    },
    {
      step: '05',
      title: 'Finishing & Schutz',
      description: 'Abschließende Oberflächenbehandlung und Versiegelung für langanhaltende Schönheit Ihrer Spachtelwände.',
      icon: 'ri-shield-check-line',
      details: [
        'Feinschliff der Oberflächen',
        'Versiegelung bei Bedarf',
        'Schutzbehandlung',
        'Endkontrolle der Qualität'
      ]
    },
    {
      step: '06',
      title: 'Übergabe & Service',
      description: 'Saubere Übergabe Ihrer neuen Spachtelwände mit Pflegehinweisen und Garantie auf unsere Arbeit.',
      icon: 'ri-award-line',
      details: [
        'Gründliche Endreinigung',
        'Pflegehinweise für Spachtelwände',
        'Garantie auf Handwerksleistung',
        'Nachbetreuung bei Fragen'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Unser Spachtel-Prozess
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Von der ersten Beratung bis zur finalen Übergabe – so läuft Ihr Spachtelprojekt in München ab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="text-4xl font-bold text-slate-200 group-hover:text-blue-600 transition-colors duration-300">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg">
                    <i className="ri-arrow-right-line text-blue-600 text-sm"></i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Ihre Spachtelarbeiten in München?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Kontaktieren Sie uns für eine kostenlose Beratung und einen unverbindlichen Kostenvoranschlag
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4917230049111" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>
                +49 172 3004911
              </a>
              <a 
                href="mailto:info@ipdomabau.de" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line mr-2"></i>
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
