
'use client';

export default function ParquetBenefits() {
  const benefits = [
    {
      icon: 'ri-leaf-line',
      title: 'Natürlich & Nachhaltig',
      description: 'Parkett ist ein nachwachsender Rohstoff und verbessert das Raumklima durch natürliche Feuchtigkeitsregulierung.',
      features: ['CO₂-neutral', 'Allergikerfreundlich', 'Schadstoffarm', 'Recyclebar']
    },
    {
      icon: 'ri-time-line',
      title: 'Langlebigkeit',
      description: 'Hochwertiges Parkett hält bei richtiger Pflege mehrere Jahrzehnte und kann mehrfach renoviert werden.',
      features: ['50+ Jahre Lebensdauer', 'Mehrfach renovierbar', 'Zeitlose Optik', 'Wertstabil']
    },
    {
      icon: 'ri-home-heart-line',
      title: 'Wohnkomfort',
      description: 'Parkett schafft eine warme, gemütliche Atmosphäre und ist angenehm für Füße und Gelenke.',
      features: ['Warme Oberfläche', 'Trittsicher', 'Geräuschdämmend', 'Fußbodenheizung geeignet']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Wertsteigerung',
      description: 'Parkettböden steigern den Wert Ihrer Immobilie nachhaltig und sind bei Käufern sehr beliebt.',
      features: ['Immobilienwert steigern', 'Verkaufsargument', 'Zeitlose Investition', 'Hohe Nachfrage']
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Warum Parkett die beste Wahl ist
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie die vielen Vorteile von Parkettböden für Ihr Zuhause
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#C04020] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className={`${benefit.icon} text-white text-xl sm:text-2xl`}></i>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-check-line text-white text-xs"></i>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Bereit für Ihren neuen Parkettboden?
          </h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
            Lassen Sie sich kostenlos beraten und erhalten Sie ein unverbindliches Angebot
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-[#C04020] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base">
              Kostenlose Beratung
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#C04020] transition-colors duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base">
              Angebot anfordern
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
