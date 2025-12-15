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
        { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs />, color: "text-gray-800 dark:text-white" },
        { name: "JavaScript", level: "Advanced", icon: <FaJsSquare />, color: "text-yellow-500" },
        { name: "TypeScript", level: "Beginner", icon: <SiTypescript />, color: "text-blue-600" },
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
        { name: "Firebase", level: "Intermediate", icon: <SiFirebase />, color: "text-yellow-500" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: "Advanced", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "Docker", level: "Beginner", icon: <FaDocker />, color: "text-blue-400" },
        { name: "Figma", level: "Advanced", icon: <FaFigma />, color: "text-purple-500" },
        { name: "Adobe XD", level: "Intermediate", icon: <SiAdobexd />, color: "text-pink-500" },
        
      ],
    },
  ];

  const getLevelColor = (level: SkillLevel) => {
    switch (level) {
      case 'Advanced': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Beginner': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical skills categorized by proficiency level
          </p>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Advanced</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Intermediate</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Beginner</span>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow duration-300"
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
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-center text-sm mb-2">
                      {skill.name}
                    </h4>
                    
                    {/* Level Badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
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
          <p className="text-gray-600 dark:text-gray-400 italic">
            Constantly learning and expanding my skill set with new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;