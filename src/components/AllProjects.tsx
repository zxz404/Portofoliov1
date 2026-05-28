import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Search, Filter, X } from 'lucide-react';
import { projectsData, Project } from './ProjectsData';

interface AllProjectsProps {
  onProjectSelect: (project: Project) => void;
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onProjectSelect, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  );

  
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.every(tag => project.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleProjectClick = (project: Project) => {
    onProjectSelect(project);
  };

  return (
    <section className="site-section min-h-screen pt-24">
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
            All Projects
          </h1>
          <p className="section-copy">
            Explore all my projects in one place. Use search and filters to find what you're looking for.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="tech-panel mb-12 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search projects by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="tech-input pl-10"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden whitespace-nowrap border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-300 sm:inline-flex">
                {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''}
              </span>

              <button
                onClick={() => setIsFilterOpen((current) => !current)}
                className={`inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  isFilterOpen || selectedTags.length > 0
                    ? 'border-lime-300 bg-lime-300 text-slate-950'
                    : 'border-white/15 bg-white/[0.03] text-slate-300 hover:border-lime-300/70 hover:text-lime-300'
                }`}
              >
                <Filter size={16} />
                <span>Filters</span>
                {selectedTags.length > 0 && (
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                    {selectedTags.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {selectedTags.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {selectedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className="inline-flex items-center gap-2 border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-100 hover:border-lime-300/50"
                >
                  <span>{tag}</span>
                  <X size={14} />
                </button>
              ))}

              <button
                onClick={() => setSelectedTags([])}
                className="px-2 py-1 text-sm font-medium text-slate-500 hover:text-lime-300"
              >
                Clear all
              </button>
            </div>
          )}

          {isFilterOpen && (
            <div className="mt-5 border-t border-white/10 pt-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">
                  Tags
                </span>
                <span className="text-sm text-slate-500">
                  Select one or more
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTags([])}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                    selectedTags.length === 0
                      ? 'border-lime-300 bg-lime-300 text-slate-950'
                      : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-lime-300/60 hover:text-lime-300'
                  }`}
                >
                  All projects
                </button>
              {allTags.map((tag: string) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                    selectedTags.includes(tag)
                      ? 'border-lime-300 bg-lime-300 text-slate-950'
                      : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-lime-300/60 hover:text-lime-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
              </div>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="tech-panel tech-panel-hover group cursor-pointer overflow-hidden"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.2] contrast-110 group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <div className="border border-lime-300/40 bg-black/50 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-lime-200 backdrop-blur-sm">
                      Click to view details
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="border border-lime-300/40 bg-lime-300 px-3 py-1 text-xs font-semibold text-slate-950">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      disabled
                      onClick={(e) => e.stopPropagation()}
                      className="flex cursor-not-allowed items-center space-x-2 text-slate-600"
                      title="Live demo belum tersedia"
                    >
                      <ExternalLink size={18} />
                    </button>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-slate-400 hover:text-lime-300 transition-colors"
                      title="Source Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  <span className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                    {project.features.length} features
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="tech-panel mt-8 py-16 text-center"
          >
            <Search size={48} className="mx-auto text-slate-500 mb-4" />
            <p className="text-slate-300 text-lg mb-2">
              No projects found matching your criteria
            </p>
            <p className="text-slate-500 text-sm">
              Try different search terms or clear filters
            </p>
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="mt-4 text-lime-300 hover:text-cyan-200 font-medium"
              >
                Clear filters
              </button>
            )}
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
      </div>
    </section>
  );
};

export default AllProjects;
