import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/Profile.jpeg";
import { Code, Palette, Target, Users } from "lucide-react";

const characteristics = [
  {
    icon: Code,
    title: "Clean Development",
    code: "01",
    description:
      "Building reliable, maintainable interfaces with attention to performance and code quality.",
  },
  {
    icon: Palette,
    title: "User-Focused Design",
    code: "02",
    description:
      "Creating digital experiences that feel clear, modern, and easy to use.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    code: "03",
    description:
      "Communicating clearly, adapting quickly, and contributing well in team environments.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    code: "04",
    description:
      "Turning requirements into practical solutions with thoughtful execution.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28, rotateX: -8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080a0f] py-20 text-slate-100"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(166,255,61,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(61,220,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent"
        animate={{ opacity: [0.35, 1, 0.35], x: ["-12%", "12%", "-12%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-0 top-16 h-40 w-full bg-[linear-gradient(180deg,transparent,rgba(166,255,61,0.08),transparent)]"
        animate={{ y: [-120, 520] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute -right-24 top-20 h-64 w-64 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-2xl" />
      <div className="absolute -left-28 bottom-16 h-72 w-72 rounded-full border border-lime-300/20 bg-lime-300/5 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-14 border-y border-white/10 py-7 text-left md:flex md:items-end md:justify-between md:gap-10"
          initial="hidden"
          whileInView="visible"
          variants={sectionReveal}
          viewport={{ once: true }}
        >
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-lime-300">
              01 / Profile Signal
            </p>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none text-white md:text-6xl">
              About Me
            </h2>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:mt-0 md:text-lg">
            A closer look at my background, working style, and the mindset I
            bring to every project.
          </p>
        </motion.div>

        {/* Profile and Journey */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] gap-12 xl:gap-16 items-start mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionReveal}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3 font-mono text-sm uppercase text-cyan-200">
              <span className="h-px w-10 bg-cyan-300" />
              Learning daily / building with care
            </div>
            <div className="space-y-6 border-l border-white/10 pl-6">
              <motion.p
                className="text-lg leading-8 text-slate-300"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                viewport={{ once: true }}
              >
                I am a web developer with a Computer Science background and a
                strong interest in building clean, responsive, and purposeful
                digital products. I enjoy combining technical structure with
                thoughtful design to create interfaces that are both functional
                and pleasant to use.
              </motion.p>
              <motion.p
                className="text-lg leading-8 text-slate-300"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                viewport={{ once: true }}
              >
                My work is driven by continuous learning, clear communication,
                and attention to detail. Whether working independently or as
                part of a team, I focus on understanding the problem first, then
                turning it into a solution that is simple, scalable, and
                reliable.
              </motion.p>
              <motion.p
                className="text-lg leading-8 text-slate-300"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.28 }}
                viewport={{ once: true }}
              >
                My goal is to keep improving as a developer while delivering
                projects that solve real needs, support business goals, and give
                users a smooth experience from start to finish.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42, rotate: 1.5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative lg:ml-auto w-full"
          >
            <motion.div
              className="absolute -inset-3 border border-lime-300/30"
              animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative mx-auto w-full max-w-[420px] border border-white/15 bg-[#0c1118]/90 p-2 shadow-[0_0_60px_rgba(166,255,61,0.16)] lg:mx-0">
              <div className="mb-2 flex items-center justify-between px-2 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                <span>Fatkhan Afandi</span>
                <span className="text-lime-300">Online</span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                <img
                  src={ProfileImage}
                  alt="Fatkhan Afandi"
                  className="h-full w-full object-cover object-[center_30%] grayscale contrast-125 saturate-75"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0)_0%,rgba(8,10,15,0.18)_48%,rgba(166,255,61,0.18)_50%,rgba(8,10,15,0.18)_52%,rgba(8,10,15,0)_100%)] mix-blend-screen" />
                <div className="absolute inset-0 border border-cyan-200/20" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Characteristics */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          viewport={{ once: true }}
        >
          {characteristics.map((item, index) => (
            <motion.div
              key={index}
              className="group border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-lime-300/60 hover:bg-lime-300/[0.06]"
              variants={cardReveal}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
            >
              <div className="mb-7 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>{item.code}</span>
                <span className="h-px w-10 bg-white/20 transition-colors group-hover:bg-lime-300" />
              </div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center border border-cyan-300/30 bg-cyan-300/10 transition-colors duration-300 group-hover:border-lime-300/70 group-hover:bg-lime-300/10">
                <item.icon
                  className="text-cyan-200 transition-colors duration-300 group-hover:text-lime-300"
                  size={24}
                />
              </div>
              <h4 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-sm leading-6 text-slate-400">
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
