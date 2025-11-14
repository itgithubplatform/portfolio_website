'use client';

import ContactForm from '@/components/sections/contact-form';
import FadeIn from '@/components/animations/fade-in';
import Image from 'next/image';
import { motion } from 'framer-motion';
import githubIcon from '@/components/icons/github.svg';
import linkedinIcon from '@/components/icons/inkedin.svg';
import twitterIcon from '@/components/icons/twitter.svg';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/itgithubplatform', icon: githubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/benug25', icon: linkedinIcon },
  { name: 'Twitter', url: 'https://x.com/BenuKanjil55010', icon: twitterIcon },
];

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-5xl font-bold text-center mb-8">
            Contact <span className="text-gradient">Me</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </FadeIn>

        <ContactForm />

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">Or connect with me on social media</p>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="text-sm text-slate-300">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
