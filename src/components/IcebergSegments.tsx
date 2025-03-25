"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { icebergSegments } from "@public/data/segmentsData";
import { Segment, ResumeData } from "@/app/interfaces";
import CollapsibleExperience from "@/components/resume/CollapsibleExperience";

export default function IcebergStack() {
  const [selectedSegment, setSelectedSegment] = useState<Segment | null>(null);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    fetch("/data/resume.json")
      .then((res) => res.json())
      .then((data: ResumeData) => setResumeData(data))
      .catch((err) => console.error(err));
  }, []);

  const openModal = (segment: Segment) => {
    setSelectedSegment(segment);
  };

  const closeModal = () => {
    setSelectedSegment(null);
  };

  return (
    <section className="p-0 m-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white/60 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 max-w-3xl mx-auto my-10">
          <h2 className="text-4xl font-bold text-teal-500 mb-4 text-center">
            Beneath the Surface
          </h2>
          <p className="text-gray-800 dark:text-gray-100 italic mb-4 text-center">
            &quot;Most of what defines us lies hidden from plain view — shaped
            by late nights of learning, quiet persistence, side projects born
            out of curiosity, and the stories we never quite tell aloud.&quot;
          </p>
          <div className="text-gray-500 md:text-base">
            This completely AI generated iceberg isn&apos;t just a graphic —
            it&apos;s a layered reflection of who I am.
            <br />
            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3">
                <Image
                  src="/images/iceberg_layers/iceberg_top.png"
                  alt="Iceberg Tip"
                  width={28}
                  height={28}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-gray-500">
                  <span className="font-semibold text-teal-600">
                    The top half:
                  </span>{" "}
                  My roles, education, and work experience.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Image
                  src="/images/iceberg_layers/iceberg_bottom.png"
                  alt="Iceberg Bottom"
                  width={28}
                  height={28}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-gray-500">
                  <span className="font-semibold text-teal-600">
                    The bottom half:
                  </span>{" "}
                  The late-night debug sessions. The pastimes I have after work.
                  The values I hold and the quiet lessons life has taught me.
                </p>
              </div>
            </div>
            <p className="text-gray-500 md:text-base mt-4">
              <span className="text-teal-600 font-semibold animate-pulse">
                Click on any layer
              </span>{" "}
              to dive deeper into the things that have shaped me — from platform
              engineering to playing fingerstyle guitar, from chemical processes
              to dashboards built as I stumble through my learning path.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-start p-0 m-0">
        {icebergSegments.map((segment, index) => (
          <motion.div
            key={segment.id}
            className="cursor-pointer p-0 m-0"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
            }}
            onClick={() => openModal(segment)}
          >
            <div className="relative">
              <Image
                src={segment.image}
                alt={segment.title}
                width={segment.width}
                height={segment.height}
                unoptimized
                className="max-w-full h-auto drop-shadow-xl opacity-90 brightness-95 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold">
                {segment.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedSegment && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl text-teal-600 font-bold mb-4">
                {selectedSegment.title}
              </h3>

              {/* Basic description text */}
              <p className="text-gray-700 mb-4">
                {selectedSegment.description}
              </p>

              {selectedSegment.resumeKey === "experience" && (
                <div className="max-h-[70vh] overflow-y-auto mt-4">
                  {!resumeData ? (
                    <p>Loading experience data...</p>
                  ) : (
                    <div className="space-y-8">
                      {resumeData[selectedSegment.resumeKey].map((exp, idx) => (
                        <div
                          key={idx}
                          className="bg-teal-100 rounded-lg shadow-sm p-2"
                        >
                          <CollapsibleExperience key={idx} experience={exp} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {selectedSegment.resumeKey === "projects" && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">My Projects</h4>
                  {/* If resumeData is null, bail out or return null */}
                  {!resumeData ? (
                    <p>Loading projects data...</p>
                  ) : (
                    <div className="max-h-[60vh] overflow-y-auto grid grid-cols-1 md:grid-cols-1 gap-4">
                      {resumeData[selectedSegment.resumeKey].map(
                        (proj, idx) => (
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
                                {proj.timeframe} | {proj.techStack?.join(", ")}
                              </p>
                              <ul className="list-disc list-inside text-sm text-gray-700 mb-3 space-y-1">
                                {proj.bulletPoints.map((point, i) => (
                                  <li key={i}>{point}</li>
                                ))}
                              </ul>
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
                                    Check it Out
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}

              {selectedSegment.details?.milestones && (
                <div className="mt-4">
                  <ul className="max-h-[60vh] overflow-y-auto relative border-l border-gray-300 ml-4 pl-4">
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

              {selectedSegment.details?.hobbies && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Hobbies & Interests
                  </h4>
                  <div className="max-h-[60vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  {/* Vertical layout container */}
                  <div className="flex flex-col max-h-[60vh] overflow-y-auto space-y-4 py-2">
                    {selectedSegment.details.values.map((val, idx) => (
                      <div
                        key={idx}
                        className="w-full bg-gradient-to-br from-blue-50 to-blue-100 
                     rounded-lg shadow p-4 flex flex-col items-center text-gray-800"
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

              <button
                onClick={closeModal}
                className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded mt-6"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}

//TODO: bullet points for projects layer instead of .join.(", ")
//TODO: populate values and principles
//TODO: create videos of favourite guitar songs to be served when hovering over hobbies
//TODO: create videos of climbing/basketball to be served when hovering over hobbies
