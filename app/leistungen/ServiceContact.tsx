
'use client';

import { useState } from 'react';

export default function ServiceContact() {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const services = [
    'Innenausbau',
    'Sanierung & Renovierung', 
    'Planung',
    'Parkettverlegung',
    'Fliesenarbeiten',
    'Stuckarbeiten',
    'WDVS / Dämmung',
    'Putzarbeiten',
    'Fenster, Türen & Tore',
    'Malerarbeiten',
    'Trockenbau',
    'Spachteltechniken',
    'Badsanierung'
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
      const response = await fetch('https://readdy.ai/api/form/service-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Kostenlose Beratung anfragen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen zu unseren Leistungen? Kontaktieren Sie uns für eine unverbindliche Beratung.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          {submitStatus === 'success' ? (
            <>
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line text-2xl text-emerald-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Vielen Dank!</h3>
                <p className="text-gray-600">Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </div>
              <div className="text-center">
                <a 
                  href="/kontakt" 
                  className="inline-block bg-[#C04020] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Jetzt Beratungstermin vereinbaren
                </a>
              </div>
            </>
          ) : (
            <form 
              id="service-inquiry-form" 
              onSubmit={handleSubmit} 
              className="space-y-6"
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
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-7
   00 mb-2">
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
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gewünschte Leistung
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm appearance-none"
                    >
                      <option value="">Leistung auswählen</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
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
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] text-sm resize-vertical"
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                />
                <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 Zeichen</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-[#C04020] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>
            </form>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {formData.message.length > 500 
                ? 'Die Nachricht überschreitet das Limit von 500 Zeichen. Bitte kürzen Sie Ihre Nachricht.'
                : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
              }
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
