'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { icebergSegments } from '../../public/data/segmentsData';

interface Segment {
  id: string;
  title: string;
  image: string;
  // width: number;
  // height: number;
  description: string;
}

export default function IcebergStack() {
  const [selectedSegment, setSelectedSegment] = useState<Segment | null>(null);

  const openModal = (segment: Segment) => {
    setSelectedSegment(segment);
  };

  const closeModal = () => {
    setSelectedSegment(null);
  };

  return (
    <section className="p-0 m-0">
      <div className="text-center my-8">
        <h2 className="text-4xl font-bold">Explore the Iceberg</h2>
        <p className="text-gray-600">
          Click on a slice to reveal more beneath the surface
        </p>
      </div>

      <div className="flex flex-col items-center justify-start p-0 m-0">
        {icebergSegments.map((segment) => (
          <motion.div
            key={segment.id}
            className="cursor-pointer p-0 m-0"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(segment)}
          >
            <Image
              src={segment.image}
              alt={segment.title}
              width={segment.width}
              height={segment.height}
              unoptimized
              className="max-w-full h-auto p-0 m-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedSegment && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-xl mx-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              // stop the click from propagating to the overlay
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedSegment.title}</h3>
              <p className="text-gray-600 mb-4">{selectedSegment.description}</p>
              <button
                onClick={closeModal}
                className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}