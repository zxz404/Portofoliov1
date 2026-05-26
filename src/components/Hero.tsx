import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-gray-950 relative overflow-hidden border-b border-stone-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="block">Hi, I'm</span>
          <span className="text-blue-700 dark:text-blue-400 inline-block">
            <Typewriter
              options={{
                strings: ["Fatkhan Afandi"],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: "|",
              }}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          A passionate professional creating amazing experiences through innovative solutions. Detail-oriented, collaborative, and always pushing the boundaries of what's possible.
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex justify-center space-x-6 mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <a href="#contact" className="bg-gray-900 dark:bg-white text-white dark:text-gray-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors duration-200">
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-700 dark:hover:border-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
          >
            View My Work
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex justify-center space-x-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}>
          <a href="https://github.com/zxz404" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/fatkhan-afandi-9384272b1/" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200">
            <Linkedin size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fatkhanafandi12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 no-underline"
            title="Kirim email ke fatkhanafandi12@gmail.com via Gmail"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Bouncing Arrow */}
        <div className="absolute bottom-8 inset-x-0 mx-auto w-fit animate-bounce">
          <ArrowDown className="text-gray-600 dark:text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
