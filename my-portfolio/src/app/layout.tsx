import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import ClientLayout from '@/components/ui/client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Benu Gopal  Kanjilal- Portfolio',
  description: 'AI/ML with Full Stack Developer Portfolio',
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
      </body>
    </html>
  );
}
