
'use client';

export default function TrockenbauProcess() {
  const steps = [
    {
      number: "01",
      title: "Kostenlose Beratung",
      description: "Vor-Ort-Termin zur Analyse Ihrer Räume und Besprechung Ihrer Wünsche",
      icon: "ri-user-voice-line",
      duration: "1-2 Stunden"
    },
    {
      number: "02",
      title: "Planung & Angebot",
      description: "Detaillierte Planung mit technischen Zeichnungen und transparentem Kostenvoranschlag",
      icon: "ri-draft-line",
      duration: "2-3 Tage"
    },
    {
      number: "03",
      title: "Materialbestellung",
      description: "Beschaffung hochwertiger Materialien von zertifizierten Herstellern",
      icon: "ri-truck-line",
      duration: "3-5 Tage"
    },
    {
      number: "04",
      title: "Vorbereitung",
      description: "Schutz der Einrichtung und Vorbereitung der Baustelle",
      icon: "ri-shield-check-line",
      duration: "0.5 Tage"
    },
    {
      number: "05",
      title: "Montage",
      description: "Professionelle Ausführung durch erfahrene Trockenbauer",
      icon: "ri-hammer-line",
      duration: "1-5 Tage"
    },
    {
      number: "06",
      title: "Übergabe",
      description: "Qualitätskontrolle, Reinigung und Übergabe des fertigen Projekts",
      icon: "ri-check-double-line",
      duration: "0.5 Tage"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Unser Arbeitsprozess
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Beratung bis zur Übergabe - so läuft Ihr Trockenbau-Projekt ab
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mr-4">
                    <i className={`${step.icon} text-xl text-white`}></i>
                  </div>
                  <div className="text-3xl font-bold text-[#C04020]">{step.number}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                
                <div className="flex items-center text-sm text-[#C04020] font-semibold">
                  <i className="ri-time-line mr-2"></i>
                  Dauer: {step.duration}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <i className="ri-arrow-right-line text-2xl text-[#C04020]"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Schnelle Projektabwicklung</h3>
          <p className="text-lg mb-6 opacity-90">
            Die meisten Trockenbau-Projekte können wir innerhalb von 1-2 Wochen realisieren
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-80">Angebot nach Besichtigung</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5 Tage</div>
              <div className="text-sm opacity-80">Durchschnittliche Bauzeit</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2 Jahre</div>
              <div className="text-sm opacity-80">Gewährleistung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}