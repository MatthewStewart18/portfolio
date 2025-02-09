// src/components/Navbar/Navbar.tsx
'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Sun, Moon, ScrollText } from 'lucide-react';

  // FileIcon,      // Another document variant
  // ClipboardList
  // File,          // Simple file icon
  // FileArchive,
  // FileText,      // Standard document icon

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="w-full px-6 md:px-16 pt-10">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* Left side: Location and Theme Toggle */}
        <div className="flex items-center gap-8">
          {/* Location */}
          <p className="text-base">
            Based in<br />
            Belfast, United Kingdom
          </p>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hidden lg:flex items-center gap-2 hover:opacity-80"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Center: Resume Link */}
          <a href="/resume" className="group">
            <span>
            CV <ScrollText size={16} className="inline-block" />
            </span>
            <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
          </a>
        </div>

        {/* Center: Name */}
        <div className="hidden lg:block">
          <h1 className="text-3xl font-medium">
            MATTHEW STEWART
          </h1>
        </div>

        {/* Center: Resume Link
          <a href="/resume" className="group">
            Link to my<br/>
            Resume
            <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
          </a> */}

        {/* Right side: Navigation */}
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