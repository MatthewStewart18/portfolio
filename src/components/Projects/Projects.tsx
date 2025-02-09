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
      subtitle: "Web Development",
      period: "2024-2025",
      description: 
      `Promptability is an all-in-one application for interacting with
      state of the art Hugging Face Large Language Models.
      
      users can interact directly with models through a user friendly
      playground, test and analyse model performances through an
      evaluation suite and create their own custom prompt library
      through the prompt suite.
      
      Technology stack: Python, React, Docker, Firebase, Hugging Face
      `,
      linkHref: "https://www.github.com/matthewstewart18",
      linkText: "promptability",
      images: [
        {
          src: "/images/promptability_home.png",
          alt: "Description of what the screenshot shows"
        }
      ]
    }
    // Add other projects here...
  ]

  return (
    <section id="projects" className="px-6 md:px-16 max-w-screen-2xl mx-auto">
      <h2 className="text-lg md:text-2xl font-medium uppercase mb-4">Projects</h2>
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