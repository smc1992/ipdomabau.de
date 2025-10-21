
'use client';

export default function QualitySection() {
  const qualities = [
    {
      icon: 'ri-award-line',
      title: 'Meisterbetrieb seit über 10 Jahren',
      description: 'Zertifizierte Qualität und Erfahrung'
    },
    {
      icon: 'ri-time-line',
      title: 'Termintreue & Sauberkeit',
      description: 'Pünktliche Fertigstellung und saubere Baustellen'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Persönliche Betreuung',
      description: 'Direkter Kontakt und individuelle Beratung'
    },
    {
      icon: 'ri-money-euro-circle-line',
      title: 'Faire, transparente Preise',
      description: 'Ehrliche Kostenvoranschläge ohne versteckte Kosten'
    },
    {
      icon: 'ri-star-line',
      title: 'Höchste Präzision & Qualität',
      description: 'Handwerkskunst auf höchstem Niveau'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F5F0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Qualität & Vertrauen
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-2 leading-relaxed">
            Mit DOMABAU profitieren Sie von einem erfahrenen Team aus Fachleuten, die Ihr Projekt 
            termingerecht und mit Liebe zum Detail umsetzen. Wir stehen für ehrliche Beratung, 
            zuverlässige Ausführung und handwerkliche Qualität.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {qualities.map((quality, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#C04020] text-white flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#A03318] transition-colors">
                <i className={`${quality.icon} text-2xl sm:text-3xl`}></i>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-2 sm:mb-3 leading-tight px-2">
                {quality.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
