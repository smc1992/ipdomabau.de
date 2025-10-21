
'use client';

import { useEffect, useState } from 'react';

interface ContactFunnelHeroProps {
  scrollY: number;
}

export default function ContactFunnelHero({ scrollY }: ContactFunnelHeroProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/form/d3pch4gud0rphmrm5i9g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setCurrentStep(4); // Success step
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedStep1 = formData.name && formData.email && formData.service;
  const canProceedStep2 = formData.projectType && formData.message;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step ? 'bg-orange-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Schritt {currentStep} von 3
            </h2>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          {currentStep === 1 && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Erzählen Sie uns von Ihrem Projekt
                </h1>
                <p className="text-gray-600">
                  Lassen Sie uns mit den Grundinformationen beginnen
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-Mail Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefonnummer (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Welche Leistung benötigen Sie? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 pr-8"
                  >
                    <option value="">Bitte wählen Sie eine Leistung</option>
                    <option value="malerarbeiten">Malerarbeiten</option>
                    <option value="trockenbau">Trockenbau</option>
                    <option value="innenausbau">Innenausbau</option>
                    <option value="sanierung">Sanierung</option>
                    <option value="parkettverlegung">Parkettverlegung</option>
                    <option value="beratung">Beratung</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={nextStep}
                  disabled={!canProceedStep1}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Weiter <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Projektdetails
                </h1>
                <p className="text-gray-600">
                  Helfen Sie uns, Ihr Projekt besser zu verstehen
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Art des Projekts *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 pr-8"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="neubau">Neubau</option>
                      <option value="renovierung">Renovierung</option>
                      <option value="sanierung">Sanierung</option>
                      <option value="modernisierung">Modernisierung</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ungefähres Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 pr-8"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="bis-5000">Bis 5.000 €</option>
                      <option value="5000-15000">5.000 - 15.000 €</option>
                      <option value="15000-30000">15.000 - 30.000 €</option>
                      <option value="30000-50000">30.000 - 50.000 €</option>
                      <option value="ueber-50000">Über 50.000 €</option>
                    </select>
                  </div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 pr-8"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="sofort">So schnell wie möglich</option>
                    <option value="1-monat">Innerhalb 1 Monat</option>
                    <option value="3-monate">Innerhalb 3 Monate</option>
                    <option value="6-monate">Innerhalb 6 Monate</option>
                    <option value="flexibel">Zeitlich flexibel</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Beschreiben Sie Ihr Projekt *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Erzählen Sie uns mehr über Ihr Projekt, Ihre Wünsche und Vorstellungen..."
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 Zeichen
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-arrow-left-line mr-2"></i> Zurück
                </button>
                <button
                  onClick={nextStep}
                  disabled={!canProceedStep2}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Weiter <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Zusammenfassung & Absenden
                </h1>
                <p className="text-gray-600">
                  Überprüfen Sie Ihre Angaben und senden Sie Ihre Anfrage ab
                </p>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ihre Projektanfrage:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Name:</span>
                    <span className="ml-2 text-gray-600">{formData.name}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">E-Mail:</span>
                    <span className="ml-2 text-gray-600">{formData.email}</span>
                  </div>
                  {formData.phone && (
                    <div>
                      <span className="font-medium text-gray-700">Telefon:</span>
                      <span className="ml-2 text-gray-600">{formData.phone}</span>
                    </div>
                  )}
                  <div>
                    <span className="font-medium text-gray-700">Leistung:</span>
                    <span className="ml-2 text-gray-600">{formData.service}</span>
                  </div>
                  {formData.projectType && (
                    <div>
                      <span className="font-medium text-gray-700">Projekttyp:</span>
                      <span className="ml-2 text-gray-600">{formData.projectType}</span>
                    </div>
                  )}
                  {formData.budget && (
                    <div>
                      <span className="font-medium text-gray-700">Budget:</span>
                      <span className="ml-2 text-gray-600">{formData.budget}</span>
                    </div>
                  )}
                  {formData.timeline && (
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-700">Zeitrahmen:</span>
                      <span className="ml-2 text-gray-600">{formData.timeline}</span>
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <span className="font-medium text-gray-700">Beschreibung:</span>
                    <p className="mt-1 text-gray-600">{formData.message}</p>
                  </div>
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-500 text-xl mr-3"></i>
                    <p className="text-red-700 font-medium">
                      Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} data-readdy-form id="kontakt-anfrage">
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 whitespace-nowrap"
                  >
                    <i className="ri-arrow-left-line mr-2"></i> Zurück
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        Wird gesendet...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <i className="ri-send-plane-line mr-2"></i>
                        Anfrage absenden
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {currentStep === 4 && submitStatus === 'success' && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-check-line text-green-600 text-3xl"></i>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vielen Dank!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Was passiert als nächstes?</h3>
                <div className="text-left space-y-3">
                  <div className="flex items-center">
                    <i className="ri-check-line text-orange-600 mr-3"></i>
                    <span className="text-orange-800">Wir prüfen Ihre Anfrage und bereiten ein Angebot vor</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-phone-line text-orange-600 mr-3"></i>
                    <span className="text-orange-800">Ein Experte ruft Sie für ein persönliches Gespräch an</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-calendar-line text-orange-600 mr-3"></i>
                    <span className="text-orange-800">Wir vereinbaren einen Termin für die Besichtigung</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
