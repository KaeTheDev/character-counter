import React from "react";
import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime,
}) => {
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
            className={`text-lg font-bold ${
              stats.wordCount < 25 ? "text-red-500" : "text-green-500"
            }`}
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