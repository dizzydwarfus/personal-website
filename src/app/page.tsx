'use client';

import AboutPage from '@/components/AboutPage';
import HeroSection from '@/components/HeroSection';
import IcebergLayer from '@/components/IcebergLayer';

export default function HomePage() {
  return (
    <main>
      {/* Above the water */}
      <HeroSection />

      {/* Layers below the water */}
      <IcebergLayer
        id="layer-1"
        title="Professional Overview"
        content="I have worked in multiple roles, from engineering to operations.
          Education in Chemical Engineering and real-world experience in finance, devops, and more."
        bgColor="bg-white"
      />

      <IcebergLayer
        id="layer-2"
        title="Hobbies & Interests"
        content="When I'm off the clock, I immerse myself in music, hiking,
          gaming, and learning new programming languages."
        bgColor="bg-blue-50"
      />

      <IcebergLayer
        id="layer-3"
        title="Core Values"
        content="Integrity, Curiosity, and Continuous Learning define how I approach
          my personal and professional life."
        bgColor="bg-blue-100"
      />

      <IcebergLayer
        id="layer-4"
        title="Personal Growth & Learnings"
        content="Lifelong learning is the bedrock of my journey. I enjoy reading about
          data science, exploring DevOps best practices, and actively engaging in financial analysis."
        bgColor="bg-blue-200"
      />
      <AboutPage/>
    </main>
  );
}