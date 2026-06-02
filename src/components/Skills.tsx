import React from "react";
import { motion } from "framer-motion";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaGitAlt,
  FaDocker,
  FaPhp,
 
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiLaravel,
  SiPostgresql,
 
  SiAdobexd,
  SiTailwindcss,
  SiExpress,
  SiFirebase,

} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";


// Define type for skill level
type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

interface SkillItem {
  name: string;
  level: SkillLevel;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: "Beginner", icon: <FaReact />, color: "text-blue-500" },
        { name: "Next.js", level: "Beginner", icon: <SiNextdotjs />, color: "text-gray-800 dark:text-white" },
        { name: "JavaScript", level: "Advanced", icon: <FaJsSquare />, color: "text-yellow-500" },
        { name: "React Native", level: "Beginner", icon: <TbBrandReactNative />, color: "text-cyan-500" },
        { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss />, color: "text-cyan-400" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: "Advanced", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "Express.js", level: "Intermediate", icon: <SiExpress />, color: "text-gray-600 dark:text-gray-300" },
        { name: "Laravel", level: "Beginner", icon: <SiLaravel />, color: "text-red-500" },
        { name: "PHP", level: "Beginner", icon: <FaPhp />, color: "text-purple-600" },
        { name: "Python", level: "Beginner", icon: <FaPython />, color: "text-blue-400" },
        { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql />, color: "text-blue-700" },
        { name: "Firebase", level: "Beginner", icon: <SiFirebase />, color: "text-yellow-500" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: "Advanced", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "Docker", level: "Beginner", icon: <FaDocker />, color: "text-blue-400" },
        { name: "Figma", level: "Advanced", icon: <FaFigma />, color: "text-purple-500" },
        
      ],
    },
  ];

  const getLevelColor = (level: SkillLevel) => {
    switch (level) {
      case 'Advanced': return 'border-lime-300/40 bg-lime-300/10 text-lime-200';
      case 'Intermediate': return 'border-cyan-300/40 bg-cyan-300/10 text-cyan-100';
      case 'Beginner': return 'border-amber-300/40 bg-amber-300/10 text-amber-100';
      default: return 'border-white/10 bg-white/[0.04] text-slate-300';
    }
  };

  return (
    <section
      id="skills"
      className="site-section-muted"
    >
      <div className="section-grid" />
      <div className="section-glow" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-eyebrow">02 / Capability Map</p>
            <h2 className="section-title">Skills & Expertise</h2>
          </div>
          <p className="section-copy mt-6 max-w-3xl md:mt-0">
            My technical skills categorized by proficiency level
          </p>
          
          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 md:hidden">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-lime-300 mr-2"></div>
              <span className="text-sm text-slate-400">Advanced</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyan-300 mr-2"></div>
              <span className="text-sm text-slate-400">Intermediate</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-300 mr-2"></div>
              <span className="text-sm text-slate-400">Beginner</span>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="tech-panel tech-panel-hover p-6"
              initial={{ opacity: 0, y: 36, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.14, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center border border-white/10 bg-[#080a0f]/80 p-4 transition-all duration-300 hover:border-lime-300/50 hover:bg-lime-300/[0.06]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Icon */}
                    <div className={`text-4xl mb-3 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    
                    {/* Skill Name */}
                    <h4 className="font-semibold text-slate-100 text-center text-sm mb-2">
                      {skill.name}
                    </h4>
                    
                    {/* Level Badge */}
                    <div className={`border px-3 py-1 text-xs font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-slate-500">
            Constantly learning and expanding my skill set with new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
