"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { icebergSegments } from "../../public/data/segmentsData";

interface Job {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  description: string;
}
interface Project {
  name: string;
  year: string;
  techStack?: string;
  description: string;
  imageUrl?: string;
  repoLink?: string;
  liveLink?: string;
}

interface Hobby {
  name: string;
  icon?: string;
  level?: string;
  description?: string;
}

interface Value {
  name: string;
  icon?: string;
  description?: string;
}

interface Milestone {
  year: string;
  title: string;
  lessons?: string[];
}
interface Details {
  jobs?: Job[];
  projects?: Project[];
  hobbies?: Hobby[];
  values?: Value[];
  milestones?: Milestone[];
}
interface Segment {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
  description: string;
  details?: Details; // optional
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
              className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                {selectedSegment.title}
              </h3>

              {/* Basic description text */}
              <p className="text-gray-700 mb-4">
                {selectedSegment.description}
              </p>

              {/* If it's the "Professional Overview" or if we just detect jobs in details */}
              {selectedSegment.details?.jobs && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Job Experience</h4>

                  <ul className="relative border-l border-gray-300 ml-4 pl-4">
                    {/* vertical timeline style */}
                    {selectedSegment.details.jobs.map((job, idx) => (
                      <li key={idx} className="mb-6 ml-2">
                        <div className="absolute -left-3 top-0 w-2 h-2 rounded-full bg-pink-500"></div>
                        <h5 className="text-md font-bold text-gray-800">
                          {job.role} @ {job.company}
                        </h5>
                        <div className="text-sm text-gray-500">
                          {job.start} - {job.end} | {job.location}
                        </div>
                        <p className="text-gray-600 mt-1">{job.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedSegment.details?.projects && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">My Projects</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedSegment.details.projects.map((proj, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-100 rounded-lg overflow-hidden shadow"
                      >
                        {/* Project Image */}
                        {proj.imageUrl && (
                          <div className="relative w-full h-40">
                            <Image
                              src={proj.imageUrl}
                              alt={proj.name}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        )}
                        <div className="p-4 text-gray-800">
                          <h5 className="text-md font-bold mb-1">
                            {proj.name}
                          </h5>
                          <p className="text-sm text-gray-600 mb-2">
                            {proj.year} | {proj.techStack?.join(", ")}
                          </p>
                          <p className="text-sm mb-3">{proj.description}</p>
                          {/* Links (Repo / Live Demo) */}
                          <div className="flex space-x-4">
                            {proj.repoLink && (
                              <a
                                href={proj.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-sm"
                              >
                                GitHub Repo
                              </a>
                            )}
                            {proj.liveLink && (
                              <a
                                href={proj.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-sm"
                              >
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedSegment.details?.hobbies && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Hobbies & Interests
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedSegment.details.hobbies.map((hobby, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-100 rounded-lg overflow-hidden shadow p-4 flex items-center"
                      >
                        {/* Hobby Icon on the left */}
                        {hobby.icon && (
                          <div className="relative w-16 h-16 flex-shrink-0 mr-4">
                            <Image
                              src={hobby.icon}
                              alt={hobby.name}
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                        )}

                        {/* Hobby Info */}
                        <div className="text-gray-800 flex-1">
                          <h5 className="text-md font-bold">{hobby.name}</h5>
                          {hobby.level && (
                            <p className="text-sm text-gray-600">
                              {hobby.level}
                            </p>
                          )}
                          {hobby.description && (
                            <p className="text-sm mt-1">{hobby.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedSegment.details?.values && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Core Values & Principles
                  </h4>
                  {/* Horizontal scroll container */}
                  <div className="flex overflow-x-auto space-x-4 py-2">
                    {selectedSegment.details.values.map((val, idx) => (
                      <div
                        key={idx}
                        className="min-w-[200px] bg-gradient-to-br from-blue-50 to-blue-100 
                                  rounded-lg shadow p-4 flex-shrink-0 flex flex-col items-center text-gray-800"
                      >
                        {/* Icon */}
                        {val.icon && (
                          <div className="relative w-12 h-12 mb-2">
                            <Image
                              src={val.icon}
                              alt={val.name}
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                        )}

                        {/* Value name */}
                        <h5 className="text-md font-bold mb-1">{val.name}</h5>
                        {/* Description */}
                        <p className="text-sm text-center">{val.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedSegment.details?.milestones && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Personal Growth & Learnings
                  </h4>
                  <ul className="relative border-l border-gray-300 ml-4 pl-4">
                    {selectedSegment.details.milestones.map((mile, idx) => (
                      <li key={idx} className="mb-6 ml-2">
                        {/* The bullet circle */}
                        <div className="absolute -left-3 top-0 w-2 h-2 rounded-full bg-pink-500"></div>

                        {/* Year & Title */}
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-pink-600">
                            {mile.year}
                          </span>
                          <h5 className="text-md font-semibold text-gray-800">
                            {mile.title}
                          </h5>
                        </div>

                        {/* Lessons Learned */}
                        {mile.lessons?.length && (
                          <ul className="list-disc list-inside text-gray-600 mt-2 pl-2">
                            {mile.lessons.map((lesson, i) => (
                              <li key={i} className="text-sm">
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={closeModal}
                className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded mt-6"
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
