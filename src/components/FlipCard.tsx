'use client';

import { useState } from 'react';
import Image from 'next/image';
interface FlipCardProps {
  /** Path to front image (public folder or remote URL) */
  frontImg: string;
  /** Path to back image (public folder or remote URL) */
  backImg: string;
  /** Optional width/height (in px) for the images */
  width?: number;
  height?: number;
}

export default function FlipCard({
  frontImg,
  backImg,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      // Outer container with perspective
      className="relative w-full h-96"
      style={{ perspective: '1000px' }} // or use the .perspective class
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Inner container that flips */}
      <div
        className={`relative w-full h-full duration-700 ${
          flipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-gray-300"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <Image
            src={frontImg}
            alt="Front"
            fill
            style={{ objectFit: 'contain' }}
            // If your images are purely static and in /public,
            // you can omit a domain from next.config.js
          />
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-gray-500 text-white rotate-y-180"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <Image
            src={backImg}
            alt="Back"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}