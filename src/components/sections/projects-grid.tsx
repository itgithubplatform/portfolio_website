'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Card from '../ui/card';
import Button from '../ui/button';
import FadeIn from '../animations/fade-in';

export default function ProjectsGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Card>
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button size="sm" href={project.githubUrl}>
                    GitHub
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" variant="outline" href={project.liveUrl}>
                      Live Demo
                    </Button>
                  )}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
