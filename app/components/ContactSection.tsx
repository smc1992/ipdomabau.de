
'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    anliegen: '',
    message: '',
    datenschutz: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.datenschutz) {
      setSubmitStatus('Bitte akzeptieren Sie die Datenschutzerklärung.');
      return;
    }

    if (formData.message.length > 500) {
      setSubmitStatus('Die Nachricht darf maximal 500 Zeichen enthalten.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS Konfiguration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // E-Mail-Parameter für EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        anliegen: formData.anliegen,
        message: formData.message,
        to_email: 'info@ipdomabau.de',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus(
        'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.'
      );
      setFormData({
        name: '',
        phone: '',
        email: '',
        anliegen: '',
        message: '',
        datenschutz: false,
      });
    } catch (error) {
      console.error('E-Mail Sende-Fehler:', error);
      setSubmitStatus(
        'Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f3f4f6\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4 sm:mb-6 tracking-tight">
            Unverbindliches Angebot
            <span className="block text-[#C04020]">anfordern</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Haben Sie ein Bauprojekt oder eine Renovierung geplant? Kontaktieren
            Sie uns für eine kostenlose Beratung und ein individuelles Angebot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Address card */}
              <div className="group">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#C04020]/20">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-map-pin-line text-white text-xl sm:text-2xl"></i>
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 sm:mb-3 text-base sm:text-lg">Adresse</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    DOMABAU
                    <br />
                    Renatastraße 8
                    <br />
                    80635 München
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="group">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#C04020]/20">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-phone-line text-white text-xl sm:text-2xl"></i>
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 sm:mb-3 text-base sm:text-lg">Telefon</h3>
                  <p className="text-gray-600 text-sm sm:text-base">+49 172 3004911</p>
                </div>
              </div>

              {/* Email card */}
              <div className="group">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#C04020]/20">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-mail-line text-white text-xl sm:text-2xl"></i>
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 sm:mb-3 text-base sm:text-lg">E-Mail</h3>
                  <p className="text-gray-600 text-sm sm:text-base">info@ipdomabau.de</p>
                </div>
              </div>

              {/* Opening hours card */}
              <div className="group">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#C04020]/20">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-time-line text-white text-xl sm:text-2xl"></i>
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 sm:mb-3 text-base sm:text-lg">
                    Öffnungszeiten
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Montag – Freitag
                    <br />
                    8:00 – 17:00 Uhr
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps iframe */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.1234567890!2d11.5234567!3d48.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA3JzI0LjQiTiAxMcKwMzEnMjQuNCJF!5e0!3m2!1sde!2sde!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="sm:h-[400px]"
              ></iframe>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 backdrop-blur-sm">
            <form
              onSubmit={handleSubmit}
              id="kontakt-angebot"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2 sm:mb-3"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] transition-all duration-300 text-sm bg-gray-50 focus:bg-white"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2 sm:mb-3"
                  >
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] transition-all duration-300 text-sm bg-gray-50 focus:bg-white"
                    placeholder="+49 xxx xxxxxxx"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#1A1A1A] mb-2 sm:mb-3"
                >
                  E‑Mail‑Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] transition-all duration-300 text-sm bg-gray-50 focus:bg-white"
                  placeholder="ihre@email.de"
                />
              </div>

              {/* Anliegen selection */}
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="anliegen"
                  className="block text-sm font-semibold text-[#1A1A1A] mb-2 sm:mb-3"
                >
                  Ihr Anliegen *
                </label>
                <div className="relative">
                  <select
                    id="anliegen"
                    name="anliegen"
                    value={formData.anliegen}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] transition-all duration-300 text-sm bg-gray-50 focus:bg-white appearance-none pr-12"
                  >
                    <option value="">Bitte wählen Sie...</option>
                    <option value="Badsanierung">Badsanierung</option>
                    <option value="Innenausbau">Innenausbau</option>
                    <option value="Renovierung">Renovierung</option>
                    <option value="Neubau">Neubau</option>
                    <option value="Parkettverlegung">Parkettverlegung</option>
                    <option value="Fliesenarbeiten">Fliesenarbeiten</option>
                    <option value="Malerarbeiten">Malerarbeiten</option>
                    <option value="Trockenbau">Trockenbau</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400 text-xl"></i>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#1A1A1A] mb-2 sm:mb-3"
                >
                  Ihre Nachricht (max. 500 Zeichen)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C04020] focus:border-[#C04020] transition-all duration-300 text-sm resize-vertical bg-gray-50 focus:bg-white"
                  placeholder="Beschreiben Sie kurz Ihr Projekt..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-2 font-medium">
                  {formData.message.length}/500 Zeichen
                </div>
              </div>

              {/* Datenschutz checkbox */}
              <div className="mb-6 sm:mb-8">
                <label className="flex items-start cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="datenschutz"
                      checked={formData.datenschutz}
                      onChange={handleInputChange}
                      required
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-all duration-300 ${
                        formData.datenschutz
                          ? 'bg-[#C04020] border-[#C04020]'
                          : 'border-gray-300 group-hover:border-[#C04020]'
                      }`}
                    >
                      {formData.datenschutz && (
                        <i className="ri-check-line text-white text-sm"></i>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 ml-3 leading-relaxed">
                    Ich habe die{' '}
                    <a
                      href="/datenschutz"
                      className="text-[#C04020] hover:underline cursor-pointer font-medium"
                    >
                      Datenschutzerklärung
                    </a>{' '}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </span>
                </label>
              </div>

              {/* Submit status message */}
              {submitStatus && (
                <div
                  className={`mb-4 sm:mb-6 p-4 rounded-xl text-sm font-medium ${
                    submitStatus.includes('erfolgreich')
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#C04020] to-[#A03318] text-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Wird gesendet...
                  </span>
                ) : (
                  'Unverbindliches Angebot anfordern'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
