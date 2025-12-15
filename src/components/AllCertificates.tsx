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
    <section className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Browse all my professional certifications and achievements
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search Certificates
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by title, issuer, description, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredCertificates.length} of {totalCertificates} certificates
            </p>
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
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
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {totalCertificates}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Total Certificates</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {uniqueIssuers}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Organizations</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {categoriesCount}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Categories</div>
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
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={() => openModal(certificate)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      Click to view details
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {certificate.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start mb-3">
                  <Award className="text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-1" size={18} />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
                    {certificate.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2 line-clamp-1">
                  {certificate.issuer}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{certificate.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {certificate.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs"
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

                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>{certificate.skills.length} skills</span>
                  {certificate.verificationUrl && (
                    <span className="text-green-600 dark:text-green-400">Verified</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCertificates.length === 0 && (
          <motion.div
            className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Search size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              No certificates found matching your criteria
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
              Try different search terms or clear filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
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
            className="inline-flex items-center space-x-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
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

export default AllCertificates;