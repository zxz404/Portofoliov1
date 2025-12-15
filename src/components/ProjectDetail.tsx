import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  CheckCircle,
  ChevronLeft, 
  ChevronRight,
  X,
  Layers,
  Code,
  Layout
} from 'lucide-react';
import { Project } from './ProjectsData';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      {/* Main Detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Back Button */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Projects</span>
            </button>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
              <Calendar size={16} />
              <span className="font-medium">{project.year}</span>
            </div>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Layout className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Image Slider */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[500px] object-cover cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => setIsImageModalOpen(true)}
              />
              
              {/* Navigation Buttons */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="flex space-x-3 mt-6 overflow-x-auto py-4 px-2">
                {project.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-300 dark:ring-blue-600'
                        : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Features & Technologies */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Key Features
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Code className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Technologies Used
                  </h2>
                </div>
                <div className="space-y-3">
                  {project.technologies.map((tech, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <Layers className="text-blue-600 dark:text-blue-400" size={18} />
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 max-w-md text-right">
                        {tech.purpose}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Tags */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Technologies Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-blue-600 dark:bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <ExternalLink size={20} />
                  <span className="text-lg">View Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-gray-800 dark:bg-gray-700 text-white py-4 rounded-xl font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Github size={20} />
                  <span className="text-lg">View Source Code</span>
                </a>
              </div>

              {/* Project Info */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Year</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Features</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.features.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Images</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.images.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Technologies</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.technologies.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Image Modal */}
      {isImageModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-95 z-[100] flex items-center justify-center"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsImageModalOpen(false);
            }}
            className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
          >
            <X size={28} />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Fullscreen`}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft size={30} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition-colors backdrop-blur-sm"
                >
                  <ChevronRight size={30} />
                </button>
              </>
            )}

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-5 py-2 rounded-full text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectDetail;