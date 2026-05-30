import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',  // Changed from 'name' to match EmailJS template
    user_email: '', // Changed from 'email' to match EmailJS template
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStateMessage('EmailJS configuration is missing. Please check .env file.');
      setIsSubmitting(false);
      setTimeout(() => setStateMessage(null), 5000);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then(
        () => { // Removed unused 'result' parameter
          setStateMessage('Message sent successfully!');
          setIsSubmitting(false);
          setFormData({ 
            user_name: '', 
            user_email: '', 
            subject: '', 
            message: '' 
          });
          setTimeout(() => setStateMessage(null), 5000);
        },
        (error) => {
          setStateMessage('Failed to send message. Please try again.');
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
          console.error('EmailJS error:', error.text);
        }
      );
  };

  return (
    <section id="contact" className="site-section">
      <div className="section-grid" />
      <div className="section-glow" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-eyebrow">05 / Open Channel</p>
            <h2 className="section-title">Let's Work Together</h2>
          </div>
          <p className="section-copy mt-6 max-w-3xl md:mt-0">
            Ready to discuss your next project? I'd love to hear from you and explore how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="mb-8 font-mono text-sm font-bold uppercase tracking-[0.2em] text-white">Get In Touch</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="border border-cyan-300/30 bg-cyan-300/10 p-3">
                  <Mail className="text-cyan-100" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-slate-300">fatkhanafandi12@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
              </div>
              <div className="flex items-center space-x-4">
                <div className="border border-cyan-300/30 bg-cyan-300/10 p-3">
                  <MapPin className="text-cyan-100" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-slate-300">Bogor, Indonesia</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zxz404"
                  className="border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition-colors duration-200 hover:border-lime-300/60 hover:text-lime-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/fatkhan-afandi-9384272b1/"
                  className="border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition-colors duration-200 hover:border-lime-300/60 hover:text-lime-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/ftkhn__/"
                  className="border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition-colors duration-200 hover:border-lime-300/60 hover:text-lime-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

           {/* Contact Form */}
           <div className="tech-panel p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"  // Changed to match state and EmailJS
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="tech-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"  // Changed to match state and EmailJS
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="tech-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="tech-input"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="tech-input resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="tech-button w-full py-4 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
              {stateMessage && <p className="text-center text-slate-300">{stateMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
