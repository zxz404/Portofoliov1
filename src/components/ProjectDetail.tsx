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
        className="site-section min-h-screen pt-24"
      >
        <div className="section-grid" />
        <div className="section-glow" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Back Button */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-lime-300 transition-colors hover:border-lime-300/60"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Projects</span>
            </button>
            <div className="flex items-center space-x-2 border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-400">
              <Calendar size={16} />
              <span className="font-medium">{project.year}</span>
            </div>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="border border-cyan-300/30 bg-cyan-300/10 p-2">
                <Layout className="text-cyan-100" size={24} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase leading-none text-white">
                {project.title}
              </h1>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Image Slider */}
          <div className="mb-16">
            <div className="relative overflow-hidden border border-white/10 bg-[#0b0f16]">
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
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-white/10 bg-black/60 p-3 text-white backdrop-blur-sm transition-colors duration-200 hover:border-lime-300/60 hover:text-lime-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 border border-white/10 bg-black/60 p-3 text-white backdrop-blur-sm transition-colors duration-200 hover:border-lime-300/60 hover:text-lime-300"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 border border-lime-300/30 bg-black/70 px-4 py-2 text-sm text-lime-200 backdrop-blur-sm">
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
                        ? 'border-lime-300 ring-2 ring-lime-300/20'
                        : 'border-transparent hover:border-cyan-300/50'
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
                  <div className="border border-lime-300/30 bg-lime-300/10 p-2">
                    <CheckCircle className="text-lime-300" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
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
                      className="flex items-start space-x-4 border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-lime-300/50 hover:bg-lime-300/[0.06]"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex h-6 w-6 items-center justify-center border border-cyan-300/30 bg-cyan-300/10">
                          <span className="text-cyan-100 text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <span className="text-slate-300 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="border border-cyan-300/30 bg-cyan-300/10 p-2">
                    <Code className="text-cyan-100" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
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
                      className="group flex items-center justify-between border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-lime-300/50 hover:bg-lime-300/[0.06]"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="border border-cyan-300/30 bg-cyan-300/10 p-2">
                          <Layers className="text-cyan-100" size={18} />
                        </div>
                        <span className="font-semibold text-white">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400 max-w-md text-right">
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
              <div className="tech-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Technologies Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition-colors hover:border-lime-300/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  type="button"
                  disabled
                  className="flex w-full cursor-not-allowed items-center justify-center space-x-3 border border-white/10 bg-white/[0.04] py-4 font-semibold text-slate-600"
                  title="Live demo belum tersedia"
                >
                  <ExternalLink size={20} />
                  <span className="text-lg">Live Demo Unavailable</span>
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-button-secondary w-full py-4"
                >
                  <Github size={20} />
                  <span className="text-lg">View Source Code</span>
                </a>
              </div>

              {/* Project Info */}
              <div className="tech-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Year</span>
                    <span className="font-medium text-white">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Features</span>
                    <span className="font-medium text-white">{project.features.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Images</span>
                    <span className="font-medium text-white">{project.images.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Technologies</span>
                    <span className="font-medium text-white">{project.technologies.length}</span>
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
            className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-lg transition-colors z-10"
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
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-lg transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft size={30} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-lg transition-colors backdrop-blur-sm"
                >
                  <ChevronRight size={30} />
                </button>
              </>
            )}

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-5 py-2 rounded text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectDetail;
