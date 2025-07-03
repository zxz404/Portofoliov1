// import React from "react";
import ProfileImage from "../assets/profile.jpg";
import { Code, Palette, Users, Target } from "lucide-react";

const About = () => {
  const characteristics = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Committed to writing clean, efficient code and staying current with industry best practices.",
    },
    {
      icon: Palette,
      title: "Creative Vision",
      description: "Bringing innovative design solutions that balance aesthetics with functionality.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Excellent team player with strong communication skills and leadership abilities.",
    },
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Meticulous attention to detail ensuring high-quality deliverables every time.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Get to know more about my background, skills, and what drives me to create exceptional work.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With a background in Computer Science and a passion for web development, I've developed a unique perspective that combines technical expertise with creative problem-solving. My educational foundation and professional experience have shaped me into a versatile
              professional who thrives in dynamic environments.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I believe in continuous learning and staying ahead of industry trends. Whether working independently or as part of a team, I bring enthusiasm, dedication, and a commitment to excellence to every project.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My goal is to create solutions that not only meet technical requirements but also provide exceptional user experiences and drive meaningful results for businesses and individuals alike.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
              <img src={ProfileImage} alt="Profile" className="w-full h-80 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characteristics.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors duration-200">
                <item.icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
