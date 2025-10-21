
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Impressum | DOMABAU München",
  description: "Impressum von DOMABAU - Rechtliche Angaben gemäß § 5 TMG. Meisterbetrieb für Bau und Renovierung in München.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/impressum`,
  },
};

export default function ImpressumPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#C04020] to-[#A03318] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Impressum
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Rechtliche Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-12">
            
            {/* Angaben gemäß § 5 TMG */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-building-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Angaben gemäß § 5 TMG</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg font-semibold text-gray-900">DOMABAU</p>
                <p className="text-sm sm:text-base">Inhaber: Ilijan Pavic</p>
                <p className="text-sm sm:text-base">Meisterbetrieb</p>
                <div className="mt-4 sm:mt-6">
                  <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Anschrift:</p>
                  <p className="text-sm sm:text-base">Renatastraße 8</p>
                  <p className="text-sm sm:text-base">80635 München</p>
                  <p className="text-sm sm:text-base">Deutschland</p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-phone-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Kontakt</span>
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base"><span className="font-semibold">Telefon:</span> +49 172 3004911</p>
                <p className="text-sm sm:text-base"><span className="font-semibold">E-Mail:</span> info@ipdomabau.de</p>
                <p className="text-sm sm:text-base"><span className="font-semibold">Internet:</span> <a href="https://www.ipdomabau.de" className="text-[#C04020] hover:underline break-all">www.ipdomabau.de</a></p>
              </div>
            </div>

            {/* Umsatzsteuer-ID */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-file-text-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Steuerliche Angaben</span>
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base"><span className="font-semibold">Steuernummer:</span> 146/126/30063</p>
                <p className="text-sm sm:text-base"><span className="font-semibold">Zuständiges Finanzamt:</span> München</p>
              </div>
            </div>

            {/* Berufsbezeichnung */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-award-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Berufsbezeichnung und berufsrechtliche Regelungen</span>
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base"><span className="font-semibold">Berufsbezeichnung:</span> Handwerksmeister</p>
                <p className="text-sm sm:text-base"><span className="font-semibold">Verliehen in:</span> Deutschland</p>
                <p className="text-sm sm:text-base"><span className="font-semibold">Zuständige Kammer:</span> Handwerkskammer für München und Oberbayern</p>
                <p className="text-sm sm:text-base"><span className="font-semibold">Es gelten folgende berufsrechtliche Regelungen:</span></p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm sm:text-base">
                  <li>Handwerksordnung (HwO)</li>
                  <li>Gewerbeordnung (GewO)</li>
                </ul>
              </div>
            </div>

            {/* Redaktionell verantwortlich */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-user-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Redaktionell verantwortlich</span>
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base">Ilijan Pavic</p>
                <p className="text-sm sm:text-base">Renatastraße 8</p>
                <p className="text-sm sm:text-base">80635 München</p>
              </div>
            </div>

            {/* EU-Streitschlichtung */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-scales-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">EU-Streitschlichtung</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                <p className="text-sm sm:text-base"><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#C04020] hover:underline break-all">https://ec.europa.eu/consumers/odr/</a></p>
                <p className="text-sm sm:text-base">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>
            </div>

            {/* Verbraucherstreitbeilegung */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-customer-service-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Verbraucherstreitbeilegung</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                <p className="text-sm sm:text-base">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </div>

            {/* Haftung für Inhalte */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-shield-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Haftung für Inhalte</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-xs sm:text-sm">
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>
            </div>

            {/* Haftung für Links */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-links-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Haftung für Links</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-xs sm:text-sm">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-8 h-8 bg-[#C04020] rounded-xl flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                  <i className="ri-copyright-line text-white text-lg"></i>
                </div>
                <span className="text-center sm:text-left">Urheberrecht</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-xs sm:text-sm">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Besonders werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
