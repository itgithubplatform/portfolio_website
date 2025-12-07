'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/button';
import Typewriter from '../animations/typewriter';
import FadeIn from '../animations/fade-in';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 20,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Premium 3D Hero Icon */}
        <FadeIn>
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-12"
          >
            <div className="hero-icon-container float-animation hover-3d">
              {/* Glow Effect */}
              <div className="hero-icon-glow" />

              {/* Main Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 rounded-full overflow-hidden pulse-glow"
                style={{
                  width: '280px',
                  height: '280px',
                  margin: '0 auto'
                }}
              >
                <Image
                  src="/hero-icon.png"
                  alt="AI Core Icon"
                  width={280}
                  height={280}
                  priority
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Orbiting Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-purple-500/20 rounded-full"
                style={{ transform: 'scale(1.2)' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                style={{ transform: 'scale(1.4)' }}
              />
            </div>
          </motion.div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.3}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="text-gradient">Benu Gopal</span>
          </motion.h1>
        </FadeIn>

        {/* Animated Subtitle */}
        <FadeIn delay={0.5}>
          <div className="text-3xl md:text-5xl mb-8 font-semibold h-16 flex items-center justify-center">
            <Typewriter
              texts={[
                'AI & ML Developer 🤖',
                'Full Stack Developer 💻',
                'GenAI Enthusiast ⚡',
                'Problem Solver 🚀'
              ]}
            />
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.7}>
          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            B.Tech 3rd Year Student specializing in{' '}
            <span className="text-purple-400 font-semibold">Artificial Intelligence</span>,{' '}
            <span className="text-blue-400 font-semibold">Machine Learning</span>, and{' '}
            <span className="text-pink-400 font-semibold">Web Development</span>
          </motion.p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.9}>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { number: '20+', label: 'Projects' },
              { number: '5+', label: 'Technologies' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                className="glass px-8 py-4 rounded-2xl hover-3d"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={1.1}>
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a
                href="#projects"
                className="gradient-border px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 glow-purple hover-3d"
              >
                <span className="text-2xl">🚀</span>
                View Projects
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a
                href="https://drive.google.com/file/d/1ZSmZe-iUzy0MUVteZkByPnbIFbJfSvx6/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 hover-3d"
              >
                <span className="text-2xl">📄</span>
                Download Resume
              </a>
            </motion.div>
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <FadeIn delay={1.3}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <div className="text-slate-400 text-sm mb-2">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full mx-auto flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-purple-500 rounded-full"
              />
            </div>
          </motion.div>
        </FadeIn>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
