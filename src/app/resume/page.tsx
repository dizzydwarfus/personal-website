"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ResumeData } from "@/app/interfaces";

export default function ResumePage() {
  // ---------- State + Fetch ----------
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    fetch("/data/resume.json")
      .then((res) => res.json())
      .then((data: ResumeData) => setResumeData(data))
      .catch((err) => console.error(err));
  }, []);

  // If data is still loading
  if (!resumeData) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-700 animate-pulse">Loading Resume...</p>
      </main>
    );
  }

  // ---------- Main Layout ----------
  return (
    <main className="min-h-screen text-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-700 mb-2">My Resume</h1>
        </div>

        {/* EXPERIENCE */}
        <section className="py-8 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start gap-4 mb-3">
                  {exp.logo && (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-teal-700">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>
                </div>

                {/* Roles */}
                <ul className="border-l border-gray-200 ml-5 pl-4 space-y-6 relative">
                  {exp.roles.map((role, rIdx) => (
                    <li key={rIdx} className="relative">
                      <div className="absolute -left-5 top-2 w-2 h-2 bg-teal-400 rounded-full"></div>
                      <h4 className="text-md font-semibold text-teal-600">
                        {role.title}
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">{role.years}</p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                        {role.bulletPoints.map((bp, bpIdx) => (
                          <li key={bpIdx}>{bp}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="py-8 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Education
          </h2>
          <ul className="space-y-6">
            {resumeData.education.map((edu, idx) => (
              <li
                key={idx}
                className="bg-white rounded-lg shadow-sm p-6 flex items-start gap-4"
              >
                {/* Logo */}
                {edu.logo && (
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-teal-700">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-teal-500">{edu.school}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {edu.started} - {edu.graduated}
                  </p>
                  <p className="text-sm mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* SKILLS */}
        <section className="py-8 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-4"
              >
                {skill.logo && (
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-md font-bold text-teal-700">
                    {skill.name}
                  </h4>
                  {skill.roles?.length ? (
                    <p className="text-xs text-gray-400">
                      Used at: {skill.roles.join(", ")}
                    </p>
                  ) : null}
                  {skill.projects?.length ? (
                    <p className="text-xs text-gray-400 mt-1">
                      Projects: {skill.projects.join(", ")}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="py-8 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Languages
          </h2>
          <ul className="flex flex-wrap gap-4">
            {resumeData.languages.map((lang, idx) => (
              <li
                key={idx}
                className="bg-white shadow-sm px-4 py-2 rounded-lg text-sm text-gray-700 flex items-center gap-2"
              >
                <span
                  className={`fi fi-${lang.countryCode.toLowerCase()}`}
                ></span>
                <span className="font-bold text-teal-600">{lang.name}</span>
                {": "}
                <span className="text-gray-600">{lang.level}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PROJECTS */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-bold text-teal-700 mb-1">
                  {proj.name}
                </h4>
                {proj.timeframe && (
                  <p className="text-xs text-gray-400 mb-2">{proj.timeframe}</p>
                )}
                {proj.repoLink && (
                  <a
                    href={proj.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm block mb-2"
                  >
                    View on GitHub
                  </a>
                )}
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  {proj.bulletPoints?.map((bp, bpIdx) => (
                    <li key={bpIdx}>{bp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

// TODO: collapse everything
// hover for main info
// click for details

// TODO: make links <a></a>
