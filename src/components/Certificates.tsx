// src/components/Certificates.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, X, ChevronRight, ExternalLink, Download } from 'lucide-react';
import { certificatesData, Certificate } from './CertificatesData';

interface CertificatesProps {
  onViewAll: () => void;
}

const Certificates: React.FC<CertificatesProps> = ({ onViewAll }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // For main page, show only first 6 certificates
  const displayedCertificates = certificatesData.slice(0, 6);

  // Stats calculations
  const totalCertificates = certificatesData.length;
  const uniqueIssuers = Array.from(new Set(certificatesData.map(cert => cert.issuer))).length;
  const categoriesCount = Array.from(new Set(certificatesData.map(cert => cert.category))).length;

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="site-section-muted">
      <div className="section-grid" />
      <div className="section-glow" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-eyebrow">04 / Proof Stack</p>
            <h2 className="section-title">Certifications & Achievements</h2>
          </div>
          <p className="section-copy mt-6 max-w-3xl md:mt-0">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="tech-panel tech-panel-hover cursor-pointer group overflow-hidden"
              onClick={() => openModal(certificate)}
            >
              <div className="relative">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-48 object-cover grayscale-[0.15] contrast-110 group-hover:scale-[1.04] transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4">
                  <span className="border border-lime-300/40 bg-lime-300 px-3 py-1 text-sm font-medium text-slate-950 backdrop-blur-sm">
                    {certificate.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="border border-cyan-300/30 bg-black/50 px-3 py-1 text-xs text-cyan-100 backdrop-blur-sm">
                    Click to view details
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <Award className="text-lime-300 mr-3 flex-shrink-0 mt-1" size={20} />
                  <h3 className="text-xl font-bold text-white line-clamp-1">
                    {certificate.title}
                  </h3>
                </div>
                <p className="text-slate-300 font-medium mb-2 line-clamp-1">
                  {certificate.issuer}
                </p>
                <div className="flex items-center text-slate-500 mb-3">
                  <Calendar size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm">{certificate.date}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {certificate.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-xs text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-400">
                      +{certificate.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={onViewAll}
            className="tech-button"
          >
            <span>View All Certificates ({totalCertificates})</span>
            <ChevronRight size={16} />
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
            Certification Stats
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tech-panel p-6 text-center">
              <div className="text-4xl font-bold text-lime-300 mb-2">
                {totalCertificates}
              </div>
              <div className="text-slate-300 font-medium">Total Certificates</div>
              <p className="text-slate-500 text-sm mt-2">
                From {uniqueIssuers} different organizations
              </p>
            </div>
            <div className="tech-panel p-6 text-center">
              <div className="text-4xl font-bold text-lime-300 mb-2">
                {categoriesCount}
              </div>
              <div className="text-slate-300 font-medium">Categories</div>
              <p className="text-slate-500 text-sm mt-2">
                Covering various technical domains
              </p>
            </div>
            <div className="tech-panel p-6 text-center">
              <div className="text-4xl font-bold text-lime-300 mb-2">
                100%
              </div>
              <div className="text-slate-300 font-medium">Verification Rate</div>
              <p className="text-slate-500 text-sm mt-2">
                All certificates are verifiable online
              </p>
            </div>
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCertificate && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-white/10 bg-[#0b0f16] p-6 text-slate-100"
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-xl text-slate-300 font-medium">
                      {selectedCertificate.issuer}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 text-slate-400 hover:bg-white/[0.06] hover:text-lime-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="overflow-hidden border border-white/10 mb-6">
                      <img
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="border border-lime-300/30 bg-lime-300/10 px-4 py-2">
                        <span className="text-lime-200 font-medium">
                          {selectedCertificate.category}
                        </span>
                      </div>
                      <div className="border border-white/10 bg-white/[0.04] px-4 py-2">
                        <span className="text-slate-400 font-medium">
                          <Calendar size={16} className="inline mr-2" />
                          {selectedCertificate.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Description
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedCertificate.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Skills Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={selectedCertificate.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-button w-full py-3"
                      >
                        <Download size={18} />
                        <span>Download Certificate</span>
                      </a>
                      
                      {selectedCertificate.verificationUrl && (
                        <a
                          href={selectedCertificate.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tech-button-secondary w-full py-3"
                        >
                          <ExternalLink size={18} />
                          <span>Verify Online</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
