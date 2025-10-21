'use client';

import HeroSection from './components/HeroSection';

export default function HomePage() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">DOMABAU</h1>
          <p className="text-xl text-gray-600">Website lädt...</p>
          <p className="text-sm text-gray-400 mt-4">Debugging 500 Error</p>
        </div>
      </div>
    </main>
  );
}
