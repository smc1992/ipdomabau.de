
export default function MalerBenefits() {
  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Meisterqualität',
      description: 'Zertifizierte Malerbetrieb mit langjähriger Erfahrung in München und Umgebung',
      color: 'bg-[#C04020]'
    },
    {
      icon: 'ri-time-line',
      title: 'Termingarantie',
      description: 'Pünktliche und zuverlässige Ausführung aller Malerarbeiten nach Vereinbarung',
      color: 'bg-[#C04020]'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Umweltfreundlich',
      description: 'Verwendung von schadstoffarmen und umweltfreundlichen Farben und Materialien',
      color: 'bg-[#C04020]'
    },
    {
      icon: 'ri-money-euro-circle-line',
      title: 'Faire Preise',
      description: 'Transparente Kostenvoranschläge ohne versteckte Kosten für München',
      color: 'bg-[#C04020]'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Lokaler Service',
      description: 'Schnelle Erreichbarkeit und persönlicher Service in ganz München',
      color: 'bg-[#C04020]'
    },
    {
      icon: 'ri-award-line',
      title: 'Garantie',
      description: 'Umfassende Gewährleistung auf alle Malerarbeiten und verwendete Materialien',
      color: 'bg-[#C04020]'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Warum uns München vertraut
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Als etablierter Malerbetrieb in München bieten wir Ihnen erstklassige Qualität und zuverlässigen Service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${benefit.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
                  Ihr Malerbetrieb für München
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C04020] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Über 15 Jahre Erfahrung in München und Umgebung</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C04020] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Mehr als 500 zufriedene Kunden in München</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C04020] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Spezialisiert auf Münchner Altbau und Neubau</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C04020] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Kostenlose Anfahrt in ganz München</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/maler-team.jpg"
                  alt="Malerbetrieb München Team"
                  className="w-full h-64 sm:h-80 object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
