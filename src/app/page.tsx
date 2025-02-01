// src/app/page.tsx
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <main className="space-y-20 md:space-y-32 lg:space-y-40 mb-32 md:mb-48 lg:mb-56">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}