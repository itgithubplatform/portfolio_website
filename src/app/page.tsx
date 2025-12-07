'use client';

import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import ProjectsGrid from '@/components/sections/projects-grid';
import Testimonials from '@/components/sections/testimonials';
import ContactForm from '@/components/sections/contact-form';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsGrid />
      <Testimonials />
      <ContactForm />
    </>
  );
}

