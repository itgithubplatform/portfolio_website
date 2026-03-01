'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/projects';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/scroll-reveal';
import { BorderBeam } from '../ui/border-beam';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <ScrollReveal type="blur-in" className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies
          </p>
        </ScrollReveal>

        {/* Projects grid with staggered cascade */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={project.id} type="fade-up">
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal type="scale-up" delay={0.3} className="text-center mt-16">
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.07, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-border px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 glow-blue"
          >
            <span className="text-2xl">🎯</span>
            View All Projects
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(6px)' }}
      animate={isInView
        ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, y: 50, scale: 0.95, filter: 'blur(6px)' }
      }
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10 }}
      className="gradient-border p-8 h-full card-3d group relative overflow-hidden"
    >
      {/* Reveal shine on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(147,51,234,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Project icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="text-7xl mb-6 inline-block"
      >
        {project.image}
      </motion.div>

      {/* Title */}
      <h3 className="text-3xl font-bold mb-3 group-hover:text-gradient transition-all">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 text-lg mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Tech tags — staggered in */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ delay: 0.4 + i * 0.06, duration: 0.35 }}
            whileHover={{ scale: 1.12, y: -2 }}
            className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="glass px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 border border-purple-500/30 hover:border-purple-500/60 transition-all"
        >
          <span className="text-xl">📂</span>
          GitHub
        </motion.a>

        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 glow-purple transition-all"
          >
            <span className="text-xl">🚀</span>
            Live Demo
          </motion.a>
        )}
      </div>

      <BorderBeam duration={12} size={150} />
    </motion.div>
  );
}
