
'use client';

import { useState } from 'react';

export default function TrockenbauContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    roomCount: '',
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

      const response = await fetch('https://readdy.ai/api/form/submit/trockenbau-beratung', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          roomCount: '',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Kostenlose Trockenbau-Beratung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lassen Sie sich unverbindlich beraten und erhalten Sie ein individuelles Angebot für Ihr Trockenbau-Projekt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Projekt-Anfrage</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="trockenbau-beratung">
              <div className="grid md:grid-cols-2 gap-6">
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
                  placeholder="Ihre Telefonnummer"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Projektart *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="raumaufteilung">Raumaufteilung</option>
                    <option value="schallschutz">Schallschutzwände</option>
                    <option value="deckenverkleidung">Deckenverkleidung</option>
                    <option value="komplettsanierung">Komplettsanierung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="roomCount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Anzahl Räume
                  </label>
                  <select
                    id="roomCount"
                    name="roomCount"
                    value={formData.roomCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="1-2">1-2 Räume</option>
                    <option value="3-5">3-5 Räume</option>
                    <option value="6-10">6-10 Räume</option>
                    <option value="mehr-als-10">Mehr als 10 Räume</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                    Fläche (m²)
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                    placeholder="z.B. 120 m²"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gewünschter Zeitrahmen
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
                    <option value="3-monate">Innerhalb 3 Monate</option>
                    <option value="flexibel">Zeitlich flexibel</option>
                  </select>
                </div>
              </div>

              <div>
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
                  <option value="bis-5000">Bis 5.000 €</option>
                  <option value="5000-15000">5.000 - 15.000 €</option>
                  <option value="15000-30000">15.000 - 30.000 €</option>
                  <option value="ueber-30000">Über 30.000 €</option>
                </select>
              </div>

              <div>
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
                  placeholder="Beschreiben Sie Ihr Trockenbau-Projekt..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.description.length}/500 Zeichen
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C04020] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#A03318] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Beratung anfragen'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                  Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Warum DOMABAU?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Kostenlose Beratung:</strong>
                    <p className="text-gray-600">Unverbindlicher Vor-Ort-Termin mit detaillierter Projektanalyse</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Schnelle Umsetzung:</strong>
                    <p className="text-gray-600">Die meisten Projekte innerhalb von 1-2 Wochen realisiert</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Festpreisgarantie:</strong>
                    <p className="text-gray-600">Transparente Kostenvoranschläge ohne versteckte Kosten</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-[#C04020] text-xl mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">2 Jahre Gewährleistung:</strong>
                    <p className="text-gray-600">Vollumfängliche Garantie auf alle Arbeiten</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#C04020] to-[#A03318] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Direkter Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-phone-line text-xl mr-3"></i>
                  <span>+49 89 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-xl mr-3"></i>
                  <span>info@domabau-muenchen.de</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-xl mr-3 mt-1"></i>
                  <div>
                    <div>Musterstraße 123</div>
                    <div>80331 München</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm opacity-90">
                  Montag - Freitag: 7:00 - 18:00 Uhr<br />
                  Samstag: 8:00 - 16:00 Uhr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}