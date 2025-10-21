'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      initializeTracking(savedPreferences);
    }
  }, []);

  const initializeTracking = (prefs: typeof preferences) => {
    if (typeof window !== 'undefined') {
      const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
      
      if (prefs.analytics && gtmId) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', gtmId, {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure'
        });

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
        document.head.appendChild(script);
      }

      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
          ad_storage: prefs.marketing ? 'granted' : 'denied',
          functionality_storage: prefs.functional ? 'granted' : 'denied',
          personalization_storage: prefs.marketing ? 'granted' : 'denied',
          security_storage: 'granted'
        });
      }
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    initializeTracking(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    initializeTracking(necessaryOnly);
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    initializeTracking(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="ri-cookie-line text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Cookie-Einstellungen</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                      Einige Cookies sind für die Funktion der Website erforderlich, während andere uns helfen, die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Weitere Informationen finden Sie in unserer{' '}
                      <Link href="/datenschutz" className="text-[#C04020] hover:underline">
                        Datenschutzerklärung
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 whitespace-nowrap cursor-pointer font-medium text-sm"
                >
                  Einstellungen
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 whitespace-nowrap cursor-pointer font-medium text-sm"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="px-8 py-3 bg-gradient-to-r from-[#C04020] to-[#A03318] text-white rounded-full hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold shadow-lg hover:shadow-xl text-sm"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mr-3">
                    <i className="ri-settings-line text-white text-lg"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Cookie-Einstellungen anpassen</h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-gray-500 text-lg"></i>
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-[#1A1A1A]">Notwendige Cookies</h4>
                    </div>
                    <div className="w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <i className="ri-bar-chart-line text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-[#1A1A1A]">Analyse-Cookies</h4>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${
                        preferences.analytics ? 'bg-[#C04020]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics).
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-purple-5 0 rounded-lg flex items-center justify-center mr-3">
                        <i className="ri-advertisement-line text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-[#1A1A1A]">Marketing-Cookies</h4>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${
                        preferences.marketing ? 'bg-[#C04020]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen (Google Ads).
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                        <i className="ri-function-line text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-[#1A1A1A]">Funktionale Cookies</h4>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('functional')}
                      className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${
                        preferences.functional ? 'bg-[#C04020]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                        preferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 whitespace-nowrap cursor-pointer font-medium"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={savePreferences}
                  className="px-8 py-3 bg-gradient-to-r from-[#C04020] to-[#A03318] text-white rounded-full hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold shadow-lg hover:shadow-xl flex-1 sm:flex-none"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="px-8 py-3 bg-gradient-to-r from-[#C04020] to-[#A03318] text-white rounded-full hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold shadow-lg hover:shadow-xl flex-1 sm:flex-none"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
