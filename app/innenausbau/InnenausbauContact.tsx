'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  roomType: string;
  area: string;
  budget: string;
  timeline: string;
  services: string[];
  description: string;
  address: string;
}

export default function InnenausbauContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    roomType: '',
    area: '',
    budget: '',
    timeline: '',
    services: [],
    description: '',
    address: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const projectTypes = [
    'Neubau Innenausbau',
    'Renovierung/Modernisierung',
    'Teilsanierung',
    'Komplettumbau'
  ];

  const roomTypes = [
    'Wohnzimmer',
    'Schlafzimmer',
    'Küche',
    'Badezimmer',
    'Büro/Arbeitszimmer',
    'Gesamte Wohnung/Haus'
  ];

  const serviceOptions = [
    'Trockenbau',
    'Bodenbeläge',
    'Malerarbeiten',
    'Elektroinstallation',
    'Sanitärinstallation',
    'Smart Home Integration'
  ];

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('projectType', formData.projectType);
      formDataToSubmit.append('roomType', formData.roomType);
      formDataToSubmit.append('area', formData.area);
      formDataToSubmit.append('budget', formData.budget);
      formDataToSubmit.append('timeline', formData.timeline);
      formDataToSubmit.append('services', formData.services.join(', '));
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('address', formData.address);

      const response = await fetch('https://readdy.ai/api/form/d3n38g1vbfpiajvfcgv0', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          roomType: '',
          area: '',
          budget: '',
          timeline: '',
          services: [],
          description: '',
          address: ''
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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kostenlose <span className="text-[#C04020]">Innenausbau-Beratung</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Lassen Sie uns Ihr Innenausbau-Projekt besprechen. Wir erstellen Ihnen ein unverbindliches Angebot.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
          <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                  placeholder="089 / 123 456 78"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Projektart *
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Bitte wählen</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Raumtyp *
                </label>
                <select
                  name="roomType"
                  required
                  value={formData.roomType}
                  onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Bitte wählen</option>
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Fläche (m²)
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                  placeholder="z.B. 85 m²"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Budget (optional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Bitte wählen</option>
                  <option value="bis-10000">Bis 10.000 €</option>
                  <option value="10000-25000">10.000 - 25.000 €</option>
                  <option value="25000-50000">25.000 - 50.000 €</option>
                  <option value="50000-100000">50.000 - 100.000 €</option>
                  <option value="ueber-100000">Über 100.000 €</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Zeitrahmen
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Bitte wählen</option>
                  <option value="sofort">Sofort</option>
                  <option value="1-3-monate">1-3 Monate</option>
                  <option value="3-6-monate">3-6 Monate</option>
                  <option value="spaeter">Später im Jahr</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Gewünschte Leistungen (Mehrfachauswahl möglich)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4 text-[#C04020] border-gray-300 rounded focus:ring-[#C04020]"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Projektadresse
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm"
                placeholder="Straße, PLZ, Ort"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Projektbeschreibung
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value.slice(0, 500)})}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C04020] focus:border-transparent text-sm resize-none"
                placeholder="Beschreiben Sie Ihr Innenausbau-Projekt und Ihre Wünsche..."
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.description.length}/500 Zeichen
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <i className="ri-check-circle-line text-green-600"></i>
                  <span className="text-green-800 font-medium">
                    Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <i className="ri-error-warning-line text-red-600"></i>
                  <span className="text-red-800 font-medium">
                    Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.
                  </span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-[#C04020] to-[#A03318] text-white py-4 rounded-lg hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Beratung anfragen'}
              </button>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <i className="ri-phone-line"></i>
                <span className="text-sm">Oder rufen Sie an: 089 / 123 456 78</span>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zu. 
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}