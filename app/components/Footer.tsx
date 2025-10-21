
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] text-white relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/domabau-logo.png"
                  alt="DOMABAU Logo"
                  width={200}
                  height={67}
                  className="h-16 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-lg">
                Ihr zuverlässiger Meisterbetrieb für hochwertige Bau- und Renovierungsarbeiten in München. 
                Präzision, Zuverlässigkeit und Qualität aus Meisterhand.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center cursor-pointer hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 hover:scale-110 shadow-lg">
                <i className="ri-instagram-fill text-white text-lg sm:text-xl"></i>
              </div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center cursor-pointer hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 hover:scale-110 shadow-lg">
                <i className="ri-facebook-fill text-white text-lg sm:text-xl"></i>
              </div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-2xl flex items-center justify-center cursor-pointer hover:from-[#A03318] hover:to-[#8B2A14] transition-all duration-300 hover:scale-110 shadow-lg">
                <i className="ri-map-pin-fill text-white text-lg sm:text-xl"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-white">Navigation</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><Link href="/" className="text-gray-300 hover:text-[#C04020] transition-all duration-300 cursor-pointer text-sm sm:text-base hover:translate-x-1 inline-block">Startseite</Link></li>
              <li><Link href="/leistungen" className="text-gray-300 hover:text-[#C04020] transition-all duration-300 cursor-pointer text-sm sm:text-base hover:translate-x-1 inline-block">Leistungen</Link></li>
              <li><Link href="/referenzen" className="text-gray-300 hover:text-[#C04020] transition-all duration-300 cursor-pointer text-sm sm:text-base hover:translate-x-1 inline-block">Referenzen</Link></li>
              <li><Link href="/ueber-uns" className="text-gray-300 hover:text-[#C04020] transition-all duration-300 cursor-pointer text-sm sm:text-base hover:translate-x-1 inline-block">Über uns</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-[#C04020] transition-all duration-300 cursor-pointer text-sm sm:text-base hover:translate-x-1 inline-block">Kontakt</Link></li>
              <li><Link href="/impressum" className="text-gray-300 hover:text-[#C04020] transition-all duration-300 cursor-pointer text-sm sm:text-base hover:translate-x-1 inline-block">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-gray-300 hover:text-[#C04020] transition-all duration-300 cursor-pointer text-sm sm:text-base hover:translate-x-1 inline-block">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-white">Kontakt</h4>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start group">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mr-3 sm:mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-map-pin-line text-white text-sm sm:text-lg"></i>
                </div>
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">DOMABAU<br />Renatastraße 8<br />80635 München</span>
              </li>
              <li className="flex items-center group">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-phone-line text-white text-sm sm:text-lg"></i>
                </div>
                <span className="text-gray-300 text-sm sm:text-base">+49 172 3004911</span>
              </li>
              <li className="flex items-center group">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-mail-line text-white text-sm sm:text-lg"></i>
                </div>
                <span className="text-gray-300 text-sm sm:text-base">info@ipdomabau.de</span>
              </li>
              <li className="flex items-center group">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-[#C04020] to-[#A03318] rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-time-line text-white text-sm sm:text-lg"></i>
                </div>
                <span className="text-gray-300 text-sm sm:text-base">Mo–Fr 8–17 Uhr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 DOMABAU - Ilijan Pavic. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link href="/impressum" className="text-gray-400 hover:text-[#C04020] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-[#C04020] transition-colors">
                Datenschutz
              </Link>
              <a href="https://www.instagram.com/domabau/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C04020] transition-colors flex items-center">
                <i className="ri-instagram-line mr-1"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
