import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/10 bg-[#080a0f] text-slate-100">
      <div className="section-grid" />
      <motion.div
        className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent"
        animate={{ opacity: [0.25, 1, 0.25], x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="section-glow" />
      <div className="absolute -left-28 bottom-20 h-72 w-72 rounded-full border border-lime-300/20 bg-lime-300/5 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      
        {/* Heading */}
        <motion.h1 initial={{ opacity: 0, y: 34, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} className="mb-6 text-5xl font-black uppercase leading-none text-white md:text-7xl">
          <span className="block">Hi, I'm</span>
          <span className="inline-block text-lime-300">
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
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mx-auto mb-8 max-w-3xl text-xl text-slate-300 md:text-2xl">
          A passionate professional creating amazing experiences through innovative solutions. Detail-oriented, collaborative, and always pushing the boundaries of what's possible.
        </motion.p>

        {/* Buttons */}
        <motion.div className="mb-12 flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <a href="#contact" className="tech-button">
            Get In Touch
          </a>
          <a
            href="#projects"
            className="tech-button-secondary"
          >
            View My Work
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex justify-center space-x-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}>
          <a href="https://github.com/zxz404" className="text-slate-400 transition-colors duration-200 hover:text-lime-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/fatkhan-afandi-9384272b1/" className="text-slate-400 transition-colors duration-200 hover:text-lime-300">
            <Linkedin size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fatkhanafandi12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors duration-200 hover:text-lime-300 no-underline"
            title="Kirim email ke fatkhanafandi12@gmail.com via Gmail"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Bouncing Arrow */}
        <div className="absolute bottom-8 inset-x-0 mx-auto w-fit animate-bounce">
          <ArrowDown className="text-lime-300" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
