// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matthew Stewart  - Portfolio',
  description: 'Aspiring software engineer with a passion for development and creativity with 1 year experience in industry.',
  openGraph: {
    title: 'Matthew Stewart - Portfolio',
    description: 'Aspiring software engineer with a passion for development and creativity with 1 year experience in industry.',
    url: 'https://mstewart.dev',
    siteName: 'Matthew Stewart - Portfolio',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Stewart - Portfolio',
    description: 'Aspiring software engineer with a passion for development and creativity with 1 year experience in industry.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}