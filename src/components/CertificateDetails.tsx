import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText } from 'lucide-react'; // Added FileText icon
import { useLanguage } from '../App';
import type { CertificateItem } from '../types';

interface CertificateDetailsProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

const CertificateDetails: React.FC<CertificateDetailsProps> = ({ certificate, onClose }) => {
  const { t } = useLanguage();

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky z-50 top-0 bg-white border-b p-6 flex justify-between items-center rounded-t-2xl">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{certificate.title}</h2>
              <p className="text-gray-600 mt-1">
                {t.certificates.issuedBy}: {certificate.issuer} • {certificate.date}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={t.certificates.close}
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            {/* Certificate Image */}
            {certificate.image && (
              <div className="mb-8">
                <div className="relative group">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full rounded-xl border shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                    <a
                      href={certificate.certificatePdf || certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={20} />
                      {t.certificates.viewCertificate}
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Recommendation */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {t.certificates.recommendation}
                </h3>

                {/* Recommendation Text Box */}
                <div className="bg-pink-50 border border-pink-100 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {certificate.recommendation || "No recommendation text available."}
                  </p>

                  {certificate.file && (
                    <div className="mt-4 pt-4 border-t border-pink-200">
                      <a
                        href={certificate.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700 transition-colors"
                      >
                        <FileText size={18} />
                        Download Recommendation Letter (PDF)
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                {/* Skills Gained */}
                {certificate.skills && certificate.skills.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      {t.certificates.skillsGained}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-3">

                  {/* Download Image Button (Kept as backup or for image version) */}
                  <button
                    onClick={() => {
                      if (certificate.image) {
                        const link = document.createElement('a');
                        link.href = certificate.image;
                        link.download = `${certificate.title}.jpg`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 border border-pink-500 text-pink-500 py-3 rounded-xl hover:bg-pink-50 transition-colors"
                  >
                    <Download size={20} />
                    Download Certificate Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertificateDetails;