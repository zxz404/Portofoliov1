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
    <section className="min-h-screen bg-stone-50 dark:bg-gray-950 pt-20 pb-20">
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
            className="flex items-center space-x-2 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore all my projects in one place. Use search and filters to find what you're looking for.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-lg p-5 sm:p-6 border border-stone-200 dark:border-gray-800">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-stone-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden whitespace-nowrap rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300 sm:inline-flex">
                {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''}
              </span>

              <button
                onClick={() => setIsFilterOpen((current) => !current)}
                className={`inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  isFilterOpen || selectedTags.length > 0
                    ? 'border-blue-700 bg-blue-700 text-white dark:border-blue-400 dark:bg-blue-400 dark:text-gray-950'
                    : 'border-stone-300 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-300'
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
                  className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-950"
                >
                  <span>{tag}</span>
                  <X size={14} />
                </button>
              ))}

              <button
                onClick={() => setSelectedTags([])}
                className="px-2 py-1 text-sm font-medium text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300"
              >
                Clear all
              </button>
            </div>
          )}

          {isFilterOpen && (
            <div className="mt-5 border-t border-stone-200 pt-5 dark:border-gray-800">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Tags
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Select one or more
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTags([])}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                    selectedTags.length === 0
                      ? 'border-blue-700 bg-blue-700 text-white dark:border-blue-400 dark:bg-blue-400 dark:text-gray-950'
                      : 'border-stone-200 bg-stone-50 text-gray-700 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-300'
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
                      ? 'border-blue-700 bg-blue-700 text-white dark:border-blue-400 dark:bg-blue-400 dark:text-gray-950'
                      : 'border-stone-200 bg-stone-50 text-gray-700 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-300'
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
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 group cursor-pointer border border-stone-200 dark:border-gray-800"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
                      Click to view details
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-700 text-white text-xs font-semibold rounded">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 bg-stone-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
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
                      className="flex cursor-not-allowed items-center space-x-2 text-gray-400 dark:text-gray-600"
                      title="Live demo belum tersedia"
                    >
                      <ExternalLink size={18} />
                    </button>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      title="Source Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-stone-100 dark:bg-gray-800 px-3 py-1 rounded">
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
            className="text-center py-16 bg-white dark:bg-gray-900 rounded-lg mt-8 border border-stone-200 dark:border-gray-800"
          >
            <Search size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              No projects found matching your criteria
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Try different search terms or clear filters
            </p>
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="mt-4 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
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
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-950 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors duration-200"
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
