
'use client';

export default function ParquetProcess() {
  const steps = [
    {
      number: '01',
      title: 'Beratung & Planung',
      description: 'Kostenlose Vor-Ort-Beratung mit Materialauswahl und Kostenvoranschlag',
      icon: 'ri-user-voice-line',
      details: [
        'Raumvermessung und Bestandsaufnahme',
        'Holzart- und Verlegemuster-Beratung',
        'Kostenvoranschlag und Terminplanung'
      ]
    },
    {
      number: '02',
      title: 'Untergrundvorbereitung',
      description: 'Professionelle Vorbereitung für optimale Verlegung',
      icon: 'ri-hammer-line',
      details: [
        'Untergrund prüfen und ausgleichen',
        'Dampfsperre und Trittschalldämmung',
        'Fußbodenheizung-Funktionsprüfung'
      ]
    },
    {
      number: '03',
      title: 'Materiallieferung',
      description: 'Termingerechte Anlieferung hochwertiger Materialien',
      icon: 'ri-truck-line',
      details: [
        'Qualitätskontrolle der Materialien',
        'Akklimatisierung des Parketts',
        'Schutz der Einrichtung'
      ]
    },
    {
      number: '04',
      title: 'Fachgerechte Verlegung',
      description: 'Präzise Verlegung durch erfahrene Parkettleger',
      icon: 'ri-tools-line',
      details: [
        'Verlegung nach DIN-Normen',
        'Präzise Schnitte und Anpassungen',
        'Saubere Arbeitsweise'
      ]
    },
    {
      number: '05',
      title: 'Oberflächenbehandlung',
      description: 'Schleifen, Versiegeln oder Ölen für perfekte Oberfläche',
      icon: 'ri-brush-line',
      details: [
        'Maschinelles Schleifen in mehreren Stufen',
        'Versiegelung oder Ölung nach Wunsch',
        'Zwischenschliff und Endbehandlung'
      ]
    },
    {
      number: '06',
      title: 'Übergabe & Service',
      description: 'Abnahme mit Pflegehinweisen und Garantie',
      icon: 'ri-shield-check-line',
      details: [
        'Gründliche Endreinigung',
        'Pflegeanleitung und Garantieunterlagen',
        'Nachbetreuung und Service'
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Unser Parkettverlegung-Prozess
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Beratung bis zur finalen Übergabe – so läuft Ihr Parkettprojekt ab
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C04020] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <i className={`${step.icon} text-white text-lg sm:text-xl`}></i>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#C04020]">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3 sm:mb-4">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-4 border-[#C04020] flex items-center justify-center">
                    <i className="ri-arrow-right-line text-[#C04020] text-sm"></i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
