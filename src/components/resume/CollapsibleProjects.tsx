"use client";

import React, { useState } from "react";
import { Project } from "@/app/interfaces";

interface Props {
  project: Project;
}

export default function CollapsibleProject({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-sm p-6"
        onMouseEnter={() => setExpanded(!expanded)}
        onMouseLeave={() => setExpanded(!expanded)}
      >
        <a
          href={project?.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-teal-700 mb-1"
        >
          {project.name}
        </a>
        {project.timeframe && (
          <p className="text-xs text-gray-400 mb-2">{project.timeframe}</p>
        )}
        {/* Links (Repo / Live Demo) */}
        <div className="flex space-x-4">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              GitHub Repo
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              Check it Out
            </a>
          )}
        </div>
        {expanded && (
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
            {project.bulletPoints?.map((bp, bpIdx) => (
              <li key={bpIdx}>{bp}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
