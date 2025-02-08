'use client';

import { Dispatch, SetStateAction } from 'react';

interface LayerContainerProps {
  showEffect: boolean;
  setShowEffect: Dispatch<SetStateAction<boolean>>;
}

interface LayerItem {
  label: string;
  color: string;
}

const layers: LayerItem[] = [
  { label: 'Investing', color: '#1a5276' },
  { label: 'Data', color: '#2980b9' },
  { label: 'Programming', color: '#27ae60' },
  { label: 'Chem Eng', color: '#8e44ad' },
  { label: 'Music', color: '#e74c3c' },
];

export default function LayerContainer({
  showEffect,
  setShowEffect,
}: LayerContainerProps) {
  const handleMouseOver = () => setShowEffect(true);
  const handleMouseOut = () => setShowEffect(false);

  return (
    <div
      className="relative flex items-center justify-center mx-auto max-w-6xl h-[300px] perspective overflow-hidden border-4 border-white"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {layers.map((layer, index) => (
        <div
          key={index}
          className="absolute w-[150px] h-[50px] text-white flex items-center justify-center font-bold transform-gpu transition-transform duration-700"
          style={{
            backgroundColor: layer.color,
            color: layer.color, // for the revert on mouseOut
            transform: showEffect
              ? `translateX(-500px) translateY(${
                  index * 50
                }px) rotateX(90deg) rotateY(90deg) rotateZ(-90deg)`
              : `translateZ(${index * -1}px)`,
          }}
        >
          {layer.label}
        </div>
      ))}
    </div>
  );
}