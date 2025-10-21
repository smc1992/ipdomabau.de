
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);

  const services = [
    {
      title: 'Malerarbeiten',
      href: '/malerarbeiten',
      description: 'Professionelle Innen- und Außenmalerei',
      icon: 'ri-brush-line'
    },
    {
      title: 'Trockenbau',
      href: '/trockenbau',
      description: 'Moderne Trockenbaulösungen',
      icon: 'ri-building-line'
    },
    {
      title: 'Innenausbau',
      href: '/innenausbau',
      description: 'Kompletter Innenausbau nach Maß',
      icon: 'ri-home-gear-line'
    },
    {
      title: 'Sanierung',
      href: '/sanierung',
      description: 'Umfassende Sanierungsarbeiten',
      icon: 'ri-hammer-line'
    },
    {
      title: 'Parkettverlegung',
      href: '/parkettverlegung',
      description: 'Hochwertige Parkettböden',
      icon: 'ri-layout-grid-line'
    },
    {
      title: 'Spachtelarbeiten',
      href: '/spachtelarbeiten',
      description: 'Exklusive Spachteltechniken Q1-Q4',
      icon: 'ri-palette-line'
    },
    {
      title: 'Badsanierung',
      href: '/badsanierung',
      description: 'Komplette Badmodernisierung',
      icon: 'ri-drop-line'
    }
  ];

  const quickLinks = [
    { title: 'Kostenvoranschlag', href: '/kontakt', icon: 'ri-calculator-line' },
    { title: 'Notfall-Service', href: '/kontakt', icon: 'ri-alarm-warning-line' },
    { title: 'Referenzen', href: '/referenzen', icon: 'ri-gallery-line' }
  ];

  const handleMegaMenuToggle = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const handleMegaMenuClose = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/images/domabau-logo.png"
                  alt="DOMABAU Logo"
                  width={220}
                  height={73}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-6 text-sm bg-gray-50 px-6 py-3 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-white text-xs"></i>
                </div>
                <span className="text-[#1A1A1A] font-semibold">+49 172 3004911</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-full flex items-center justify-center">
                  <i className="ri-mail-line text-white text-xs"></i>
                </div>
                <span className="text-[#1A1A1A] font-semibold">info@ipdomabau.de</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#C04020] transition-colors font-medium">
                Home
              </Link>
              
              <div className="relative">
                <button 
                  onClick={handleMegaMenuToggle}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  className="text-gray-700 hover:text-[#C04020] transition-colors flex items-center font-medium cursor-pointer"
                >
                  Leistungen
                  <i className={`ri-arrow-down-s-line ml-1 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isMegaMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={handleMegaMenuClose}
                    ></div>
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Unsere Leistungen</h3>
                          <p className="text-gray-600">Professionelle Bau- und Renovierungsarbeiten in München</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              href={service.href}
                              onClick={handleMegaMenuClose}
                              className="group p-6 rounded-xl border border-gray-100 hover:border-[#C04020]/30 hover:bg-[#C04020]/5 transition-all duration-300"
                            >
                              <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <i className={`${service.icon} text-white text-xl`}></i>
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-[#C04020] transition-colors">
                                    {service.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Kostenlose Beratung</h4>
                              <p className="text-sm text-gray-600">Lassen Sie sich unverbindlich beraten</p>
                            </div>
                            <Link
                              href="/kontakt"
                              onClick={handleMegaMenuClose}
                              className="bg-gradient-to-r from-[#C04020] to-[#A03318] text-white px-6 py-3 rounded-xl hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 font-semibold whitespace-nowrap"
                            >
                              Jetzt anfragen
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <Link href="/referenzen" className="text-gray-700 hover:text-[#C04020] transition-colors font-medium">
                Referenzen
              </Link>
              <Link href="/ueber-uns" className="text-gray-700 hover:text-[#C04020] transition-colors font-medium">
                Über uns
              </Link>
              <Link 
                href="/kontakt" 
                className="bg-[#C04020] text-white px-6 py-3 rounded-xl hover:bg-[#A03318] transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer"
              >
                Kontakt
              </Link>
            </div>

            <button
              className="md:hidden flex items-center justify-center w-12 h-12 cursor-pointer rounded-2xl bg-gradient-to-br from-[#C04020] to-[#A03318] hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col items-center justify-center">
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span className={`block h-0.5 w-5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 w-5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="absolute inset-0 bg-white flex flex-col">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#C04020] to-[#A03318] relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 20 20&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;3&quot; cy=&quot;3&quot; r=&quot;3&quot;/%3E%3Ccircle cx=&quot;13&quot; cy=&quot;13&quot; r=&quot;3&quot;/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
              <div className="relative flex items-center">
                <Image
                  src="/images/domabau-logo.png"
                  alt="DOMABAU Logo"
                  width={140}
                  height={47}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 transition-colors cursor-pointer relative z-10"
              >
                <i className="ri-close-line text-white text-xl"></i>
              </button>
            </div>

            <div className="p-4 bg-gray-50 border-b border-gray-100">
              <div className="grid grid-cols-3 gap-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${link.icon} text-white text-sm`}></i>
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center leading-tight">{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex-1 bg-white overflow-y-auto">
              <div className="p-4 space-y-2">
                <Link 
                  href="/" 
                  className="flex items-center px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#C04020] hover:to-[#A03318] hover:text-white transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <i className="ri-home-line text-gray-600 group-hover:text-white text-lg"></i>
                  </div>
                  <span className="font-semibold text-base">Home</span>
                </Link>

                <div>
                  <button
                    onClick={() => setActiveServiceCategory(activeServiceCategory === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl bg-gradient-to-r from-[#C04020] to-[#A03318] text-white transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                        <i className="ri-tools-line text-white text-lg"></i>
                      </div>
                      <span className="font-semibold text-base">Leistungen</span>
                    </div>
                    <i className={`ri-arrow-down-s-line text-white text-lg transition-transform duration-300 ${activeServiceCategory === 'services' ? 'rotate-180' : ''}`}></i>
                  </button>

                  {activeServiceCategory === 'services' && (
                    <div className="mt-2 bg-gray-50 rounded-xl p-3 space-y-1">
                      {services.map((service, index) => (
                        <Link 
                          key={index}
                          href={service.href} 
                          className="flex items-center p-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-[#C04020] hover:to-[#A03318] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="w-8 h-8 bg-gray-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mr-3 transition-colors">
                            <i className={`${service.icon} text-gray-600 group-hover:text-white text-sm`}></i>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{service.title}</div>
                          </div>
                          <i className="ri-arrow-right-s-line text-gray-400 group-hover:text-white text-lg"></i>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  href="/leistungen" 
                  className="flex items-center px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#C04020] hover:to-[#A03318] hover:text-white transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <i className="ri-service-line text-gray-600 group-hover:text-white text-lg"></i>
                  </div>
                  <span className="font-semibold text-base">Alle Leistungen</span>
                </Link>

                <Link 
                  href="/referenzen" 
                  className="flex items-center px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#C04020] hover:to-[#A03318] hover:text-white transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <i className="ri-gallery-line text-gray-600 group-hover:text-white text-lg"></i>
                  </div>
                  <span className="font-semibold text-base">Referenzen</span>
                </Link>

                <Link 
                  href="/ueber-uns" 
                  className="flex items-center px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#C04020] hover:to-[#A03318] hover:text-white transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <i className="ri-team-line text-gray-600 group-hover:text-white text-lg"></i>
                  </div>
                  <span className="font-semibold text-base">Über uns</span>
                </Link>

                <Link 
                  href="/unser-ansatz" 
                  className="flex items-center px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#C04020] hover:to-[#A03318] hover:text-white transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <i className="ri-lightbulb-line text-gray-600 group-hover:text-white text-lg"></i>
                  </div>
                  <span className="font-semibold text-base">Unser Ansatz</span>
                </Link>

                <Link 
                  href="/impressum" 
                  className="flex items-center px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#C04020] hover:to-[#A03318] hover:text-white transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <i className="ri-file-text-line text-gray-600 group-hover:text-white text-lg"></i>
                  </div>
                  <span className="font-semibold text-base">Impressum</span>
                </Link>

                <Link 
                  href="/datenschutz" 
                  className="flex items-center px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#C04020] hover:to-[#A03318] hover:text-white transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mr-3 transition-colors">
                    <i className="ri-shield-check-line text-gray-600 group-hover:text-white text-lg"></i>
                  </div>
                  <span className="font-semibold text-base">Datenschutz</span>
                </Link>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
              <Link 
                href="/kontakt"
                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#C04020] to-[#A03318] text-white rounded-xl hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold mb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="ri-phone-line mr-2 text-lg"></i>
                Jetzt Kontakt aufnehmen
              </Link>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center p-2 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-lg flex items-center justify-center mr-2">
                    <i className="ri-phone-line text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-xs">+49 172 3004911</div>
                    <div className="text-xs text-gray-500">Mo–Fr 8–17 Uhr</div>
                  </div>
                </div>
                <div className="flex items-center p-2 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-lg flex items-center justify-center mr-2">
                    <i className="ri-mail-line text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-xs">info@ipdomabau.de</div>
                    <div className="text-xs text-gray-500">Schnelle Antwort</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
