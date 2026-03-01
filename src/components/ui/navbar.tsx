'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'About', href: '#about', icon: '👤' },
  { name: 'Skills', href: '#skills', icon: '⚡' },
  { name: 'Experience', href: '#experience', icon: '🏢' },
  { name: 'Projects', href: '#projects', icon: '🚀' },
  { name: 'Contact', href: '#contact', icon: '📧' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section tracking
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'nav-scrolled py-2'
            : 'nav-top py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('#home')}
            >
              {/* Logo Icon */}
              <div className="nav-logo-icon relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-90" />
                <span className="relative text-white font-black text-base z-10">BG</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
              </div>
              {/* Logo Text */}
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-wide">Benu Gopal</span>
                <span className="text-gradient text-[10px] font-semibold tracking-widest uppercase">AI/ML · Dev</span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-2 py-1.5 backdrop-blur-xl">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`nav-link relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                        ? 'text-white nav-link-active'
                        : 'text-slate-400 hover:text-slate-100'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/60 to-blue-600/60 border border-white/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              {/* Hire Me button */}
              <motion.a
                href="mailto:benugopal2005@gmail.com"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:flex nav-cta items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Hire Me
              </motion.a>

              {/* Hamburger */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-9 h-9 rounded-xl glass flex flex-col items-center justify-center gap-1 p-2"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-0.5 bg-white rounded-full origin-center transition-all"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="block w-5 h-0.5 bg-white/70 rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-0.5 bg-white/50 rounded-full origin-center transition-all"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-full w-72 z-50 md:hidden mobile-drawer flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-black text-xs">BG</span>
                  </div>
                  <span className="text-white font-semibold text-sm">Navigation</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Drawer Nav Items */}
              <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group ${isActive
                          ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/20 border border-purple-500/30 text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      <span className="text-xl w-8 text-center">{item.icon}</span>
                      <span className="font-medium text-sm">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Drawer Footer */}
              <div className="px-4 py-6 border-t border-white/10 space-y-3">
                <a
                  href="mailto:benugopal2005@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                  Hire Me
                </a>
                <div className="flex justify-center gap-3">
                  {[
                    { href: 'https://github.com/itgithubplatform', label: 'GitHub', icon: 'GH' },
                    { href: 'https://linkedin.com/in/benug25', label: 'LinkedIn', icon: 'LI' },
                    { href: 'https://x.com/BenuKanjil55010', label: 'Twitter', icon: '𝕏' },
                  ].map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white text-xs font-bold transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
