"use client";

import { Experience } from "@/app/interfaces";
import React, { useState } from "react";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  experience: Experience;
}

export default function CollapsibleExperience({ experience }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start gap-4 mb-3">
          {experience.logo && (
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={experience.logo}
                alt={experience.company}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-teal-700">
              {experience.company}
            </h3>
            <p className="text-sm text-gray-500">{experience.location}</p>
          </div>
        </div>

        {/* Roles */}
        <ul className="border-l border-gray-200 ml-5 pl-4 space-y-6 relative">
          {experience.roles.map((role, rIdx) => (
            <li
              key={rIdx}
              className="relative cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              <Tooltip title="Click to expand details" followCursor>
                <div>
                  <div className="absolute -left-5 top-2 w-2 h-2 bg-teal-400 rounded-full"></div>
                  <h4 className="text-md font-semibold text-teal-600">
                    {role.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-2">{role.years}</p>
                </div>
              </Tooltip>
              {expanded && (
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  {role.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx}>{bp}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
