'use client';

import { motion } from 'framer-motion';
import Button from '../ui/button';
import Typewriter from '../animations/typewriter';
import SocialIcons from '../icons/social-icons';
import FadeIn from '../animations/fade-in';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Benu Gopal Kanjilal</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="text-2xl md:text-4xl mb-8 h-12">
            <Typewriter
              texts={['Full Stack Developer', 'AI/ML Developer ', 'GenAI Enthusiatist']}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            I build exceptional digital experiences that make people's lives easier with AI tools.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <Button href="https://drive.google.com/file/d/1ZSmZe-iUzy0MUVteZkByPnbIFbJfSvx6/view?usp=drive_link" target="_blank">
              📄 View Resume
            </Button>
            <Button variant="outline" href="/contact">Contact Me</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
