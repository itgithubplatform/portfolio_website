'use client';

import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import ProjectsGrid from '@/components/sections/projects-grid';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <ProjectsGrid />
    </>
  );
}
