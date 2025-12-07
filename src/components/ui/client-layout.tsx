'use client';

import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import AnimatedBackground from './animated-background';
import FloatingElements from '../animations/floating-elements';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AnimatedBackground />
      <FloatingElements />
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
