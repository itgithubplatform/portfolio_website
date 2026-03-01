'use client';

import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import ProjectsGrid from '@/components/sections/projects-grid';
import ContactForm from '@/components/sections/contact-form';
import TechMarquee from '@/components/ui/tech-marquee';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Scrolling tech marquee divider after hero */}
      <TechMarquee />

      <About />
      <Skills />
      <Experience />
      <ProjectsGrid />
      <ContactForm />
    </>
  );
}
