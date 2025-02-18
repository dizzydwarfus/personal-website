"use client";

import { StarAnecdote } from "@/app/interfaces";
import React, { useState } from "react";

interface Props {
  story: StarAnecdote;
}

export default function CollapsibleStar({ story }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded-md p-4 mb-4 bg-white text-gray-800 shadow-sm">
      <h2
        className="text-lg font-bold cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {story.title}
      </h2>
      {expanded && (
        <div className="mt-2 space-y-4 text-sm text-gray-700">
          <div>
            <strong>Situation:</strong>
            <p className="mt-1 whitespace-pre-line">{story.situation}</p>
          </div>
          <div>
            <strong>Task:</strong>
            <p className="mt-1 whitespace-pre-line">{story.task}</p>
          </div>
          <div>
            <strong>Action:</strong>
            <p className="mt-1 whitespace-pre-line">{story.action}</p>
          </div>
          <div>
            <strong>Result:</strong>
            <p className="mt-1 whitespace-pre-line">{story.result}</p>
          </div>
          <div>
            <strong>Reflection:</strong>
            <p className="mt-1 whitespace-pre-line">{story.reflection}</p>
          </div>
        </div>
      )}
    </div>
  );
}
