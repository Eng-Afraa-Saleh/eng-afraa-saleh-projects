import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../App';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

   const contactInfo = [
    { 
      icon: <Mail className="text-pink-500" size={20} />, 
      text: "eng.afraa.saleh@gmail.com",
      href: "mailto:eng.afraa.saleh@gmail.com"
    },
    { 
      icon: <Phone className="text-pink-500" size={20} />, 
      text: "+963 992922383",
      href: "tel:+963992922383"
    },
    { 
      icon: <MapPin className="text-pink-500" size={20} />, 
      text: lang === 'ar' ? "اللاذقية, سوريا" : lang === 'zh' ? "叙利亚拉塔基亚" : "Latakia, Syria",
     
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Eng-Afraa-Saleh" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/afraa-saleh-a9087a3a7/" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
     const subject = `New Message from Portfolio: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:eng.afraa.saleh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
     setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t.contactForm.contactInfo}</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  {t.hero.bio}
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <a 
                      key={idx} 
                      href={info.href}
                      className="flex items-center gap-4 hover:text-pink-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <span className="text-sm font-medium">{info.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                  {t.contactForm.followUs}
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

             <div className="p-8 md:w-3/5 bg-white overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">{t.contactForm.title}</h2>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactForm.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    placeholder={lang === 'ar' ? 'الاسم...' : 'Name...'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactForm.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactForm.message}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                    placeholder="..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-200 flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all"
                >
                  <Send size={20} />
                  {t.contactForm.send}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;