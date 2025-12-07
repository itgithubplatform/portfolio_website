'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import FadeIn from '../animations/fade-in';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
              Innovative solutions built with cutting-edge technologies
            </p>
          </motion.div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="gradient-border p-8 h-full card-3d group"
              >
                {/* Project Icon */}
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

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
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
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* View All Projects Button */}
        <FadeIn delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-border px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 glow-blue"
            >
              <span className="text-2xl">🎯</span>
              View All Projects
            </motion.a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

