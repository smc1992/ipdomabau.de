
'use client';

export default function SpachtelBenefits() {
  const benefits = [
    {
      icon: 'ri-award-line',
      title: 'Meisterqualität',
      description: 'Zertifizierte Handwerker mit über 10 Jahren Erfahrung in Spachteltechniken',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Lokal in München',
      description: 'Schnelle Anfahrt und persönlicher Service in München und Umgebung',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-palette-line',
      title: 'Individuelle Gestaltung',
      description: 'Maßgeschneiderte Spachteltechniken nach Ihren Wünschen und Vorstellungen',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Garantie & Service',
      description: 'Umfassende Garantie auf alle Spachtelarbeiten mit Nachbetreuung',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'ri-time-line',
      title: 'Termingerecht',
      description: 'Zuverlässige Einhaltung vereinbarter Termine für Ihre Spachtelprojekte',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Umweltfreundlich',
      description: 'Verwendung hochwertiger, umweltschonender Spachtelmaterialien',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const qualityFeatures = [
    {
      title: 'Q1 - Standardqualität',
      description: 'Grundlegende Spachtelarbeiten für einfache Wandgestaltung',
      icon: 'ri-checkbox-circle-line'
    },
    {
      title: 'Q2 - Verbesserte Qualität',
      description: 'Hochwertige Spachtelarbeiten mit verbesserter Oberflächenqualität',
      icon: 'ri-checkbox-circle-line'
    },
    {
      title: 'Q3 - Hohe Qualität',
      description: 'Premium Spachtelarbeiten für anspruchsvolle Wandgestaltung',
      icon: 'ri-checkbox-circle-line'
    },
    {
      title: 'Q4 - Höchste Qualität',
      description: 'Exklusive Spachtelarbeiten mit perfekter Oberflächenqualität',
      icon: 'ri-star-fill'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Warum DOMABAU für Spachtelarbeiten?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Als Meisterbetrieb in München bieten wir Ihnen höchste Qualität und zuverlässigen Service für alle Spachteltechniken
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Spachtelqualitäten Q1 - Q4
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Wir bieten alle Qualitätsstufen nach deutschen Standards – von einfachen bis zu höchsten Ansprüchen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                index === 3 ? 'border-blue-600 bg-gradient-to-br from-blue-600/5 to-blue-50' : 'border-slate-200 hover:border-blue-600/30'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
                    index === 3 ? 'bg-blue-600' : 'bg-slate-200'
                  }`}>
                    <i className={`${feature.icon} ${
                      index === 3 ? 'text-white' : 'text-slate-600'
                    } text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold text-lg mb-2 ${
                      index === 3 ? 'text-blue-600' : 'text-slate-900'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-600 text-white rounded-xl p-6 inline-block">
              <h4 className="font-bold text-lg mb-2">Unser Qualitätsversprechen</h4>
              <p className="text-white/90">
                Wir arbeiten ausschließlich mit hochwertigen Materialien und garantieren fachgerechte Ausführung aller Spachteltechniken
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
