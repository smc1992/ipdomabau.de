'use client';

export default function BadBenefits() {
  const benefits = [
    {
      icon: 'ri-award-line',
      title: 'Meisterbetrieb',
      description: 'Zertifizierter Handwerksbetrieb mit über 15 Jahren Erfahrung in der Badsanierung'
    },
    {
      icon: 'ri-shield-check-line',
      title: '5 Jahre Garantie',
      description: 'Umfassende Garantie auf alle Arbeiten und verwendeten Materialien'
    },
    {
      icon: 'ri-time-line',
      title: 'Termingerecht',
      description: 'Zuverlässige Einhaltung aller vereinbarten Termine und Fristen'
    },
    {
      icon: 'ri-money-euro-circle-line',
      title: 'Festpreisgarantie',
      description: 'Transparente Kostenvoranschläge ohne versteckte Zusatzkosten'
    },
    {
      icon: 'ri-recycle-line',
      title: 'Nachhaltig',
      description: 'Umweltfreundliche Materialien und fachgerechte Entsorgung'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Notservice',
      description: 'Schnelle Hilfe bei Wasserschäden und Notfällen'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[#C04020] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Ihre Vorteile
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Warum DOMABAU für Ihre Badsanierung?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Als erfahrener Meisterbetrieb in München bieten wir Ihnen höchste Qualität, Zuverlässigkeit und Service für Ihre Badsanierung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${benefit.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Förderungen für barrierefreie Badsanierung
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nutzen Sie staatliche Förderungen für Ihre Badsanierung! Wir unterstützen Sie bei der Beantragung von KfW-Zuschüssen und anderen Fördermitteln für barrierefreie Umbauten.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C04020] rounded-lg flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">KfW-Zuschuss 455-B</div>
                    <div className="text-sm text-gray-600">Bis zu 6.250€ für barrierefreie Umbauten</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C04020] rounded-lg flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pflegekasse</div>
                    <div className="text-sm text-gray-600">Bis zu 4.000€ für wohnumfeldverbessernde Maßnahmen</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C04020] rounded-lg flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Steuerliche Absetzbarkeit</div>
                    <div className="text-sm text-gray-600">Handwerkerleistungen von der Steuer absetzen</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/bad-foerderung.jpg"
                alt="Barrierefreies Bad mit Förderung"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold mb-2">Bis zu 10.250€</div>
                <div className="text-sm">Förderung möglich</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}