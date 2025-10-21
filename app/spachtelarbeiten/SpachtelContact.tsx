
'use client';

import Link from 'next/link';

export default function SpachtelContact() {
  const serviceAreas = [
    'München Zentrum',
    'München Nord',
    'München Süd',
    'München Ost',
    'München West',
    'Schwabing',
    'Maxvorstadt',
    'Lehel',
    'Haidhausen',
    'Au-Haidhausen',
    'Sendling',
    'Neuhausen',
    'Nymphenburg',
    'Bogenhausen',
    'Giesing',
    'Untergiesing'
  ];

  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Telefon',
      value: '+49 172 3004911',
      description: 'Mo-Fr 8:00-17:00 Uhr',
      action: 'tel:+4917230049111',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-mail-line',
      title: 'E-Mail',
      value: 'info@ipdomabau.de',
      description: 'Schnelle Antwort garantiert',
      action: 'mailto:info@ipdomabau.de',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-calendar-line',
      title: 'Termin vereinbaren',
      value: 'Online Terminbuchung',
      description: 'Kostenlose Vor-Ort-Beratung',
      action: '/kontakt',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Spachtelarbeiten in München anfragen
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Kostenlose Beratung und unverbindlicher Kostenvoranschlag für Ihre Spachtelprojekte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${method.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-2xl font-semibold mb-2">{method.value}</p>
              <p className="text-white/80 mb-6">{method.description}</p>
              
              {method.action.startsWith('/') ? (
                <Link 
                  href={method.action}
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Jetzt kontaktieren
                </Link>
              ) : (
                <a 
                  href={method.action}
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Jetzt kontaktieren
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Unser Servicegebiet in München
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Als lokaler Meisterbetrieb sind wir in ganz München und Umgebung für Sie da. Schnelle Anfahrt und persönlicher Service garantiert.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900">
              <h4 className="text-xl font-bold text-blue-600 mb-6">
                Kostenlose Erstberatung sichern
              </h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span>Vor-Ort-Besichtigung in München</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span>Individuelle Spachtel-Beratung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span>Transparenter Kostenvoranschlag</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span>Keine versteckten Kosten</span>
                </div>
              </div>

              <Link 
                href="/kontakt"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center block whitespace-nowrap cursor-pointer"
              >
                Jetzt Beratungstermin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
