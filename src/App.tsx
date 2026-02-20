
import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import type { Language, Translation } from './types';
import { translations } from './translations';
import BackToTopButton from './components/GotoTop';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}



const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
     const html = document.documentElement;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    html.lang = lang;
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translations[lang]
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className={`min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 ${lang === 'ar' ? 'rtl' : ''}`}>
        <Navbar />
        <main className="overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
        </main>
        <Footer />
        <ChatBot />
        <BackToTopButton />

      </div>
    </LanguageContext.Provider>
  );
};

export default App;
