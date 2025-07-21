import React from 'react';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mongolian and English translations
  const content = {
    mn: {
      welcome: 'Вэб хөгжүүлэлтийн ирээдүйд тавтай морил',
      heading: <><span className="text-accent-600 font-serif">DevCrafters-д</span> тавтай морил</>,
      subtitle: 'Бид бизнесүүдэд зориулсан хурдан, орчин үеийн вэб сайт болон вэб аппликэйшн бүтээдэг',
      features: [
        { icon: <Code className="h-6 w-6 text-accent-600" />, label: 'Орчин үеийн код' },
        { icon: <Smartphone className="h-6 w-6 text-accent-600" />, label: 'Гар утасны эхлэл' },
        { icon: <Globe className="h-6 w-6 text-accent-600" />, label: 'Дэлхийд хүрэх' }
      ],
      cta: 'Холбогдох'
    },
    en: {
      welcome: 'Welcome to the future of web development',
      heading: <><span className="text-accent-600 font-serif">Welcome to</span> DevCrafters</>,
      subtitle: 'We build fast, modern websites and web applications for businesses.',
      features: [
        { icon: <Code className="h-6 w-6 text-accent-600" />, label: 'Modern Code' },
        { icon: <Smartphone className="h-6 w-6 text-accent-600" />, label: 'Mobile First' },
        { icon: <Globe className="h-6 w-6 text-accent-600" />, label: 'Global Reach' }
      ],
      cta: 'Get In Touch'
    }
  };

  const t = content[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-800 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
            {t.welcome}
          </div>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 animate-slide-up">
            {t.heading}
          </h1>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-slide-up delay-200">
            {t.subtitle}
          </p>
          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12 animate-slide-up delay-300">
            {t.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-gray-700">
                {feature.icon}
                <span className="text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up delay-400">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;