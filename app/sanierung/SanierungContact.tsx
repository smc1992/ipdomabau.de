
'use client';

import { useState } from 'react';

export default function SanierungContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property_type: '',
    building_year: '',
    area: '',
    sanierung_type: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const propertyTypes = [
    'Einfamilienhaus',
    'Mehrfamilienhaus',
    'Eigentumswohnung',
    'Gewerbeimmobilie',
    'Denkmalgeschütztes Gebäude'
  ];

  const sanierungTypes = [
    'Komplettsanierung',
    'Energetische Sanierung',
    'Denkmalschutz-Sanierung',
    'Schadstoffsanierung',
    'Barrierefreier Umbau',
    'Teilsanierung'
  ];

  const budgetRanges = [
    'Bis 50.000€',
    '50.000€ - 100.000€',
    '100.000€ - 200.000€',
    '200.000€ - 500.000€',
    'Über 500.000€'
  ];

  const timelines = [
    'Sofort',
    'In 3 Monaten',
    'In 6 Monaten',
    'In 12 Monaten',
    'Noch unbestimmt'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://readdy.ai/api/form/sanierung-beratung', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', property_type: '', building_year: '',
          area: '', sanierung_type: '', budget: '', timeline: '', message: ''
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Kostenlose Sanierungsberatung
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Sanierungsprojekt planen. 
            Füllen Sie das Formular aus und erhalten Sie eine unverbindliche Erstberatung.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-check-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">Vielen Dank!</h3>
              <p className="text-gray-600 text-lg">
                Wir haben Ihre Sanierungsanfrage erhalten und melden uns innerhalb von 24 Stunden 
                bei Ihnen für eine kostenlose Erstberatung.
              </p>
            </div>
          ) : (
            <form 
              id="sanierung-beratung-form" 
              onSubmit={handleSubmit} 
              className="space-y-8"
              data-readdy-form
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm"
                    placeholder="089 123 456 789"
                  />
                </div>
                <div>
                  <label htmlFor="property_type" className="block text-sm font-semibold text-gray-700 mb-2">
                    Immobilientyp
                  </label>
                  <div className="relative">
                    <select
                      id="property_type"
                      name="property_type"
                      value={formData.property_type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm appearance-none"
                    >
                      <option value="">Immobilientyp auswählen</option>
                      {propertyTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="building_year" className="block text-sm font-semibold text-gray-700 mb-2">
                    Baujahr
                  </label>
                  <input
                    type="text"
                    id="building_year"
                    name="building_year"
                    value={formData.building_year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm"
                    placeholder="z.B. 1970"
                  />
                </div>
                <div>
                  <label htmlFor="area" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wohnfläche
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm"
                    placeholder="z.B. 120 m²"
                  />
                </div>
                <div>
                  <label htmlFor="sanierung_type" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sanierungsart
                  </label>
                  <div className="relative">
                    <select
                      id="sanierung_type"
                      name="sanierung_type"
                      value={formData.sanierung_type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm appearance-none"
                    >
                      <option value="">Sanierungsart auswählen</option>
                      {sanierungTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm appearance-none"
                    >
                      <option value="">Budget auswählen</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Zeitplan
                  </label>
                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm appearance-none"
                    >
                      <option value="">Zeitplan auswählen</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Projektbeschreibung
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm resize-vertical"
                  placeholder="Beschreiben Sie Ihr Sanierungsprojekt, besondere Wünsche oder Herausforderungen..."
                />
                <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 Zeichen</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-[#C04020] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Beratung anfragen'}
              </button>
            </form>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {formData.message.length > 500 
                ? 'Die Projektbeschreibung überschreitet das Limit von 500 Zeichen. Bitte kürzen Sie Ihre Beschreibung.'
                : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
              }
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
