import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const footerLinks = {
    company: [
      { name: language === 'mn' ? 'Бидний тухай' : 'About Us', href: '#about' },
      { name: language === 'mn' ? 'Холбоо барих' : 'Contact', href: '#contact' }
    ],
    services: [
      { name: language === 'mn' ? 'Вэб хөгжүүлэлт' : 'Web Development', href: '#services' },
      { name: language === 'mn' ? 'UI/UX дизайн' : 'UI/UX Design', href: '#services' },
      { name: language === 'mn' ? 'SEO оновчлол' : 'SEO Optimization', href: '#services' },
      { name: language === 'mn' ? 'Техник үйлчилгээ' : 'Maintenance', href: '#services' }
    ],
    resources: [
      { name: language === 'mn' ? 'Блог' : 'Blog', href: '#' },
      { name: language === 'mn' ? 'Кейс судалгаа' : 'Case Studies', href: '#' },
      { name: language === 'mn' ? 'Баримт бичиг' : 'Documentation', href: '#' },
      { name: language === 'mn' ? 'Дэмжлэг' : 'Support', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-black border-t-2 border-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DevCrafters</h3>
            <p className="text-gray-700 mb-6">
              {language === 'mn'
                ? 'Бид бизнесүүдэд зориулсан хурдан, орчин үеийн вэб сайт болон вэб аппликэйшн бүтээдэг.'
                : 'We build fast, modern websites and web applications that drive results for businesses worldwide.'}
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-3" />
                <span>DevCrafters.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="h-4 w-4 mr-3" />
                <span>+976 85004648</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{language === 'mn' ? 'Компани' : 'Company'}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-700 hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{language === 'mn' ? 'Үйлчилгээ' : 'Services'}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-700 hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{language === 'mn' ? 'Нөөц' : 'Resources'}</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-black mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-500 mb-4 md:mb-0">
              <p>
                &copy; {currentYear} DevCrafters. {language === 'mn' ? 'Бүх эрх хуулиар хамгаалагдсан.' : 'All rights reserved.'}
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white border-2 border-black hover:bg-gray-100 rounded-lg transition-colors duration-200 text-black"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;