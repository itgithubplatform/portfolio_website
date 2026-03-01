'use client';

import { motion } from 'framer-motion';
import Typewriter from '../animations/typewriter';
import { RippleButton } from '../ui/ripple-button';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number }>>([]);

  useEffect(() => {
    const arr = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 20,
    }));
    setParticles(arr);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20"
    >
      {/* Floating particles */}
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{ left: p.left, animationDelay: `${p.delay}s` }}
          />
        ))}
      </div>

      {/* Ambient left glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Ambient right glow */}
      <div
        className="pointer-events-none absolute -right-40 top-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ─── MAIN TWO-COLUMN GRID ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-28">

        {/* ──── LEFT COLUMN ──── */}
        <div className="flex flex-col gap-6">

          {/* Greeting tag */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-slate-400"
          >
            👋 &nbsp; Hello There, Welcome to My Site
          </motion.p>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              I&apos;m{' '}
              <span className="text-gradient">Benu Gopal</span>
            </h1>
          </motion.div>

          {/* Animated role line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold h-12 flex items-center"
          >
            <Typewriter
              texts={[
                'AI & ML Developer 🤖',
                'Full Stack Developer 💻',
                'GenAI Enthusiast ⚡',
                'Problem Solver 🚀',
              ]}
            />
          </motion.div>

          {/* Sub role / description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            B.Tech 3rd Year Student specializing in{' '}
            <span className="text-purple-400 font-semibold">Artificial Intelligence</span>,{' '}
            <span className="text-blue-400 font-semibold">Machine Learning</span> &{' '}
            <span className="text-pink-400 font-semibold">Web Development</span>.
            Building intelligent solutions that make an impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center mt-2"
          >
            {/* Primary — See Portfolio */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="hero-btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm md:text-base text-white"
            >
              <span>🚀</span>
              See Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>

            {/* Secondary — Contact Me */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="hero-btn-secondary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm md:text-base text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </motion.a>


          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-4 mt-4"
          >
            <span className="text-xs text-slate-600 uppercase tracking-widest">Follow me</span>
            <div className="h-px w-8 bg-slate-700" />

            {/* GitHub */}
            <motion.a
              href="https://github.com/itgithubplatform"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="hero-social-icon group"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-slate-400 group-hover:fill-purple-400 transition-colors" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/benug25"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="hero-social-icon group"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-slate-400 group-hover:fill-blue-400 transition-colors" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>

            {/* Twitter / X */}
            <motion.a
              href="https://x.com/BenuKanjil55010"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="hero-social-icon group"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-slate-400 group-hover:fill-sky-400 transition-colors" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:benugopal2005@gmail.com"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="hero-social-icon group"
              aria-label="Email"
            >
              <svg className="w-5 h-5 fill-slate-400 group-hover:fill-pink-400 transition-colors" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Quick stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            {[
              { val: '8.89', label: 'CGPA', icon: '🎓' },
              { val: '10+', label: 'Projects', icon: '🚀' },
              { val: '3', label: 'Internships', icon: '💼' },
              { val: 'Top 10', label: 'Google Hackathon', icon: '🏆' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full px-4 py-1.5"
              >
                <span className="text-sm">{stat.icon}</span>
                <span className="text-white font-bold text-sm">{stat.val}</span>
                <span className="text-slate-500 text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ──── RIGHT COLUMN — Profile Frame ──── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #9333ea, #ec4899, #3b82f6)',
                filter: 'blur(40px)',
                opacity: 0.45,
                transform: 'scale(1.08)',
              }}
            />

            {/* Animated gradient border frame */}
            <div className="relative hero-profile-frame rounded-3xl p-1">
              {/* Inner card */}
              <div
                className="relative w-80 h-96 xl:w-96 xl:h-[480px] rounded-[22px] overflow-hidden flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(145deg, #0d0d1f 0%, #130d2a 60%, #0d1526 100%)' }}
              >
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(147,51,234,1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(147,51,234,1) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Initials avatar */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 flex flex-col items-center gap-5"
                >
                  {/* Avatar circle */}
                  <div className="relative">
                    <div
                      className="w-36 h-36 xl:w-44 xl:h-44 rounded-full flex items-center justify-center text-5xl xl:text-6xl font-black text-white"
                      style={{
                        background: 'linear-gradient(135deg, rgba(147,51,234,0.6) 0%, rgba(236,72,153,0.5) 50%, rgba(59,130,246,0.5) 100%)',
                        border: '3px solid rgba(255,255,255,0.12)',
                        boxShadow: '0 0 40px rgba(147,51,234,0.5), 0 0 80px rgba(147,51,234,0.2)',
                      }}
                    >
                      BG
                    </div>

                    {/* Orbiting ring 1 */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: '1.5px dashed rgba(147,51,234,0.4)',
                        transform: 'scale(1.25)',
                      }}
                    />
                    {/* Orbiting ring 2 */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: '1.5px dashed rgba(59,130,246,0.3)',
                        transform: 'scale(1.5)',
                      }}
                    />

                    {/* Dot on ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0"
                      style={{ transform: 'scale(1.25)' }}
                    >
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
                        style={{
                          background: '#a855f7',
                          boxShadow: '0 0 10px #a855f7',
                          marginTop: '-5px',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Name & role in frame */}
                  <div className="text-center">
                    <p className="text-white font-bold text-lg tracking-wide">Benu Gopal</p>
                    <p className="text-purple-400 text-sm font-medium mt-0.5">AI/ML · Full Stack Dev</p>
                    <p className="text-slate-500 text-xs mt-1">The Neotia University</p>
                  </div>


                </motion.div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-500/40 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-500/40 rounded-bl-lg" />

                {/* Status badge */}
                <div
                  className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold text-emerald-300"
                  style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Work
                </div>
              </div>
            </div>


          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-purple-500/40 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-purple-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
