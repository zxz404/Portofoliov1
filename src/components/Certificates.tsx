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
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={() => openModal(certificate)}
            >
              <div className="relative">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {certificate.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    Click to view details
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <Award className="text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" size={20} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
                    {certificate.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2 line-clamp-1">
                  {certificate.issuer}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm">{certificate.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                  {certificate.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
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
            className="inline-flex items-center space-x-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Certification Stats
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {totalCertificates}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Total Certificates</div>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                From {uniqueIssuers} different organizations
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {categoriesCount}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Categories</div>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                Covering various technical domains
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Verification Rate</div>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
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
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                      {selectedCertificate.issuer}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                      <img
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {selectedCertificate.category}
                        </span>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                          <Calendar size={16} className="inline mr-2" />
                          {selectedCertificate.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Description
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedCertificate.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Skills Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
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
                        className="flex items-center justify-center space-x-2 w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                      >
                        <Download size={18} />
                        <span>Download Certificate</span>
                      </a>
                      
                      {selectedCertificate.verificationUrl && (
                        <a
                          href={selectedCertificate.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 w-full bg-gray-800 dark:bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
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