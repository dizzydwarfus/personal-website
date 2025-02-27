import { Milestone } from "@/app/interfaces";

interface Props {
  milestones: Milestone[];
  color?: string; // Optional color customization (defaults to pink)
}

export default function Timeline({ milestones, color = "pink" }: Props) {
  return (
    <div className="mt-4">
      {/* Timeline Container */}
      <ul className="max-h-[60vh] overflow-y-auto relative border-l border-gray-300 ml-4 pl-4">
        {milestones.map((mile, idx) => (
          <li key={idx} className="mb-6 ml-2 relative">
            {/* The bullet circle */}
            <div
              className={`absolute -left-6 top-1 w-2 h-2 rounded-full bg-${color}-500`}
            ></div>

            {/* Year & Title */}
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-bold text-${color}-600`}>
                {mile.year}
              </span>
              <h5 className="text-md font-semibold text-gray-800">
                {mile.title}
              </h5>
            </div>

            {/* Lessons Learned */}
            {mile.lessons && mile.lessons.length > 0 ? (
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 pl-2">
                {mile.lessons.map((lesson, i) => (
                  <li key={i} className="text-sm">
                    {lesson}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-2">
                No lessons recorded...
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
