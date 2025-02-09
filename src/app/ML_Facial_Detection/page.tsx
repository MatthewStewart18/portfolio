// src/app/ML_Facial_Detection/page.tsx
'use client';

import { useEffect } from 'react';

export default function MLPaperPage() {
  useEffect(() => {
    window.location.href = '/ML_Facial_Detection.pdf';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to research paper...</p>
    </div>
  );
}