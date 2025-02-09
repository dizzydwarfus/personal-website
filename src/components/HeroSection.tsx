'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-iceberg flex flex-col items-center justify-center text-white">
      {/* Fade-in or slight upward motion */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-4">Discover the Depths</h1>
        <p className="text-xl mb-6">
          Welcome to my personal iceberg – there’s more beneath the surface.
        </p>
        <button
          onClick={() => {
            document.getElementById('layer-1')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-2 rounded-full"
        >
          Dive Deeper
        </button>
      </motion.div>
    </section>
  );
}