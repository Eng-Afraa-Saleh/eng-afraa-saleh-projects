
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../App';
import { certificateData } from '../translations';
import CertificateDetails from './CertificateDetails';

const Certificates: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  return (
    <section id="certificates" className="py-24 bg-pink-100/80 text-gray-700 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.certificates.title}</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificateData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedCertificate(cert)}
              className="flex items-center gap-6 p-6 bg-white/50 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/80 transition-all cursor-pointer group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-pink-300 rounded-2xl flex items-center justify-center group-hover:bg-pink-400 transition-colors">
                <Award size={32} className='text-white' />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-pink-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  {t.certificates.issuedBy}: {cert.issuer} ({cert.date})
                </p>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                    {t.certificates.viewCertificate}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Details Modal */}
      <CertificateDetails
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default Certificates;
