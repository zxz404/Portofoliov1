// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import AllCertificates from './components/AllCertificates';
import ProjectDetail from './components/ProjectDetail';
import { Project } from './components/ProjectsData';

function App() {
  const [viewMode, setViewMode] = useState<'main' | 'allProjects' | 'projectDetail' | 'allCertificates'>('main');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewAllProjects = () => {
    setViewMode('allProjects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllCertificates = () => {
    setViewMode('allCertificates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setViewMode('projectDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setViewMode('allProjects');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setViewMode('main');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'allProjects':
        return (
          <AllProjects 
            onProjectSelect={handleProjectSelect} 
            onBack={handleBackToMain}
          />
        );
      case 'allCertificates':
        return (
          <AllCertificates 
            onBack={handleBackToMain}
          />
        );
      case 'projectDetail':
        return selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onClose={handleBackToProjects} 
          />
        ) : null;
      case 'main':
      default:
        return (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects 
              onProjectSelect={handleProjectSelect}
              onViewAll={handleViewAllProjects}
            />
            <Certificates 
              onViewAll={handleViewAllCertificates}
            />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {renderContent()}
      {viewMode === 'main' && <Footer />}
    </div>
  );
}

export default App;