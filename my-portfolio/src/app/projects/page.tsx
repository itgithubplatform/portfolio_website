'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';
import FadeIn from '@/components/animations/fade-in';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h1 className="text-5xl font-bold text-center mb-8">
            My <span className="text-gradient">Projects</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'ai', 'fullstack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
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
                      Live
                    </Button>
                  )}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
