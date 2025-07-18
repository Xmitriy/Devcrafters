import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CustomizationProvider } from './contexts/CustomizationContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Team from './components/Team';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeCustomizer from './components/ThemeCustomizer';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CustomizationProvider>
          <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Header />
            <main>
              <Hero />
              <About />
              <Services />
              {/* <Portfolio /> */}
              {/* <Team /> */}
              <TechStack />
              <Contact />
            </main>
            <Footer />
            <ThemeCustomizer />
          </div>
        </CustomizationProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;