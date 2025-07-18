import React, { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { useCustomization } from '../contexts/CustomizationContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleCustomizer } = useCustomization();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  function translateNav(name: string) {
    switch (name) {
      case 'Home': return 'Нүүр';
      case 'About': return 'Бидний тухай';
      case 'Services': return 'Үйлчилгээ';
      case 'Contact': return 'Холбоо барих';
      default: return name;
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-black shadow' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">
              DevCrafters
            </h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-black hover:text-gray-700 transition-colors duration-200"
              >
                {language === 'mn' ? translateNav(item.name) : item.name}
              </button>
            ))}
          </nav>
          {/* Language Switcher & Customizer Button */}
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={e => setLanguage(e.target.value as 'mn' | 'en')}
              className="p-2 rounded-lg bg-white border border-black text-black"
              aria-label="Language switcher"
            >
              <option value="mn">Монгол</option>
              <option value="en">English</option>
            </select>
            <button
              onClick={toggleCustomizer}
              className="p-2 rounded-lg bg-white border border-black hover:bg-gray-100 transition-all duration-200"
              aria-label="Open customizer"
            >
              <Settings className="h-5 w-5 text-black" />
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white border border-black hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-black" />
              ) : (
                <Menu className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-black animate-slide-down">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-black hover:text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  {language === 'mn' ? translateNav(item.name) : item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;