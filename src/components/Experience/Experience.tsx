// src/components/Experience/Experience.tsx
import { ExperienceCard } from './ExperienceCard';

export default function Experience() {
  const experiences = [
    {
      company: "Rapid7",
      description: "Leading Cybersecurity company",
      period: "May 2023 - June 2024",
      details: `As a member of the Belfast Vulnerability content team working
      on the Insight VM platform, I developed vulnerabilty checks for customer
      facing issues.
      
      Rapid7 is an award-winning, Cybersecurity firm leading in its
      sector to secure customers over all possible attack surfaces`,
      position: "Software Engineering Intern",
      location: "Belfast, United Kingdom",
      industry: "Cyber-Security",
      website: "www.rapid7.com"
    }
  ];

  return (
    <section id="experience" className="px-6 md:px-16 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-medium uppercase mb-4">Experience</h2>
      <hr className="h-[2px] bg-gray-200 mb-12 md:mb-16" />
      
      <div className="space-y-28">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}