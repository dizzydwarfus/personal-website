'use client';

import { useState } from 'react';

interface FlipCardProps {
  frontImg: string;
  backImg: string;
}

export default function FlipCard({ frontImg, backImg }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-96 perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`absolute w-full h-full duration-700 transform-gpu ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-gray-300 flex items-center justify-center">
          <img src={frontImg} alt="Front" className="w-1/2 h-auto object-contain" />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gray-500 text-white rotate-y-180 backface-hidden flex items-center justify-center">
          <img src={backImg} alt="Back" className="w-1/2 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}