
'use client';

import { useState } from 'react';

export default function GetStartedHero({ scrollY }: { scrollY: number }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const response = await fetch('https://readdy.ai/api/form/d1urkvufl5e5sapljjv0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
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
    <section className="pt-32 pb-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-top"
        style={{
          backgroundImage: `url('/images/contact-hero-bg.jpg')`
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-blue-900/80" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Kontakt<span className="block text-blue-400">aufnehmen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam Ihr Bauprojekt verwirklichen. Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
          </p>

          <div className="max-w-md mx-auto">
            <form 
              id="hero-contact-form" 
              onSubmit={handleSubmit} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              data-readdy-form
            >
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Ihre E-Mail"
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm resize-none"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <div className="text-white/60 text-xs mt-1 text-right">
                    {formData.message.length}/500
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Jetzt Kontakt aufnehmen'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-400/30 rounded-lg text-green-200 text-sm">
                  Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-400/30 rounded-lg text-red-200 text-sm">
                  {formData.message.length > 500 
                    ? 'Die Nachricht überschreitet das Limit von 500 Zeichen. Bitte kürzen Sie Ihre Nachricht.'
                    : 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
                  }
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
