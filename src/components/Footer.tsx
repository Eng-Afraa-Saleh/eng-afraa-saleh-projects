
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin,  Mail } from 'lucide-react';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/Eng-Afraa-Saleh" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/afraa-saleh-a9087a3a7/" },
     { icon: <Mail size={24} />, href: "eng.afraa.saleh@gmail.com" }
  ];

  return (
    <footer className="bg-white text-gray-800 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <div className="w-10 h-10 bg-pink-400 rounded-md flex items-center justify-center text-md text-white">
                {lang === 'ar' ? 'ع' : 'A'}
              </div>
              {t.hero.name}
            </h2>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              {t.hero.bio}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">{t.footer.stayConnected}</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  whileHover={{ y: -5, color: '#fd52b0' }}
                  className="w-12 h-12 bg-pink-400 rounded-full  flex items-center justify-center transition-colors text-white hover:bg-white hover:border hover:border-pink-500"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">{t.nav.contact}</h3>
            <p className="text-slate-500">
               {lang === 'ar' ? "اللاذقية, سوريا" : lang === 'zh' ? "叙利亚拉塔基亚" : "Latakia, Syria"}
            </p>
            <p className="text-pink-400 font-bold">eng.afraa.saleh@gmail.com</p>
           <p className="text-pink-400 font-bold">+963 992922383</p>

          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
