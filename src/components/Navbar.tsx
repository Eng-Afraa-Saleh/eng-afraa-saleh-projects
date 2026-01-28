import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../App';
import type { Language } from '../types';
import ContactModal from './ContactModal';  

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' }
  ];

   const handleNavClick = (key: string, e: React.MouseEvent) => {
    if (key === 'contact') {
      e.preventDefault();
      setIsContactOpen(true);
      setIsOpen(false);  
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-pink-400 flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-pink-300 text-white flex items-center justify-center rounded-lg">
              {lang === 'ar' ? 'ع' : 'A'}
            </div>
            <span className="hidden sm:inline">{t.hero.name}</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {Object.entries(t.nav).map(([key, label], idx) => (
              <motion.a
                key={key}
                href={`#${key}`}
                onClick={(e) => handleNavClick(key, e)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="hover:text-pink-600 transition-colors cursor-pointer"
              >
                {label}
              </motion.a>
            ))}
            
            <div className="relative group ml-4">
              <button className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full text-sm transition-all">
                <Globe size={16} />
                <span>{languages.find(l => l.code === lang)?.label}</span>
              </button>
              <div className={`absolute top-full mt-2 w-32 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top ${lang === 'ar' ? 'left-0' : 'right-0'}`}>
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-pink-50 hover:text-pink-600 transition-colors ${lang === l.code ? 'bg-pink-50 text-pink-600' : ''}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {Object.entries(t.nav).map(([key, label]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    onClick={(e) => handleNavClick(key, e)}
                    className="text-lg font-medium hover:text-pink-600"
                  >
                    {label}
                  </a>
                ))}
                <div className="border-t pt-4 flex gap-2 overflow-x-auto pb-2">
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setIsOpen(false); }}
                      className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${lang === l.code ? 'bg-pink-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

       <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default Navbar;