
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Datenschutzerklärung | DOMABAU München",
  description: "Datenschutzerklärung von DOMABAU - Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/datenschutz`,
  },
};

export default function DatenschutzPage() {
  return (
    <main className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
              <i className="ri-shield-check-line text-white text-xl sm:text-2xl"></i>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A]">Datenschutzerklärung</h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß Art. 13, 14 DSGVO
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                <i className="ri-information-line text-white text-sm sm:text-lg"></i>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3 sm:mb-4">1. Verantwortlicher</h2>
                <div className="text-sm sm:text-base text-gray-700 space-y-1">
                  <p><strong>DOMABAU - Ilijan Pavic</strong></p>
                  <p>Meisterbetrieb</p>
                  <p>Renatastraße 8</p>
                  <p>80635 München</p>
                  <p>Deutschland</p>
                  <p className="mt-3"><strong>Kontakt:</strong></p>
                  <p>Telefon: +49 172 3004911</p>
                  <p>E-Mail: info@ipdomabau.de</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-12">
            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-file-text-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">2. Allgemeine Hinweise</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                <p>Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-database-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">3. Datenerfassung auf dieser Website</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mt-6">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                
                <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mt-6">Wie erfassen wir Ihre Daten?</h3>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-server-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">4. Hosting</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A]">Hetzner Online GmbH</h3>
                <p>Wir hosten unsere Website bei Hetzner Online GmbH. Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen (nachfolgend „Hetzner").</p>
                <p>Wenn Sie unsere Website besuchen, erfasst Hetzner verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Hetzner: <a href="https://www.hetzner.com/de/rechtliches/datenschutz" className="text-[#C04020] hover:underline" target="_blank" rel="noopener noreferrer">https://www.hetzner.com/de/rechtliches/datenschutz</a></p>
                <p>Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.</p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-font-size text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">5. Google Fonts</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
                <p>Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde.</p>
                <p>Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website.</p>
                <p>Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" className="text-[#C04020] hover:underline" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-[#C04020] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a></p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-bar-chart-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">6. Google Analytics</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p>Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers.</p>
                <p>Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting).</p>
                <p>Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p>Weitere Informationen finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-[#C04020] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a></p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-advertisement-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">7. Google Ads</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <p>Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p>Google Ads ermöglicht es uns, Ihnen Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten zu präsentieren, wenn Sie bestimmte Suchbegriffe bei Google eingeben (Keyword-Targeting).</p>
                <p>Ferner können zielgerichtete Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z. B. Standortdaten und Interessen) ausgespielt werden (Zielgruppen-Targeting).</p>
                <p>Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p>Weitere Informationen finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-[#C04020] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a></p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-settings-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">8. Google Tag Manager</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <p>Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p>Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere Technologien auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und nimmt keine eigenständigen Analysen vor.</p>
                <p>Er dient lediglich der Verwaltung und Ausspielung der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an die Muttergesellschaft von Google in die Vereinigten Staaten übertragen werden kann.</p>
                <p>Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer schnellen und unkomplizierten Einbindung und Verwaltung verschiedener Tools auf seiner Website.</p>
                <p>Weitere Informationen zum Google Tag Manager finden Sie unter: <a href="https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/" className="text-[#C04020] hover:underline" target="_blank" rel="noopener noreferrer">https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/</a></p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-cookie-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">9. Cookies</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <p>Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.</p>
                <p>Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
                <p>Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
                <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos).</p>
                <p>Die Speicherung von Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO und § 25 Abs. 1 TTDSG. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.</p>
                <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.</p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-user-settings-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">10. Ihre Rechte</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700 space-y-4">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
                  <li>Recht auf Widerruf Ihrer Einwilligung zur Datenverarbeitung (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p className="mt-4">Für die Ausübung Ihrer Rechte wenden Sie sich bitte an: info@ipdomabau.de</p>
                <p>Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</p>
              </div>
            </section>

            <section>
              <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <i className="ri-calendar-line text-white text-sm sm:text-lg"></i>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">11. Stand der Datenschutzerklärung</h2>
              </div>
              <div className="text-sm sm:text-base text-gray-700">
                <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.</p>
                <p>Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</p>
              </div>
            </section>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link href="/" className="inline-flex items-center bg-gradient-to-r from-[#C04020] to-[#A03318] text-white px-8 py-3 rounded-full hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <i className="ri-home-line mr-2"></i>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
