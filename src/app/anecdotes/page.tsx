"use client";
import { useEffect, useState } from "react";
import { StarCategory } from "@/app/interfaces";
import CollapsibleStar from "@/components/CollapsibleStar";

export default function AnecdotesPage() {
  // ---------- State + Fetch ----------
  const [categories, setCategories] = useState<StarCategory[] | null>(null);

  useEffect(() => {
    fetch("/data/star_anecdotes.json")
      .then((res) => res.json())
      .then((data: StarCategory[]) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  if (!categories) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 animate-pulse">Loading Anecdotes...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-teal-600">
          Interview Stories (STAR(R))
        </h1>
        <p className="mb-6 text-gray-300">
          Below are my personal experiences, mistakes, and achievements mapped
          to the STAR(R) method for easy reference in job interviews.
        </p>
        <div className="space-y-8">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-teal-600 mb-6">
                {category.category}
              </h2>
              {category.details.map((story, idx) => (
                <CollapsibleStar key={idx} story={story} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
