import React, { useState } from 'react';
import cert1 from '../assets/sertifikat/cert1.png';
import cert2 from '../assets/sertifikat/cert2.png';
import cert3 from '../assets/sertifikat/cert3.png';
import cert4 from '../assets/sertifikat/cert4.png';
import cert5 from '../assets/sertifikat/cert5.png';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;

  downloadUrl: string;
  category: string;
  image: string;
};

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: 'Introduction to Networks',
      issuer: 'Meta',
      date: '2024',
      description: 'Certificate for completing the React Developer program.',
  
      downloadUrl: 'https://example.com/download/meta-123456',
      category: 'Frontend',
      image: cert1,
    },
    {
      title: 'Lomba Web Statis',
      issuer: 'Meta',
      date: '2024',
      description: 'LOMBA WEB STATIS TINGKAT MAHASISWA FESTIVAL OF INOVATION III',

      downloadUrl: 'https://example.com/download/meta-123456',
      category: 'Frontend',
      image: cert4,
    },
    {
      title: 'Desain UI/UX',
      issuer: 'Meta',
      date: '2024',
      description: 'class UI/UX Research and Design by MySkill x Lion Parcel',
      
      downloadUrl: 'https://example.com/download/meta-123456',
      category: 'Frontend',
      image: cert5,
    },
    {
      title: 'Class pemrograman C++',
      issuer: 'Meta',
      date: '2024',
      description: 'Certificate for completing the React Developer program.',
      

      downloadUrl: 'https://example.com/download/meta-123456',
      category: 'Frontend',
      image: cert3,
    },
    {
      title: 'Dcoding Pemrograman Dengan Java',
      issuer: 'Meta',
      date: '2024',
      description: 'Certificate for completing the React Developer program.',
  
      downloadUrl: 'https://example.com/download/meta-123456',
      category: 'Frontend',
      image: cert2,
    },
  ];

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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              onClick={() => openModal(certificate)}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={certificate.image || 'https://via.placeholder.com/400x200'}
                  alt={certificate.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {certificate.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{certificate.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{certificate.issuer}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{certificate.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {certificate.description.length > 100
                    ? `${certificate.description.slice(0, 100)}...`
                    : certificate.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-2xl w-full mx-4 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedCertificate.title}</h3>
              <img
                src={selectedCertificate.image || 'https://via.placeholder.com/400x200'}
                alt={selectedCertificate.title}
                className="w-full object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{selectedCertificate.issuer}</p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">{selectedCertificate.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedCertificate.description}</p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Credential ID</p>
                <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{certificates.length}+</div>
            <div className="text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Verified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;