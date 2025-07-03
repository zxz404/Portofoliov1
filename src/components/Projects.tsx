import React from 'react';
import P1 from '../assets/Projects/P1.png';
import P2 from '../assets/Projects/P2.png';
import P3 from '../assets/Projects/P3.png';
import P4 from '../assets/Projects/P4.png';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

type Projects = {
  title: string;
  description: string;
  image: string;
};
const Projects = () => {
  const projects = [
    {
      title: 'Biezari Event Organizer ',
      description: 'Biezari event organizer UI is a website that is used to manage events such as referees, participant expenses, income, reports and in the future it will be developed into a dynamic website.',
      image: P1,
      tags: ['PHP','JavaScript','TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Web UMKM',
      description: 'A responsive static website for SMEs, built with HTML and CSS to showcase business profiles and services.',
      image: P2,
      tags: ['HTML','CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Attendece Management System',
      description: 'A powerful attendance tracking system built with Python (Flask) and PostgreSQL. It features an intuitive dashboard with real-time data processing, advanced analytics, and customizable reports. Ideal for businesses and institutions looking to automate and analyze employee attendance efficiently.',
      image: P3,
      tags: ['Python', 'Flask', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Student Admission Decision System',
      description: 'A Laravel-based web application that uses the SMART method to calculate and evaluate student eligibility for junior high school admission, featuring a clean UI/UX and MySQL integration.',
      image: P4,
      tags:  ['Laravel', 'UI/UX', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work demonstrating various skills and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;