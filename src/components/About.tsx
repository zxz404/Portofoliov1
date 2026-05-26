import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/Profile.jpeg";
import { Code, Palette, Users, Target } from "lucide-react";

const characteristics = [
  {
    icon: Code,
    title: "Clean Development",
    description:
      "Building reliable, maintainable interfaces with attention to performance and code quality.",
  },
  {
    icon: Palette,
    title: "User-Focused Design",
    description:
      "Creating digital experiences that feel clear, modern, and easy to use.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Communicating clearly, adapting quickly, and contributing well in team environments.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Turning requirements into practical solutions with thoughtful execution.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A closer look at my background, working style, and the mindset I
            bring to every project.
          </p>
        </motion.div>

        {/* Profile and Journey */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] gap-12 xl:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-lg leading-8 text-justify text-gray-600 dark:text-gray-300 mb-6">
              I am a web developer with a Computer Science background and a
              strong interest in building clean, responsive, and purposeful
              digital products. I enjoy combining technical structure with
              thoughtful design to create interfaces that are both functional
              and pleasant to use.
            </p>
            <p className="text-lg leading-8 text-justify text-gray-600 dark:text-gray-300 mb-6">
              My work is driven by continuous learning, clear communication, and
              attention to detail. Whether working independently or as part of a
              team, I focus on understanding the problem first, then turning it
              into a solution that is simple, scalable, and reliable.
            </p>
            <p className="text-lg leading-8 text-justify text-gray-600 dark:text-gray-300">
              My goal is to keep improving as a developer while delivering
              projects that solve real needs, support business goals, and give
              users a smooth experience from start to finish.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:ml-auto w-full"
          >
            <div className="mx-auto lg:mx-0 w-full max-w-[420px] bg-white dark:bg-gray-900 rounded-xl p-2 border border-stone-200 dark:border-gray-800 shadow-sm">
              <div className="aspect-[4/5] bg-stone-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={ProfileImage}
                  alt="Fatkhan Afandi"
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Characteristics */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {characteristics.map((item, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-blue-50 dark:bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors duration-200">
                <item.icon
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
