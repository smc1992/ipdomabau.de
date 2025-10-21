'use client';

import Link from 'next/link';

export default function BadContact() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#C04020] to-[#A03318] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Starten Sie Ihre Badsanierung
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Traumbad planen. Kostenlose Beratung und unverbindlicher Kostenvoranschlag.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sofort erreichbar</h3>
                  <p className="text-white/80 mb-3">Rufen Sie uns an für eine kostenlose Erstberatung</p>
                  <div className="text-2xl font-bold">+49 172 3004911</div>
                  <div className="text-sm text-white/70">Mo-Fr: 8:00-17:00 Uhr</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">E-Mail Anfrage</h3>
                  <p className="text-white/80 mb-3">Senden Sie uns Ihre Anfrage – wir antworten binnen 24h</p>
                  <div className="text-lg font-semibold">info@ipdomabau.de</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Vor-Ort Service</h3>
                  <p className="text-white/80 mb-3">Kostenlose Beratung und Aufmaß bei Ihnen zu Hause</p>
                  <div className="text-lg font-semibold">München und Umgebung</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kostenlose Beratung anfragen</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-[#C04020] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <i className="ri-calendar-line text-white text-xl"></i>
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">Terminvereinbarung</div>
                  <div className="text-xs text-gray-600">Innerhalb 24h</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-[#C04020] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <i className="ri-calculator-line text-white text-xl"></i>
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">Kostenvoranschlag</div>
                  <div className="text-xs text-gray-600">Kostenlos & unverbindlich</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <i className="ri-check-line text-[#C04020]"></i>
                  <span>Kostenlose Vor-Ort Beratung</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <i className="ri-check-line text-[#C04020]"></i>
                  <span>3D-Planung inklusive</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <i className="ri-check-line text-[#C04020]"></i>
                  <span>Transparente Kostenaufstellung</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <i className="ri-check-line text-[#C04020]"></i>
                  <span>Förderungsberatung</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="flex-1 bg-[#C04020] text-white px-6 py-3 rounded-xl hover:bg-[#A03318] transition-all duration-300 font-semibold text-center whitespace-nowrap cursor-pointer"
                >
                  Jetzt anfragen
                </Link>
                <Link
                  href="tel:+4917230049111"
                  className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold text-center whitespace-nowrap cursor-pointer"
                >
                  Anrufen
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Notfall-Service</h3>
            <p className="text-white/80 mb-6">
              Wasserschaden oder andere Notfälle? Wir sind 24/7 für Sie da!
            </p>
            <Link
              href="tel:+4917230049111"
              className="inline-flex items-center bg-white text-[#C04020] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-alarm-warning-line mr-2"></i>
              Notfall-Hotline: +49 172 3004911
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}