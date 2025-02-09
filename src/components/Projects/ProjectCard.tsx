'use client'

// src/components/Projects/ProjectCard.tsx
import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  linkHref: string;
  linkText: string;
  images: {
    src: string;
    alt: string;
  }[];
  isReversed?: boolean;
}

export function ProjectCard({
  title,
  subtitle,
  period,
  description,
  linkHref,
  linkText,
  images,
  isReversed = false
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`grid md:grid-cols-6 lg:grid-cols-8 gap-8 ${isReversed ? 'md:rtl' : ''}`}>
      <div className="space-y-3 md:col-span-3 md:ltr">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-base">{subtitle}</p>
        <div className="space-y-20"> 
        <p className="text-base">{period}</p>
        <p className="text-base text-gray-600 whitespace-pre-line">
          {description}
        </p>
        </div>
        
        {/* <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group"
        >
          {linkText}
          <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
        </a> */}
      </div>

      <div className="md:col-span-3 lg:col-span-5 md:ltr">
        <div className="relative bg-black aspect-[1.51] rounded-sm overflow-hidden">
          {images.length > 0 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute top-0 left-0 w-1/2 h-full z-10 cursor-w-resize"
                aria-label="Previous image"
              />
              <button
                onClick={nextImage}
                className="absolute top-0 right-0 w-1/2 h-full z-10 cursor-e-resize"
                aria-label="Next image"
              />
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-between items-center mt-4">
            <p className="font-mono">
              {currentImageIndex + 1} / {images.length}
            </p>
            <div className="flex gap-6">
              <button onClick={prevImage} aria-label="Previous image">←</button>
              <button onClick={nextImage} aria-label="Next image">→</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}