'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import FadeIn from '../animations/fade-in';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_demo';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_demo';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'demo_key';

      // If EmailJS is not configured, show demo message
      if (serviceId === 'service_demo') {
        toast.success(
          '📧 Demo Mode: Message would be sent!\n\nTo enable real emails:\n1. Sign up at EmailJS.com\n2. Add credentials to .env.local',
          { duration: 6000 }
        );
        reset();
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: 'Benu Gopal',
        },
        publicKey
      );

      toast.success('✅ Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Email error:', error);
      toast.error('❌ Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-4">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Drop me a message!
            </p>
          </motion.div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info & Social Links */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl"
              >
                <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-slate-300">India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 fill-pink-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a href="mailto:benugopal2005@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      benugopal2005@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-2xl font-bold mb-6">Find Me On</h4>
                <div className="grid grid-cols-2 gap-4">
                  {/* LinkedIn */}
                  <motion.a
                    href="https://linkedin.com/in/benug25"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-2xl text-center group card-3d"
                  >
                    <svg className="w-10 h-10 fill-slate-400 group-hover:fill-blue-400 transition-colors mx-auto mb-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <div className="font-semibold">LinkedIn</div>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/itgithubplatform"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-2xl text-center group card-3d"
                  >
                    <svg className="w-10 h-10 fill-slate-400 group-hover:fill-purple-400 transition-colors mx-auto mb-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <div className="font-semibold">GitHub</div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:benugopal2005@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-2xl text-center group card-3d"
                  >
                    <svg className="w-10 h-10 fill-slate-400 group-hover:fill-pink-400 transition-colors mx-auto mb-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <div className="font-semibold">Email</div>
                  </motion.a>

                  {/* Twitter/X */}
                  <motion.a
                    href="https://x.com/BenuKanjil55010"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-2xl text-center group card-3d"
                  >
                    <svg className="w-10 h-10 fill-slate-400 group-hover:fill-sky-400 transition-colors mx-auto mb-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <div className="font-semibold">Twitter</div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-purple-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register('name')}
                    className={`w-full px-6 py-4 bg-slate-900/50 border-2 ${errors.name ? 'border-red-500' : 'border-slate-700/50'
                      } rounded-xl focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all text-lg`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-purple-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')}
                    className={`w-full px-6 py-4 bg-slate-900/50 border-2 ${errors.email ? 'border-red-500' : 'border-slate-700/50'
                      } rounded-xl focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all text-lg`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-purple-300">
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    {...register('message')}
                    className={`w-full px-6 py-4 bg-slate-900/50 border-2 ${errors.message ? 'border-red-500' : 'border-slate-700/50'
                      } rounded-xl focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all resize-none text-lg`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-5 rounded-xl font-bold text-lg ${isSubmitting
                      ? 'bg-slate-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 glow-purple'
                    } transition-all`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message 🚀'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-12 border-t border-slate-800 text-center"
          >
            <p className="text-slate-400 text-lg mb-4">
              © 2024 Benu Gopal Kanjilal. Built with 💜 using Next.js
            </p>
            <p className="text-slate-500 text-sm">
              Designed to inspire. Developed to perform.
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
