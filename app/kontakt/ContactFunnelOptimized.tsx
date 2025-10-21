
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  service: string;
  budget: string;
  timeline: string;
  projectType: string;
  propertyType: string;
  roomCount: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

export default function ContactFunnelOptimized() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    service: '',
    budget: '',
    timeline: '',
    projectType: '',
    propertyType: '',
    roomCount: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  });

  const services = [
    { id: 'malerarbeiten', name: 'Malerarbeiten', icon: 'ri-brush-line', description: 'Professionelle Malerarbeiten für Innen und Außen' },
    { id: 'trockenbau', name: 'Trockenbau', icon: 'ri-building-line', description: 'Moderne Trockenbaulösungen für jeden Bedarf' },
    { id: 'innenausbau', name: 'Innenausbau', icon: 'ri-home-gear-line', description: 'Kompletter Innenausbau nach Ihren Wünschen' },
    { id: 'sanierung', name: 'Sanierung', icon: 'ri-hammer-line', description: 'Fachgerechte Sanierung und Modernisierung' },
    { id: 'parkettverlegung', name: 'Parkettverlegung', icon: 'ri-layout-grid-line', description: 'Hochwertige Parkettverlegung vom Profi' },
    { id: 'beratung', name: 'Beratung', icon: 'ri-customer-service-line', description: 'Kostenlose Beratung für Ihr Projekt' }
  ];

  const budgetRanges = [
    { id: 'bis-5000', name: 'Bis 5.000 €', icon: 'ri-money-euro-circle-line' },
    { id: '5000-15000', name: '5.000 - 15.000 €', icon: 'ri-money-euro-circle-line' },
    { id: '15000-30000', name: '15.000 - 30.000 €', icon: 'ri-money-euro-circle-line' },
    { id: '30000-50000', name: '30.000 - 50.000 €', icon: 'ri-money-euro-circle-line' },
    { id: 'ueber-50000', name: 'Über 50.000 €', icon: 'ri-money-euro-circle-line' },
    { id: 'noch-offen', name: 'Noch offen', icon: 'ri-question-line' }
  ];

  const timelines = [
    { id: 'sofort', name: 'Sofort', icon: 'ri-flashlight-line' },
    { id: '1-monat', name: 'In 1 Monat', icon: 'ri-calendar-line' },
    { id: '3-monate', name: 'In 3 Monaten', icon: 'ri-calendar-2-line' },
    { id: '6-monate', name: 'In 6 Monaten', icon: 'ri-calendar-event-line' },
    { id: 'flexibel', name: 'Flexibel', icon: 'ri-time-line' }
  ];

  const projectTypes = [
    { id: 'neubau', name: 'Neubau', icon: 'ri-building-2-line' },
    { id: 'renovierung', name: 'Renovierung', icon: 'ri-tools-line' },
    { id: 'sanierung', name: 'Sanierung', icon: 'ri-hammer-line' },
    { id: 'modernisierung', name: 'Modernisierung', icon: 'ri-refresh-line' }
  ];

  const propertyTypes = [
    { id: 'wohnung', name: 'Wohnung', icon: 'ri-home-4-line' },
    { id: 'haus', name: 'Haus', icon: 'ri-home-line' },
    { id: 'gewerbe', name: 'Gewerbe', icon: 'ri-building-line' },
    { id: 'buero', name: 'Büro', icon: 'ri-briefcase-line' }
  ];

  const roomCounts = [
    { id: '1-2', name: '1-2 Räume', icon: 'ri-door-line' },
    { id: '3-4', name: '3-4 Räume', icon: 'ri-door-open-line' },
    { id: '5-6', name: '5-6 Räume', icon: 'ri-home-2-line' },
    { id: 'mehr-6', name: 'Mehr als 6', icon: 'ri-home-3-line' }
  ];

  const handleServiceSelect = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
      setFormData(prev => ({ ...prev, service: '' }));
    } else {
      setSelectedServices([serviceId]);
      setFormData(prev => ({ ...prev, service: serviceId }));
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceedStep1 = formData.service;
  const canProceedStep2 = formData.budget;
  const canProceedStep3 = formData.timeline;
  const canProceedStep4 = formData.projectType;
  const canProceedStep5 = formData.propertyType;
  const canProceedStep6 = formData.roomCount;
  const canProceedStep7 = formData.name && formData.email && formData.phone;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/submit/domabau-kontakt-funnel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          projectType: formData.projectType,
          propertyType: formData.propertyType,
          roomCount: formData.roomCount,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          description: formData.description
        }).toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Fehler beim Senden:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="ri-check-line text-white text-4xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Vielen Dank!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wie geht es weiter?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#C04020] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Persönliche Beratung</h4>
                    <p className="text-gray-600">Unser Experte ruft Sie für ein unverbindliches Gespräch an</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#C04020] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Vor-Ort-Termin</h4>
                    <p className="text-gray-600">Kostenlose Besichtigung und detaillierte Projektbesprechung</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#C04020] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kostenvoranschlag</h4>
                    <p className="text-gray-600">Detailliertes Angebot mit transparenten Preisen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#C04020] to-[#A03318] text-white rounded-xl hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 font-semibold cursor-pointer"
              >
                <i className="ri-home-line mr-2"></i>
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center text-gray-600 hover:text-[#C04020] transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line mr-2 text-xl"></i>
            <span className="font-medium">Zurück zur Startseite</span>
          </Link>
          <Link href="/" className="text-2xl font-bold text-[#1A1A1A] tracking-wide hover:text-[#C04020] transition-colors">
            DOMABAU
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Schritt {currentStep} von 7</span>
            <span className="text-sm font-medium text-[#C04020]">{Math.round((currentStep / 7) * 100)}% abgeschlossen</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-[#C04020] to-[#A03318] h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div className="space-y-8 sm:space-y-12">
            {/* Benefits Section - Improved */}
            <div className="bg-gradient-to-br from-[#C04020] via-[#B8391C] to-[#A03318] text-white p-6 sm:p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Ihre Vorteile bei DOMABAU</h3>
                  <p className="text-white/90 text-sm sm:text-base">Professionell • Zuverlässig • Transparent</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <i className="ri-time-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">24h</div>
                      <div className="text-sm sm:text-base font-medium text-white/90">Schnelle Rückmeldung</div>
                      <div className="text-xs sm:text-sm text-white/70 mt-1">Garantierte Antwort</div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <i className="ri-shield-check-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</div>
                      <div className="text-sm sm:text-base font-medium text-white/90">Kostenlose Beratung</div>
                      <div className="text-xs sm:text-sm text-white/70 mt-1">Unverbindlich & ehrlich</div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <i className="ri-money-euro-circle-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">0€</div>
                      <div className="text-sm sm:text-base font-medium text-white/90">Erstberatung</div>
                      <div className="text-xs sm:text-sm text-white/70 mt-1">Faire Preisgestaltung</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <i className="ri-star-fill text-yellow-300 text-sm"></i>
                    <span className="text-sm font-medium">Über 500 zufriedene Kunden in München</span>
                    <i className="ri-star-fill text-yellow-300 text-sm"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Service selection question */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-6 sm:mb-8">
                Welche Leistung benötigen Sie?
              </h3>
            </div>

            {/* Service selection cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`p-4 sm:p-6 border-2 rounded-xl transition-all duration-300 text-left hover:shadow-lg cursor-pointer ${
                    selectedServices.includes(service.id)
                      ? 'border-[#C04020] bg-[#C04020]/5 shadow-md'
                      : 'border-gray-200 hover:border-[#C04020]/50'
                  }`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center ${
                      selectedServices.includes(service.id)
                        ? 'bg-[#C04020] text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <i className={`${service.icon} text-lg sm:text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1A1A1A] text-sm sm:text-base">
                        {service.id === 'parkettverlegung' ? (
                          <>
                            Parkett<span className="block sm:inline">verlegung</span>
                          </>
                        ) : (
                          service.name
                        )}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        {service.description}
                      </p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedServices.includes(service.id)
                        ? 'border-[#C04020] bg-[#C04020]'
                        : 'border-gray-300'
                    }`}>
                      {selectedServices.includes(service.id) && (
                        <i className="ri-check-line text-white text-xs"></i>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Continue button */}
            <div className="text-center pt-4 sm:pt-8">
              <button
                onClick={() => setCurrentStep(2)}
                disabled={selectedServices.length === 0}
                className="bg-[#C04020] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover:bg-[#A03318] transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter zum nächsten Schritt
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Budget */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Welches Budget haben Sie eingeplant?</h2>
              <p className="text-xl text-gray-600">Wählen Sie Ihren Budgetrahmen aus</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {budgetRanges.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => handleInputChange('budget', budget.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    formData.budget === budget.id
                      ? 'border-[#C04020] bg-[#C04020] text-white shadow-lg'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-[#C04020] hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <i className={`${budget.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-semibold text-lg">{budget.name}</h3>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-[#C04020] hover:text-[#C04020] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i> Zurück
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                disabled={!canProceedStep2}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  canProceedStep2
                    ? 'bg-gradient-to-r from-[#C04020] to-[#A03318] text-white hover:from-[#A03318] hover:to-[#8B2A14] shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Weiter <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Timeline */}
        {currentStep === 3 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Wann soll das Projekt starten?</h2>
              <p className="text-xl text-gray-600">Wählen Sie Ihren gewünschten Zeitrahmen</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {timelines.map((timeline) => (
                <button
                  key={timeline.id}
                  onClick={() => handleInputChange('timeline', timeline.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    formData.timeline === timeline.id
                      ? 'border-[#C04020] bg-[#C04020] text-white shadow-lg'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-[#C04020] hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <i className={`${timeline.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-semibold text-lg">{timeline.name}</h3>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-[#C04020] hover:text-[#C04020] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i> Zurück
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                disabled={!canProceedStep3}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  canProceedStep3
                    ? 'bg-gradient-to-r from-[#C04020] to-[#A03318] text-white hover:from-[#A03318] hover:to-[#8B2A14] shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Weiter <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Project Type */}
        {currentStep === 4 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Um welche Art von Projekt handelt es sich?</h2>
              <p className="text-xl text-gray-600">Beschreiben Sie Ihr Vorhaben</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleInputChange('projectType', type.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    formData.projectType === type.id
                      ? 'border-[#C04020] bg-[#C04020] text-white shadow-lg'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-[#C04020] hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <i className={`${type.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-semibold text-lg">{type.name}</h3>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-[#C04020] hover:text-[#C04020] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i> Zurück
              </button>
              <button
                onClick={() => setCurrentStep(5)}
                disabled={!canProceedStep4}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  canProceedStep4
                    ? 'bg-gradient-to-r from-[#C04020] to-[#A03318] text-white hover:from-[#A03318] hover:to-[#8B2A14] shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Weiter <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Property Type */}
        {currentStep === 5 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Was für eine Immobilie ist es?</h2>
              <p className="text-xl text-gray-600">Wählen Sie den Immobilientyp aus</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {propertyTypes.map((property) => (
                <button
                  key={property.id}
                  onClick={() => handleInputChange('propertyType', property.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    formData.propertyType === property.id
                      ? 'border-[#C04020] bg-[#C04020] text-white shadow-lg'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-[#C04020] hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <i className={`${property.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-semibold text-lg">{property.name}</h3>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(4)}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-[#C04020] hover:text-[#C04020] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i> Zurück
              </button>
              <button
                onClick={() => setCurrentStep(6)}
                disabled={!canProceedStep5}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  canProceedStep5
                    ? 'bg-gradient-to-r from-[#C04020] to-[#A03318] text-white hover:from-[#A03318] hover:to-[#8B2A14] shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Weiter <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Room Count */}
        {currentStep === 6 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Wie viele Räume sind betroffen?</h2>
              <p className="text-xl text-gray-600">Geben Sie die Anzahl der Räume an</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {roomCounts.map((room) => (
                <button
                  key={room.id}
                  onClick={() => handleInputChange('roomCount', room.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    formData.roomCount === room.id
                      ? 'border-[#C04020] bg-[#C04020] text-white shadow-lg'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-[#C04020] hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <i className={`${room.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-semibold text-lg">{room.name}</h3>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(5)}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-[#C04020] hover:shadow-300 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2"></i> Zurück
              </button>
              <button
                onClick={() => setCurrentStep(7)}
                disabled={!canProceedStep6}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  canProceedStep6
                    ? 'bg-gradient-to-r from-[#C04020] to-[#A03318] text-white hover:from-[#A03318] hover:to-[#8B2A14] shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-5 0 cursor-not-allowed'
                }`}
              >
                Weiter <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 7: Personal Information */}
        {currentStep === 7 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ihre Kontaktdaten</h2>
              <p className="text-xl text-gray-600">Damit wir Ihnen ein individuelles Angebot erstellen können</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-transparent transition-all duration-300 text-sm"
                    placeholder="Straße, PLZ Ort"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Projektbeschreibung (optional)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-transparent transition-all duration-300 resize-none text-sm"
                  placeholder="Beschreiben Sie Ihr Projekt genauer..."
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.description.length}/500 Zeichen
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Zusammenfassung Ihrer Anfrage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Service:</span>
                    <span className="text-gray-900">{services.find(s => s.id === formData.service)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Budget:</span>
                    <span className="text-gray-900">{budgetRanges.find(b => b.id === formData.budget)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Zeitrahmen:</span>
                    <span className="text-gray-900">{timelines.find(t => t.id === formData.timeline)?.name}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Projekttyp:</span>
                    <span className="text-gray-900">{projectTypes.find(p => p.id === formData.projectType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Immobilie:</span>
                    <span className="text-gray-900">{propertyTypes.find(p => p.id === formData.propertyType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Räume:</span>
                    <span className="text-gray-900">{roomCounts.find(r => r.id === formData.roomCount)?.name}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <button
                onClick={() => setCurrentStep(6)}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-gray-300 text-gray-700 hover:border-[#C04020] hover:text-[#C04020] transition-all duration-300 whitespace-nowrap cursor-pointer order-2 sm:order-1"
              >
                <i className="ri-arrow-left-line mr-2"></i> Zurück
              </button>
              <button
                onClick={handleSubmit}
                disabled={!canProceedStep7 || isSubmitting}
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 whitespace-nowrap cursor-pointer order-1 sm:order-2 ${
                  canProceedStep7 && !isSubmitting
                    ? 'bg-gradient-to-r from-[#C04020] to-[#A03318] text-white hover:from-[#A03318] hover:to-[#8B2A14] shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    <span className="hidden sm:inline">Wird gesendet...</span>
                    <span className="sm:hidden">Senden...</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Anfrage senden</span>
                    <span className="sm:hidden">Senden</span>
                    <i className="ri-send-plane-line ml-2"></i>
                  </>
                )}
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
