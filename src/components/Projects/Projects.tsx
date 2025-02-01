'use client'

// src/components/Projects/Projects.tsx
import { ProjectCard } from './ProjectCard';

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  linkHref: string;
  linkText: string;
  images: ProjectImage[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Promptability",
      subtitle: "Web Development, Design, Idea",
      period: "2024-2025",
      description: `This project started as part of my computer science final year project.

      My goal was to create a simple, user-friendly tool that allows users to interact with generative AI 
      and evaluate the model performances using a sophisticated evaluation suite.

      The project was developed using Python, Javascript, React and Firebase.`,
      linkHref: "https://www.github.com/matthewstewart18",
      linkText: "promptability",
      images: [
        {
          src: "/images/project-screenshot.png",
          alt: "Description of what the screenshot shows"
        }
      ]
    }
    // Add other projects here...
  ]

  return (
    <section id="projects" className="px-6 md:px-16 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium uppercase mb-4">Projects</h2>
      <hr className="h-[2px] bg-gray-200 mb-12 md:mb-16" />
      
      <div className="space-y-28">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}