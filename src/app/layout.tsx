// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matthew Stewart  - Portfolio',
  description: 'A business oriented product engineer with 3+ years of experience working in fintech and proptech industries',
  openGraph: {
    title: 'Matthew Stewart - Portfolio',
    description: 'A business oriented product engineer with 3+ years of experience working in fintech and proptech industries',
    url: 'https://www.andreymitko.com',
    siteName: 'Andrey Mitko - Portfolio',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrey Mitko - Portfolio',
    description: 'A business oriented product engineer with 3+ years of experience working in fintech and proptech industries',
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