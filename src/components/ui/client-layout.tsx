'use client';

import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import FloatingElements from '../animations/floating-elements';
import dynamic from 'next/dynamic';

const AuroraBackground = dynamic(() => import('../3d/animated-background'), {
  ssr: false,
  loading: () => null,
});

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuroraBackground />
      <FloatingElements />
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
