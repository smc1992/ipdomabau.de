
export default function SanierungBenefits() {
  const benefits = [
    {
      icon: 'ri-money-euro-circle-line',
      title: 'Wertsteigerung',
      description: 'Bis zu 30% Wertsteigerung der Immobilie durch professionelle Sanierung',
      stats: '+30%',
      color: 'emerald'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Energieeffizienz',
      description: 'Bis zu 80% Energieeinsparung durch moderne Dämmung und Haustechnik',
      stats: '-80%',
      color: 'green'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Förderungen',
      description: 'KfW-Förderung bis zu 150.000€ für energetische Sanierungsmaßnahmen',
      stats: '150.000€',
      color: 'blue'
    },
    {
      icon: 'ri-home-heart-line',
      title: 'Wohnkomfort',
      description: 'Deutlich verbessertes Raumklima und moderne Wohnatmosphäre',
      stats: '100%',
      color: 'purple'
    },
    {
      icon: 'ri-time-line',
      title: 'Langlebigkeit',
      description: '30+ Jahre Nutzungsdauer durch hochwertige Materialien und Verarbeitung',
      stats: '30+ Jahre',
      color: 'orange'
    },
    {
      icon: 'ri-award-line',
      title: 'Qualitätsgarantie',
      description: 'Meisterqualität mit umfassender Gewährleistung auf alle Arbeiten',
      stats: '5 Jahre',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600 bg-emerald-500',
      green: 'from-green-500 to-green-600 bg-green-500',
      blue: 'from-blue-500 to-blue-600 bg-blue-500',
      purple: 'from-purple-500 to-purple-600 bg-purple-500',
      orange: 'from-orange-500 to-orange-600 bg-orange-500',
      red: 'from-[#C04020] to-[#A03318] bg-[#C04020]'
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Warum Sanierung mit DOMABAU?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Sanierung ist eine Investition in die Zukunft. 
            Entdecken Sie die vielfältigen Vorteile unserer Sanierungsleistungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(benefit.color)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <i className={`${benefit.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${getColorClasses(benefit.color)} bg-clip-text text-transparent`}>
                      {benefit.stats}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihre Sanierung?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Sanierungsprojekt planen. 
            Kostenlose Erstberatung und unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#C04020] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Jetzt Beratung anfragen
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#C04020] transition-colors whitespace-nowrap cursor-pointer">
              089 123 456 789
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
