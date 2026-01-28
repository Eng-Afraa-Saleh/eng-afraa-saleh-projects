import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useLanguage } from '../App';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

  
const Projects: React.FC = () => {
  const { t, lang } = useLanguage();  
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = t.projects.items.map((item) => item.category);
     return [lang === 'ar' ? 'الكل' : lang === 'zh' ? '全部' : 'All', ...new Set(cats)];
  }, [t.projects.items, lang]);

  const filteredProjects = useMemo(() => {
     const allLabel = lang === 'ar' ? 'الكل' : lang === 'zh' ? '全部' : 'All';
    if (activeFilter === allLabel || activeFilter === 'All') return t.projects.items;
    return t.projects.items.filter((item) => item.category === activeFilter);
  }, [activeFilter, t.projects.items, lang]);

  return (
    <section id="projects" className="py-20  relative overflow-hidden bg-slate-50">
      <div className="absolute top-0  w-96 h-96 bg-pink-200/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
          <div className="w-20 h-1.5 bg-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
                  : 'bg-white text-slate-600 hover:bg-pink-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
             key={lang} 
             dir={lang === 'ar' ? 'rtl' : 'ltr'}
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
             autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {filteredProjects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[450px]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-pink-500 transition-colors">
                          <Github size={18} />
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-pink-500 transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-pink-500 mb-2 uppercase tracking-wider">{project.category}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors line-clamp-1">{project.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 bg-slate-50 text-slate-500 border border-slate-100 rounded-md text-[10px] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-pink-50 text-pink-600 text-sm font-bold rounded-xl group-hover:bg-pink-500 group-hover:text-white transition-all shadow-sm"
                    >
                      <Code size={16} />
                      {t.projects.viewProject}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;