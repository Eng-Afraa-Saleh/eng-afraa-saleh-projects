
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
 
const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: t.skills.core,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3 / SCSS", level: 90 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      title: t.skills.frameworks,
      skills: [
        { name: "React.js", level: 94 },
        { name: "Next.js (App Router)", level: 90 },
        { name: "Tailwind CSS", level: 96 },
        { name: "Inertia.js", level: 80 }
      ]
    },
    {
      title: t.skills.tools,
      skills: [
        { name: "Axios / Fetch API", level: 90 },
        { name: "SEO Optimization", level: 85 },
        { name: "Git / GitHub", level: 88 },
        { name: "Figma to Code", level: 92 }
      ]
    },
    {
      title: t.skills.other,
      skills: [
        { name: "C# (.NET)", level: 80 },
        { name: "Full Accounting Apps", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "UI/UX Design", level: 82 }
      ]
    }
  ];

  return (
<section id="skills" className="py-24 relative bg-slate-50">
       <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.5 }}></div>
      
       <div className="absolute   bg-gradient-to-b from-transparent via-white/50 to-white/80"></div>      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b pb-2 flex justify-between">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (gIdx * 0.1) + (sIdx * 0.05) }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm font-bold text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-pink-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
