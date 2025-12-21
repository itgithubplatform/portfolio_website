import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import ClientLayout from '@/components/ui/client-layout';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Benu Gopal Kanjilal | AI/ML & Full Stack Developer',
    template: '%s | Benu Gopal Kanjilal'
  },
  description: 'B.Tech 3rd Year student specializing in Artificial Intelligence, Machine Learning, and Full-Stack Web Development. Experienced in Python, React, Next.js, TensorFlow, and GenAI applications. View my portfolio of AI/ML projects and web applications.',
  keywords: [
    'Benu Gopal Kanjilal',
    'AI Developer',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Python Developer',
    'React Developer',
    'Next.js Developer',
    'GenAI',
    'TensorFlow',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'Portfolio',
    'B.Tech CSE',
    'The Neotia University',
    'Web Development',
    'AI Projects',
    'Machine Learning Projects'
  ],
  authors: [{ name: 'Benu Gopal Kanjilal' }],
  creator: 'Benu Gopal Kanjilal',
  publisher: 'Benu Gopal Kanjilal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://benugopal.vercel.app',
    siteName: 'Benu Gopal Kanjilal Portfolio',
    title: 'Benu Gopal Kanjilal | AI/ML & Full Stack Developer',
    description: 'B.Tech student specializing in AI, ML, and Full-Stack Development. Explore my portfolio of innovative AI/ML projects and web applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Benu Gopal Kanjilal - AI/ML & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benu Gopal Kanjilal | AI/ML & Full Stack Developer',
    description: 'B.Tech student specializing in AI, ML, and Full-Stack Development. Check out my portfolio!',
    creator: '@BenuKanjil55010',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Add after creating Google Search Console
  },
  alternates: {
    canonical: 'https://benugopal.vercel.app',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
