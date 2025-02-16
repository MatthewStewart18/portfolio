// src/components/Experience/Experience.tsx
import { ExperienceCard } from './ExperienceCard';

export default function Experience() {
  const experiences = [
    {
      company: "Rapid7",
      description: "Cyber-Security",
      period: "June 2023 - June 2024",
      details: `As a member of the Belfast Content Vulnerability Management team, my main project involved creating a Gen AI vulnerability advisory web scraper that automated the creation of security vulnerability artifacts. Delivering customers full security coverage for all Zoom common vulnerabilites and exposures.
      
      I also contributed to the backend development of the Insight VM Vulnerabilty and Fingerprint services, enhancing user experience and reliabilty for customers globally.

      `,
      position: "Software Engineering Intern",
      location: "Belfast, United Kingdom",
      industry: "Cyber-Security",
      website: "www.rapid7.com"
    }
  ];

  return (
    <section id="experience" className="px-6 md:px-16 max-w-screen-2xl mx-auto">
      <h2 className="text-lg md:text-2xl font-medium uppercase mb-4">Experience</h2>
      <hr className="h-[2px] bg-gray-200 mb-12 md:mb-16" />
      
      <div className="md:text-lg space-y-28">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}