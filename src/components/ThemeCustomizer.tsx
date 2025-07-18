import React from 'react';
import { X, Palette, Type, Layout } from 'lucide-react';
import { useCustomization } from '../contexts/CustomizationContext';
import { useLanguage } from '../contexts/LanguageContext';

const ThemeCustomizer = () => {
  const {
    accentColor,
    font,
    layout,
    isCustomizerOpen,
    setAccentColor,
    setFont,
    setLayout,
    toggleCustomizer
  } = useCustomization();
  const { language } = useLanguage();

  const accentColors = [
    { name: language === 'mn' ? 'Неон ягаан' : 'Neon Violet', value: 'violet', color: 'bg-violet-500' },
    { name: language === 'mn' ? 'Цэнхэр' : 'Electric Blue', value: 'blue', color: 'bg-blue-500' },
    { name: language === 'mn' ? 'Цайвар цэнхэр' : 'Soft Cyan', value: 'cyan', color: 'bg-cyan-500' },
    { name: language === 'mn' ? 'Ногоон' : 'Emerald Green', value: 'emerald', color: 'bg-emerald-500' },
    { name: language === 'mn' ? 'Улбар шар' : 'Warm Orange', value: 'orange', color: 'bg-orange-500' },
    { name: language === 'mn' ? 'Ягаан' : 'Hot Pink', value: 'pink', color: 'bg-pink-500' }
  ];

  const fonts = [
    { name: language === 'mn' ? 'Монсеррат' : 'Montserrat', value: 'montserrat' },
    { name: 'Inter', value: 'inter' },
    { name: 'Poppins', value: 'poppins' },
    { name: 'Roboto', value: 'roboto' }
  ];

  const layouts = [
    { name: language === 'mn' ? 'Бүтэн дэлгэц' : 'Full Width', value: 'full-width' },
    { name: language === 'mn' ? 'Хайрцагласан' : 'Boxed', value: 'boxed' }
  ];

  const labels = {
    mn: {
      header: 'Өнгө, фонт тохируулах',
      accent: 'Өнгө сонгох',
      font: 'Фонт сонгох',
      layout: 'Дэлгэцийн загвар',
      sample: 'Монгол хэлний жишээ өгүүлбэр',
      reset: 'Анхны тохиргоо руу буцаах'
    },
    en: {
      header: 'Customize Theme',
      accent: 'Choose Accent Color',
      font: 'Choose Font',
      layout: 'Layout Style',
      sample: 'The quick brown fox jumps over the lazy dog',
      reset: 'Reset to Default'
    }
  };
  const t = labels[language];

  if (!isCustomizerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-md mx-2 sm:mx-4 border border-black shadow-xl overflow-y-auto max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Palette className="h-6 w-6 text-black mr-2" />
            <h3 className="text-xl font-bold text-black">
              {t.header}
            </h3>
          </div>
          <button
            onClick={toggleCustomizer}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-black"
          >
            <X className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Accent Colors */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-black mb-3 flex items-center">
            <div className="w-4 h-4 bg-black rounded-full mr-2"></div>
            {t.accent}
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {accentColors.map((color) => (
              <button
                key={color.value}
                onClick={() => setAccentColor(color.value)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 bg-white ${
                  accentColor === color.value
                    ? 'border-black bg-gray-100'
                    : 'border-black hover:border-gray-200'
                }`}
                aria-pressed={accentColor === color.value}
              >
                <div className={`w-6 h-6 ${color.color} rounded-full mx-auto mb-2 border border-black`}></div>
                <div className={`text-xs ${accentColor === color.value ? 'font-bold text-black' : 'text-black'}`}>{color.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Font Selection */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-black mb-3 flex items-center">
            <Type className="h-4 w-4 mr-2 text-black" />
            {t.font}
          </h4>
          <div className="space-y-2">
            {fonts.map((fontOption) => (
              <button
                key={fontOption.value}
                onClick={() => setFont(fontOption.value)}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all duration-200 bg-white ${
                  font === fontOption.value
                    ? 'border-black bg-gray-100'
                    : 'border-black hover:border-gray-200'
                }`}
                aria-pressed={font === fontOption.value}
                style={fontOption.value === 'montserrat' ? { fontFamily: 'Montserrat, sans-serif' } : {}}
              >
                <div className={`font-medium ${font === fontOption.value ? 'font-bold text-black' : 'text-black'}`}>{fontOption.name}</div>
                <div className="text-sm text-black" style={fontOption.value === 'montserrat' ? { fontFamily: 'Montserrat, sans-serif' } : {}}>
                  {t.sample}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Layout Selection */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-black mb-3 flex items-center">
            <Layout className="h-4 w-4 mr-2 text-black" />
            {t.layout}
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {layouts.map((layoutOption) => (
              <button
                key={layoutOption.value}
                onClick={() => setLayout(layoutOption.value as 'full-width' | 'boxed')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 bg-white ${
                  layout === layoutOption.value
                    ? 'border-black bg-gray-100'
                    : 'border-black hover:border-gray-200'
                }`}
                aria-pressed={layout === layoutOption.value}
              >
                <div className={`text-sm font-medium ${layout === layoutOption.value ? 'font-bold text-black' : 'text-black'}`}>{layoutOption.name}</div>
                <div className="mt-2">
                  {layoutOption.value === 'full-width' ? (
                    <div className="w-full h-4 bg-gray-200 rounded border border-black"></div>
                  ) : (
                    <div className="mx-auto w-3/4 h-4 bg-gray-200 rounded border border-black"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => {
            setAccentColor('violet');
            setFont('montserrat');
            setLayout('full-width');
          }}
          className="w-full px-4 py-3 bg-white text-black border border-black rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          {t.reset}
        </button>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
