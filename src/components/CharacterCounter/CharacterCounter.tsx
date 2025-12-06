import React from "react";
import { useState } from "react";
import type { CharacterCounterProps } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";


export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 20,
}) => {
  const [text, setText] = React.useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (newText: string) => {
    setText(newText);

    // Calculate words
    const words = newText.trim() === "" ? 0 : newText.trim().split(/\s+/).length;

    setWordCount(words);
  };

  const stats = {
    characterCount: text.length,
    wordCount: wordCount,
    readingTime: wordCount / 200, // assuming 200 WPM
  }

  return (
    <div className="flex flex-col gap-4">
    
      <TextInput
      value={text}
      onTextChange={handleTextChange}
      placeholder="Start typing..."
      />
      
      <StatsDisplay stats={stats} showReadingTime={true} minWords={minWords} maxWords={maxWords}/>

        {/* Displays Min, Max and Targeted Reading Stats */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Min: {minWords}</span>
          <span>|</span>
          <span className="text-sm text-gray-500">Max: {maxWords}</span>
          <span>|</span>
          <span className="text-sm text-gray-500">Targeted Reading Time: {targetReadingTime} minutes</span>
        </div>

    </div>
  );
};