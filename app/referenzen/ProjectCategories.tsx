
'use client';

import { useEffect, useState } from 'react';

interface ProjectCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectCategories({ selectedCategory, onCategoryChange }: ProjectCategoriesProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('project-categories');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { name: 'Alle', icon: 'ri-grid-line', count: 500 },
    { name: 'Badsanierung', icon: 'ri-drop-line', count: 120 },
    { name: 'Innenausbau', icon: 'ri-home-4-line', count: 150 },
    { name: 'Renovierung', icon: 'ri-hammer-line', count: 100 },
    { name: 'Sanierung', icon: 'ri-building-line', count: 80 },
    { name: 'Neubau', icon: 'ri-building-2-line', count: 50 }
  ];

  return (
    <section id="project-categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Projekt<span className="text-[#C04020]">kategorien</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältigen Bauprojekte nach Kategorien sortiert
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => onCategoryChange(category.name)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                selectedCategory === category.name
                  ? 'bg-[#C04020] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <div className={`w-6 h-6 flex items-center justify-center ${
                selectedCategory === category.name ? 'text-white' : 'text-[#C04020]'
              }`}>
                <i className={`${category.icon} text-lg`}></i>
              </div>
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedCategory === category.name
                  ? 'bg-white/20 text-white'
                  : 'bg-[#C04020]/10 text-[#C04020]'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#C04020]/10 to-[#C04020]/20 rounded-2xl p-6 border border-[#C04020]/20">
              <div className="text-3xl font-bold text-[#C04020] mb-2">500+</div>
              <div className="text-slate-700 font-medium">Abgeschlossene Projekte</div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
              <div className="text-3xl font-bold text-slate-700 mb-2">12</div>
              <div className="text-slate-700 font-medium">Jahre Erfahrung</div>
            </div>
            <div className="bg-gradient-to-br from-[#C04020]/10 to-[#C04020]/20 rounded-2xl p-6 border border-[#C04020]/20">
              <div className="text-3xl font-bold text-[#C04020] mb-2">98%</div>
              <div className="text-slate-700 font-medium">Kundenzufriedenheit</div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
              <div className="text-3xl font-bold text-slate-700 mb-2">5</div>
              <div className="text-slate-700 font-medium">Jahre Garantie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
