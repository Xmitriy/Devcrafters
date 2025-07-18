import React, { createContext, useContext, useState, useEffect } from 'react';

interface CustomizationContextType {
  accentColor: string;
  font: string;
  layout: 'full-width' | 'boxed';
  isCustomizerOpen: boolean;
  setAccentColor: (color: string) => void;
  setFont: (font: string) => void;
  setLayout: (layout: 'full-width' | 'boxed') => void;
  toggleCustomizer: () => void;
}

const CustomizationContext = createContext<CustomizationContextType | undefined>(undefined);

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (context === undefined) {
    throw new Error('useCustomization must be used within a CustomizationProvider');
  }
  return context;
};

export const CustomizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accentColor, setAccentColor] = useState('violet');
  const [font, setFont] = useState('inter');
  const [layout, setLayout] = useState<'full-width' | 'boxed'>('full-width');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    const savedAccentColor = localStorage.getItem('accentColor');
    const savedFont = localStorage.getItem('font');
    const savedLayout = localStorage.getItem('layout') as 'full-width' | 'boxed';
    
    if (savedAccentColor) setAccentColor(savedAccentColor);
    if (savedFont) setFont(savedFont);
    if (savedLayout) setLayout(savedLayout);
  }, []);

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor);
    document.documentElement.setAttribute('data-accent', accentColor);
  }, [accentColor]);

  useEffect(() => {
    localStorage.setItem('font', font);
    document.documentElement.setAttribute('data-font', font);
  }, [font]);

  useEffect(() => {
    localStorage.setItem('layout', layout);
    document.documentElement.setAttribute('data-layout', layout);
  }, [layout]);

  const toggleCustomizer = () => {
    setIsCustomizerOpen(prev => !prev);
  };

  return (
    <CustomizationContext.Provider value={{
      accentColor,
      font,
      layout,
      isCustomizerOpen,
      setAccentColor,
      setFont,
      setLayout,
      toggleCustomizer
    }}>
      {children}
    </CustomizationContext.Provider>
  );
};