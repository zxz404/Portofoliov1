// src/components/AllCertificates.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Award, Calendar, X, Search, ExternalLink, Download } from 'lucide-react';
import { certificatesData, Certificate } from './CertificatesData';

interface AllCertificatesProps {
  onBack: () => void;
}

const AllCertificates: React.FC<AllCertificatesProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get all unique categories
  const categories = ['All', ...Array.from(new Set(certificatesData.map(cert => cert.category)))];

  // Filter certificates
  const filteredCertificates = certificatesData.filter(certificate => {
    const matchesSearch = certificate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         certificate.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         certificate.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         certificate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || certificate.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
    <section className="site-section-muted min-h-screen pt-24">
      <div className="section-grid" />
      <div className="section-glow" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onBack}
            className="mb-6 flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.16em] text-lime-300 transition-colors hover:text-cyan-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <h1 className="section-title mb-4">
            All Certifications
          </h1>
          <p className="section-copy">
            Browse all my professional certifications and achievements
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="tech-panel mb-12 p-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Search Certificates
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
                <input
                  type="text"
                  placeholder="Search by title, issuer, description, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="tech-input pl-10"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'border-lime-300 bg-lime-300 text-slate-950'
                        : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-lime-300/60 hover:text-lime-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Showing {filteredCertificates.length} of {totalCertificates} certificates
            </p>
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-sm text-lime-300 hover:text-cyan-200"
              >
                Clear filters
              </button>
            )}
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="tech-panel p-6 text-center">
            <div className="text-3xl font-bold text-lime-300 mb-2">
              {totalCertificates}
            </div>
            <div className="text-slate-300 font-medium">Total Certificates</div>
          </div>
          <div className="tech-panel p-6 text-center">
            <div className="text-3xl font-bold text-lime-300 mb-2">
              {uniqueIssuers}
            </div>
            <div className="text-slate-300 font-medium">Organizations</div>
          </div>
          <div className="tech-panel p-6 text-center">
            <div className="text-3xl font-bold text-lime-300 mb-2">
              {categoriesCount}
            </div>
            <div className="text-slate-300 font-medium">Categories</div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="tech-panel tech-panel-hover cursor-pointer group overflow-hidden"
              onClick={() => openModal(certificate)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover grayscale-[0.15] contrast-110 group-hover:scale-[1.04] transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <div className="border border-lime-300/40 bg-black/50 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-lime-200 backdrop-blur-sm">
                      Click to view details
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="border border-lime-300/40 bg-lime-300 px-3 py-1 text-xs font-semibold text-slate-950">
                    {certificate.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start mb-3">
                  <Award className="text-lime-300 mr-2 flex-shrink-0 mt-1" size={18} />
                  <h3 className="text-lg font-bold text-white line-clamp-1">
                    {certificate.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm font-medium mb-2 line-clamp-1">
                  {certificate.issuer}
                </p>
                <div className="flex items-center text-slate-500 text-xs mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{certificate.date}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {certificate.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
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

                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>{certificate.skills.length} skills</span>
                  {certificate.verificationUrl && (
                    <span className="text-lime-300">Verified</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCertificates.length === 0 && (
          <motion.div
            className="tech-panel mt-8 py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Search size={48} className="mx-auto text-slate-500 mb-4" />
            <p className="text-slate-300 text-lg mb-2">
              No certificates found matching your criteria
            </p>
            <p className="text-slate-500 text-sm mb-4">
              Try different search terms or clear filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-lime-300 hover:text-cyan-200 font-medium"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={onBack}
            className="tech-button"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio Home</span>
          </button>
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
                    <div className="mb-6 overflow-hidden border border-white/10">
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

export default AllCertificates;
