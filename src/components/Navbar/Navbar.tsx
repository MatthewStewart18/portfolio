'use client'

// src/components/Navbar/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="w-full px-6 md:px-16 pt-10">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* Location */}
        <p className="text-base">
        Based in<br />
        Belfast, United Kingdom<br />
        Monaghan, Republic of Ireland
        </p>

        {/* Email - Hidden on mobile */}
        <div className="hidden lg:block">
          <a href="/resume" className="group">
            Link to my<br/>
            Resume
            <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
          </a>
        </div>

        {/* Theme Toggle - Hidden on mobile */}
        <div className="hidden lg:block">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="group"
          >
            Switch the<br/>
            Color Mode
            <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
          </button>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex gap-8">
          <Link href="#about" className="text-sm font-medium hover:opacity-80">ABOUT</Link>
          <Link href="#experience" className="text-sm font-medium hover:opacity-80">EXPERIENCE</Link>
          <Link href="#projects" className="text-sm font-medium hover:opacity-80">PROJECTS</Link>
          <Link href="#contact" className="text-sm font-medium hover:opacity-80">CONTACT</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-sm font-medium">
          MENU
          <div className="h-[2px] w-full bg-current transform origin-left transition-transform" />
        </button>
      </div>
    </header>
  );
}