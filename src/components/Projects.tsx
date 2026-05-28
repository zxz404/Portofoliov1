import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projectsData, Project } from './ProjectsData';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
  onViewAll: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect, onViewAll }) => {
  const featuredProjects = [...projectsData]
    .sort((a, b) => b.year - a.year || b.id - a.id)
    .slice(0, 4);

  return (
    <section id="projects" className="site-section">
      <div className="section-grid" />
      <div className="section-glow" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-eyebrow">03 / Build Log</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <p className="section-copy mt-6 max-w-3xl md:mt-0">
            A showcase of my best work demonstrating various skills and technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="tech-panel tech-panel-hover group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => onProjectSelect(project)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover grayscale-[0.2] contrast-110 group-hover:scale-[1.04] transition-transform duration-500"
                  whileHover={{ scale: 1.03 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/20 to-transparent opacity-80 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <div className="border border-lime-300/40 bg-black/50 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-lime-200 backdrop-blur-sm">
                      Click to view details
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="tech-chip"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tech-chip-muted">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    disabled
                    onClick={(e) => e.stopPropagation()}
                    className="flex cursor-not-allowed items-center space-x-2 text-slate-600 font-medium"
                    title="Live demo belum tersedia"
                  >
                    <ExternalLink size={16} />
                    <span>Demo unavailable</span>
                  </button>
                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-slate-400 hover:text-lime-300 font-medium transition-colors"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
            <span className="text-lg">View All Projects ({projectsData.length})</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
