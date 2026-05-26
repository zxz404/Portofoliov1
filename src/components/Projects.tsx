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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work demonstrating various skills and technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 group cursor-pointer border border-stone-200 dark:border-gray-800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => onProjectSelect(project)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  whileHover={{ scale: 1.03 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
                      Click to view details
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 rounded text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-stone-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-sm">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    disabled
                    onClick={(e) => e.stopPropagation()}
                    className="flex cursor-not-allowed items-center space-x-2 text-gray-400 dark:text-gray-600 font-medium"
                    title="Live demo belum tersedia"
                  >
                    <ExternalLink size={16} />
                    <span>Demo unavailable</span>
                  </button>
                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
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
            className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors duration-200"
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
