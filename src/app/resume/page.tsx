"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ResumeData } from "@/app/interfaces";
import CollapsibleExperience from "@/components/resume/CollapsibleExperience";
import CollapsibleProject from "@/components/resume/CollapsibleProjects";

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
    <main className="min-h-screen text-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-700 mb-2">My Resume</h1>
        </div>

        {/* EXPERIENCE */}
        <section className="py-8 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Experience
          </h2>
          <div className="space-y-8">
            {resumeData.experience.map((exp, idx) => (
              <CollapsibleExperience key={idx} experience={exp} />
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
              <CollapsibleProject key={idx} project={proj} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
