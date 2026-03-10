'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { BorderBeam } from '../ui/border-beam';
import ScrollReveal from '../animations/scroll-reveal';

// ─── Constants ───────────────────────────────────────────────────────────────

const CATEGORIES = ['All', 'Deep Learning', 'Machine Learning', 'Computer Vision', 'Web Development'];

const INITIAL_VISIBLE = 3;

const STATUS_COLORS: Record<string, string> = {
  Completed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
  'In Progress': 'bg-amber-500/20 text-amber-400 border-amber-500/40',
  Archived: 'bg-slate-500/20 text-slate-400 border-slate-500/40',
};

const STATUS_DOT: Record<string, string> = {
  Completed: 'bg-emerald-400',
  'In Progress': 'bg-amber-400',
  Archived: 'bg-slate-400',
};

// ─── Icon SVGs (inline, no dep) ───────────────────────────────────────────────

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .39 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
  </svg>
);

const IconExternalLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconInfo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0 mt-0.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  // Reset pagination when filter changes
  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  }, []);

  return (
    <>
      <section id="projects" className="relative py-32 px-4 overflow-hidden">
        {/* Ambient background blobs */}
        <div className="absolute top-1/4 -left-64 w-[700px] h-[700px] rounded-full bg-purple-700/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] rounded-full bg-blue-700/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── Section Header ───────────────────────────────────────────── */}
          <ScrollReveal type="blur-in" className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-purple-400 mb-4">My Work</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A showcase of my AI/ML projects featuring deep learning, computer vision, and full-stack web applications
            </p>
          </ScrollReveal>

          {/* ── Category Filter Tabs ─────────────────────────────────────── */}
          <ScrollReveal type="fade-up" delay={0.1} className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-[0_0_20px_rgba(147,51,234,0.4)]'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </ScrollReveal>

          {/* ── Result Count ─────────────────────────────────────────────── */}
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-slate-400 text-sm mb-10"
          >
            Showing{' '}
            <span className="text-white font-semibold">{visible.length}</span>{' '}
            of{' '}
            <span className="text-white font-semibold">{filtered.length}</span>{' '}
            projects
          </motion.p>

          {/* ── Projects Grid ─────────────────────────────────────────────── */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onInfoClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── View More / Less Button ───────────────────────────────────── */}
          {filtered.length > INITIAL_VISIBLE && (
            <ScrollReveal type="scale-up" delay={0.2} className="text-center mt-14">
              <motion.button
                onClick={() => setShowAll((prev) => !prev)}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                id="projects-view-all-btn"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base gradient-border glow-blue transition-all"
              >
                <motion.span
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconChevronDown />
                </motion.span>
                {showAll ? 'Show Less' : `View All ${filtered.length} Projects`}
                <motion.span
                  animate={{ rotate: showAll ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconChevronDown />
                </motion.span>
              </motion.button>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── Project Detail Modal ─────────────────────────────────────────── */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
  onInfoClick: () => void;
}

function ProjectCard({ project, index, onInfoClick }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 48, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 48, scale: 0.95 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-slate-900/60 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 shadow-xl hover:shadow-purple-900/20"
      style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.4)' }}
    >
      {/* Hover shine overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 rounded-2xl"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(147,51,234,0.07) 0%, transparent 65%)' }}
      />

      {/* ── Image / Banner ─────────────────────────────────────────────── */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex-shrink-0">
        {/* Gradient mesh bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-900/20 to-blue-900/40" />

        {/* Emoji icon centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-8xl select-none"
            whileHover={{ scale: 1.18, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {project.image}
          </motion.span>
        </div>

        {/* Year badge */}
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/10">
          {project.year}
        </span>

        {/* Status badge */}
        <span className={`absolute top-3 right-3 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${STATUS_COLORS[project.status]}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[project.status]} ${project.status === 'In Progress' ? 'animate-pulse' : ''}`} />
          {project.status}
        </span>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      {/* ── Card Body ──────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6">

        {/* Category chip */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.slice(0, 1).map((cat) => (
            <span key={cat} className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25">
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white leading-snug mb-2 group-hover:text-gradient transition-all line-clamp-2">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-md font-medium bg-white/5 border border-white/10 text-slate-300 hover:border-purple-500/40 hover:text-purple-300 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs rounded-md font-medium bg-white/5 border border-white/10 text-slate-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-3 gap-2 mt-auto">
          {/* Code / GitHub */}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-code-btn`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex flex-col items-center gap-1 py-2.5 rounded-xl font-semibold text-xs transition-all bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white shadow-[0_4px_12px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_20px_rgba(147,51,234,0.5)]"
          >
            <IconGithub />
            <span>Code</span>
          </motion.a>

          {/* Live Demo */}
          {project.liveUrl && project.liveUrl !== project.githubUrl ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-${project.id}-live-btn`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex flex-col items-center gap-1 py-2.5 rounded-xl font-semibold text-xs transition-all bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_4px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)]"
            >
              <IconExternalLink />
              <span>Live</span>
            </motion.a>
          ) : (
            <button
              disabled
              className="flex flex-col items-center gap-1 py-2.5 rounded-xl font-semibold text-xs bg-white/5 text-slate-500 border border-white/8 cursor-not-allowed"
            >
              <IconExternalLink />
              <span>Live</span>
            </button>
          )}

          {/* Info */}
          <motion.button
            onClick={onInfoClick}
            id={`project-${project.id}-info-btn`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex flex-col items-center gap-1 py-2.5 rounded-xl font-semibold text-xs transition-all bg-gradient-to-br from-pink-600 to-rose-700 hover:from-pink-500 hover:to-rose-600 text-white shadow-[0_4px_12px_rgba(236,72,153,0.3)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.5)]"
          >
            <IconInfo />
            <span>Info</span>
          </motion.button>
        </div>
      </div>

      <BorderBeam duration={14} size={160} />
    </motion.div>
  );
}

// ─── Project Detail Modal ─────────────────────────────────────────────────────

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-md cursor-pointer"
            aria-label="Close project details"
          />

          {/* Modal Panel */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30, mass: 0.8 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            id="project-detail-modal"
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl shadow-2xl pointer-events-auto"
              style={{ boxShadow: '0 30px 100px rgba(0,0,0,0.7), 0 0 80px rgba(147,51,234,0.12)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated gradient border top strip */}
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_100%] animate-gradient" />

              {/* ── Modal Header ──────────────────────────────────────────── */}
              <div className="relative p-7 pb-0">
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  id="modal-close-btn"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all"
                  aria-label="Close modal"
                >
                  <IconClose />
                </motion.button>

                {/* Icon + Status row */}
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-900/60 to-blue-900/60 border border-white/10 flex items-center justify-center text-5xl">
                    {project.image}
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${STATUS_COLORS[project.status]}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[project.status]} ${project.status === 'In Progress' ? 'animate-pulse' : ''}`} />
                        {project.status}
                      </span>
                      <span className="text-xs font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        {project.year}
                      </span>
                      {project.category.map((cat) => (
                        <span key={cat} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h2
                      id="modal-title"
                      className="text-xl font-bold text-white leading-snug pr-10"
                    >
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/8 mb-5" />
              </div>

              {/* ── Modal Body ────────────────────────────────────────────── */}
              <div className="px-7 pb-7 space-y-6">

                {/* Long description */}
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-2">Overview</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.longDescription || project.detailedDescription}
                  </p>
                </div>

                {/* Key Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Key Metrics</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center p-3 rounded-xl bg-white/4 border border-white/8">
                          <p className="text-lg font-bold text-gradient leading-none mb-1">{m.value}</p>
                          <p className="text-xs text-slate-400">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights / Achievements */}
                {project.highlights && project.highlights.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * i, duration: 0.3 }}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <span className="text-emerald-400 mt-0.5">
                            <IconCheck />
                          </span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.04 * i, duration: 0.3 }}
                        className="px-3 py-1 text-xs rounded-full font-medium bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/25 text-blue-300 hover:border-purple-500/50 hover:text-purple-300 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-white/8">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`modal-${project.id}-github-btn`}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white shadow-[0_4px_16px_rgba(147,51,234,0.35)] hover:shadow-[0_6px_24px_rgba(147,51,234,0.55)] transition-all"
                  >
                    <IconGithub />
                    View Code
                  </motion.a>

                  {project.liveUrl && project.liveUrl !== project.githubUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`modal-${project.id}-live-btn`}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_4px_16px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_24px_rgba(59,130,246,0.55)] transition-all"
                    >
                      <IconExternalLink />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
