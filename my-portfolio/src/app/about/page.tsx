'use client';

import FadeIn from '@/components/animations/fade-in';
import Card from '@/components/ui/card';
import TechIcons from '@/components/icons/tech-icons';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-8xl">
                👨💻
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Hi, I'm Alex</h2>
                <p className="text-slate-300 mb-4">
                  I'm a passionate Full Stack Developer with 5+ years of experience building web applications. 
                  I love creating beautiful, functional, and user-friendly digital experiences.
                </p>
                <p className="text-slate-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                  or sharing my knowledge through blog posts and tutorials.
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Card>
            <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Love</h3>
            <TechIcons />
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
