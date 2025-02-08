'use client';

import { useState } from 'react';
import LayerContainer from '@/components/LayerContainer';

export default function HomePage() {
  const [showLayerEffect, setShowLayerEffect] = useState(false);

  return (
    <main>
      {/* Hero Section */}
      <div className="h-[70vh] flex flex-col justify-center items-center text-white relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl mb-4">
            Welcome to <span className="text-pink-500">Lian&apos;s World</span>
          </h1>
          <p className="text-xl sm:text-2xl">
            Exploring the domains of finance, economics, programming, data
            science, revenue operations, and DevOps.
          </p>
          <div className="bg-gray-500 mt-4 max-w-lg mx-auto text-sm p-3 rounded-md opacity-80">
            <p>This website is a work in progress. Please check back for updates!</p>
          </div>
        </div>
      </div>

      {/* Layer Container */}
      <LayerContainer
        showEffect={showLayerEffect}
        setShowEffect={setShowLayerEffect}
      />
    </main>
  );
}