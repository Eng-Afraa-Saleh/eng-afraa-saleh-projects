import React, { useState } from 'react';  
import { motion } from 'framer-motion';
import { ArrowRight, PhoneIcon } from 'lucide-react';
import { useLanguage } from '../App';
import ContactModal from './ContactModal'; 
import image1 from '/hero/image1.png';
const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);  

  return (
    <>
      <section id="home" className="relative pt-32 pb-20 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Animated Blobs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" 
          />
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-pink-500 font-semibold mb-4 text-lg"
            >
              {t.hero.greeting}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              {t.hero.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-bold uppercase tracking-wider">
                {t.hero.title}
              </span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-600 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
            >
              {t.hero.bio}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
               <a 
                href="#projects"
                className="flex items-center gap-2 bg-white hover:bg-pink-50 text-pink-400 border-2 border-pink-300 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 z-10 cursor-pointer"
              >
                {t.hero.viewWork}
                <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
              </a>

               <button 
                onClick={() => setIsContactOpen(true)}
                className="flex items-center gap-2 bg-white hover:bg-pink-50 text-pink-400 border-2 border-pink-300 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 z-10"
              >
                {t.hero.contactMe}
                <PhoneIcon size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-pink-300 rounded-3xl transform rotate-6 scale-95 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-pink-200 rounded-3xl transform -rotate-3 scale-95 opacity-20"></div>
              <img 
                src={image1} 
                alt="Eng. Afraa" 
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-8 border-white"
              />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50 z-40"
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Availability</p>
                <p className="text-sm font-bold">Open for work</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50 z-40"
            >
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                🔥
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Experience</p>
                <p className="text-sm font-bold">Senior Expertise</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

       <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default Hero;