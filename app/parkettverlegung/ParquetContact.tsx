
'use client';

import { useState } from 'react';

export default function ParquetContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    roomType: '',
    area: '',
    parquetType: '',
    timeline: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/submit/cm4wnqhqr0001l508ggqhqr', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          roomType: '',
          area: '',
          parquetType: '',
          timeline: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">
              Kostenlose Parkettberatung
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Lassen Sie sich von Ihren Experten beraten und erhalten Sie ein maßgeschneidertes Angebot für Ihr Parkettverlegung-Projekt.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C04020] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-voice-line text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-1 sm:mb-2">
                    Persönliche Beratung
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Vor-Ort-Termin mit detaillierter Bestandsaufnahme und Materialberatung
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C04020] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-calculator-line text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-1 sm:mb-2">
                    Transparente Kalkulation
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Detaillierter Kostenvoranschlag ohne versteckte Kosten
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C04020] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-white text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-1 sm:mb-2">
                    Qualitätsgarantie
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    5 Jahre Garantie auf Verlegung und Materialien
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-[#1A1A1A] mb-3 sm:mb-4 text-sm sm:text-base">Kontaktinformationen</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <i className="ri-phone-line text-[#C04020] text-sm"></i>
                  <span className="text-sm sm:text-base">+49 89 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <i className="ri-mail-line text-[#C04020] text-sm"></i>
                  <span className="text-sm sm:text-base">parkett@domabau-muenchen.de</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <i className="ri-map-pin-line text-[#C04020] text-sm"></i>
                  <span className="text-sm sm:text-base">München & Umgebung</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" data-readdy-form id="parkettverlegung-beratung">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="+49 89 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="Straße, PLZ Ort"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Raumtyp
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="wohnzimmer">Wohnzimmer</option>
                    <option value="schlafzimmer">Schlafzimmer</option>
                    <option value="kueche">Küche</option>
                    <option value="flur">Flur/Diele</option>
                    <option value="buero">Büro</option>
                    <option value="gesamte-wohnung">Gesamte Wohnung</option>
                    <option value="gewerbe">Gewerberäume</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Fläche (m²)
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="z.B. 50 m²"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Parkettart
                  </label>
                  <select
                    name="parquetType"
                    value={formData.parquetType}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="massivparkett">Massivparkett</option>
                    <option value="fertigparkett">Fertigparkett</option>
                    <option value="landhausdielen">Landhausdielen</option>
                    <option value="noch-unentschieden">Noch unentschieden</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Zeitrahmen
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="sofort">Sofort</option>
                    <option value="1-3-monate">1-3 Monate</option>
                    <option value="3-6-monate">3-6 Monate</option>
                    <option value="spaeter">Später</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Budget (optional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Bitte wählen</option>
                  <option value="bis-5000">Bis 5.000 €</option>
                  <option value="5000-10000">5.000 - 10.000 €</option>
                  <option value="10000-20000">10.000 - 20.000 €</option>
                  <option value="ueber-2000">Über 20.000 €</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Nachricht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt und besondere Wünsche..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 Zeichen
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C04020] text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#A03318] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Beratung anfordern'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-green-800">
                  <div className="flex items-center space-x-2">
                    <i className="ri-check-circle-line text-green-600"></i>
                    <span className="font-semibold text-sm sm:text-base">Vielen Dank!</span>
                  </div>
                  <p className="mt-1 text-sm">Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 text-red-800">
                  <div className="flex items-center space-x-2">
                    <i className="ri-error-warning-line text-red-600"></i>
                    <span className="font-semibold text-sm sm:text-base">Fehler beim Senden</span>
                  </div>
                  <p className="mt-1 text-sm">Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
