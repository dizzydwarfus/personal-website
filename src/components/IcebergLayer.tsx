'use client';

import { motion } from 'framer-motion';

interface IcebergLayerProps {
  id: string;            // for scroll targeting
  title: string;
  content: string;
  bgColor?: string;      // optional background color class
}

export default function IcebergLayer({ id, title, content, bgColor }: IcebergLayerProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`min-h-screen flex flex-col justify-center items-center px-4 ${bgColor || 'bg-gray-100'}`}
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700">{content}</p>
      </div>
    </motion.section>
  );
}