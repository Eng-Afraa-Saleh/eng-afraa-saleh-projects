
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import { User, Code, Layout, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const { t, lang } = useLanguage();

  const stats = [
    { label: t.about.experience, value: "3+", icon: <Sparkles className="text-pink-400" /> },
    { label: t.about.projectsCompleted, value: "50+", icon: <Layout className="text-pink-400" /> },
    { label: "Happy Clients", value: "30+", icon: <User className="text-pink-400" /> }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="absolute top-20 left-10 text-pink-200 opacity-20 transform rotate-12">
        <Code size={100} />
      </div>
      <div className="absolute bottom-20 right-10 text-purple-200 opacity-20 transform -rotate-12">
        <Layout size={120} />
      </div>      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <span className="w-10 h-1 bg-pink-400 rounded-full"></span>
              {t.about.title}
              <span className="w-10 h-1 bg-pink-400 rounded-full"></span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed italic">
              "{t.about.description}"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-white shadow-inner rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-pink-400/80 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center gap-8"
          >
            <div className="bg-white/10 p-4 rounded-2xl">
              <Code size={40} />
            </div>
            <div>
              <p className="text-lg leading-relaxed opacity-90">
                {lang === 'ar'
                  ? "لدي خبرة خاصة في بناء أنظمة محاسبية كاملة باستخدام C#، مما منحني فهماً عميقاً للمنطق البرمجي والتعامل مع البيانات المعقدة قبل أن أتخصص في تطوير الواجهات الأمامية."
                  : "I have specialized experience in building full accounting applications using C#, which gave me a deep understanding of programming logic and complex data handling before specializing in front-end development."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
