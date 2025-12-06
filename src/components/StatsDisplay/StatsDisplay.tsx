import React from "react";
import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime,
  minWords = 0,
  maxWords = Infinity,
}) => {
  
    // Determine color dynamically
    const wordColor =
    stats.wordCount < minWords || stats.wordCount > maxWords
      ? "text-red-500"
      : "text-green-500";

  return (
    <>
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500">Characters</p>
          <span className="text-lg font-bold">{stats.characterCount}</span>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500">Words</p>
          <span
            className={`text-lg font-bold ${wordColor}`}
          >
            {stats.wordCount}
          </span>
        </div>

        {showReadingTime && (
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">Reading Time</p>
            <span className="text-lg font-bold">
              {stats.readingTime.toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </>
  );
};