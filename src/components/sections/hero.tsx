'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/button';
import Typewriter from '../animations/typewriter';
import FadeIn from '../animations/fade-in';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import 3D background to avoid SSR issues
const AnimatedBackground = dynamic(() => import('../3d/animated-background'), {
  ssr: false,
  loading: () => null,
});


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
                href="https://drive.google.com/file/d/1DqPJ6b5QN_0p_umhpAOtpnyx52lQCkvX/view?usp=sharing"
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

        {/* Social Links */}
        <FadeIn delay={1.2}>
          <div className="flex justify-center gap-6 mb-8">
            {/* GitHub */}
            <motion.a
              href="https://github.com/itgithubplatform"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:border-purple-500/50 transition-all group"
            >
              <svg className="w-7 h-7 fill-slate-300 group-hover:fill-purple-400 transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/benug25"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:border-blue-500/50 transition-all group"
            >
              <svg className="w-7 h-7 fill-slate-300 group-hover:fill-blue-400 transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:benugopal2005@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:border-pink-500/50 transition-all group"
            >
              <svg className="w-7 h-7 fill-slate-300 group-hover:fill-pink-400 transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </motion.a>
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

      {/* 3D Animated Background */}
      <AnimatedBackground />
    </section>
  );
}
