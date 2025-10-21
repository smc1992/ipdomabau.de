
'use client';

import { useState } from 'react';

export default function MalerContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    rooms: '',
    area: '',
    timeline: '',
    budget: '',
    description: ''
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

      const response = await fetch('https://readdy.ai/api/form/submit/malerarbeiten-beratung-muenchen', {
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
          projectType: '',
          rooms: '',
          area: '',
          timeline: '',
          budget: '',
          description: ''
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
    <section id="kontakt" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Kostenvoranschlag anfordern
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung zu Ihrem Malerprojekt in München und Umgebung
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Telefon</h4>
                    <p className="text-gray-600">+49 89 123 456 789</p>
                    <p className="text-sm text-gray-500">Mo-Fr: 7:00-18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">E-Mail</h4>
                    <p className="text-gray-600">info@maler-muenchen.de</p>
                    <p className="text-sm text-gray-500">Antwort innerhalb 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Einsatzgebiet</h4>
                    <p className="text-gray-600">München und Umgebung</p>
                    <p className="text-sm text-gray-500">Kostenlose Anfahrt im Stadtgebiet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Schnelle Terminvereinbarung</h3>
              <p className="mb-6 text-sm sm:text-base">
                Rufen Sie uns an für einen sofortigen Beratungstermin in München. Wir sind flexibel und kommen zu Ihnen.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <i className="ri-time-line text-white"></i>
                </div>
                <span className="font-semibold text-sm sm:text-base">Termine auch am Wochenende möglich</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit} data-readdy-form id="malerarbeiten-beratung">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="+49 89 123 456 789"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse in München
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="Straße, PLZ München"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Art der Malerarbeiten
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="innenmalerei">Innenmalerei</option>
                    <option value="aussenmalerei">Außenmalerei / Fassade</option>
                    <option value="renovierung">Renovierung komplett</option>
                    <option value="spezialarbeiten">Spezialarbeiten</option>
                    <option value="gewerbe">Gewerbliche Malerarbeiten</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="rooms" className="block text-sm font-semibold text-gray-700 mb-2">
                    Anzahl Räume
                  </label>
                  <select
                    id="rooms"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="1-2">1-2 Räume</option>
                    <option value="3-4">3-4 Räume</option>
                    <option value="5-6">5-6 Räume</option>
                    <option value="mehr">Mehr als 6 Räume</option>
                    <option value="komplett">Komplette Wohnung/Haus</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                    Fläche (ca.)
                  </label>
                  <select
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="bis-50">Bis 50 m²</option>
                    <option value="50-100">50-100 m²</option>
                    <option value="100-150">100-150 m²</option>
                    <option value="150-200">150-200 m²</option>
                    <option value="ueber-200">Über 200 m²</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gewünschter Zeitraum
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="sofort">So schnell wie möglich</option>
                    <option value="1-monat">Innerhalb 1 Monat</option>
                    <option value="2-3-monate">In 2-3 Monaten</option>
                    <option value="flexibel">Zeitlich flexibel</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget (optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Bitte wählen</option>
                  <option value="bis-1000">Bis 1.000 €</option>
                  <option value="1000-3000">1.000 - 3.000 €</option>
                  <option value="3000-5000">3.000 - 5.000 €</option>
                  <option value="5000-10000">5.000 - 10.000 €</option>
                  <option value="ueber-10000">Über 10.000 €</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Projektbeschreibung
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm resize-none"
                  placeholder="Beschreiben Sie Ihr Malerprojekt in München (max. 500 Zeichen)"
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.description.length}/500 Zeichen
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#C04020] to-[#A03318] text-white py-4 px-6 font-semibold hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer text-base rounded-lg"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Kostenvoranschlag anfordern'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                  Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
