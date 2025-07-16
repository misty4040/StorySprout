import React from "react";
import { Sparkles } from "lucide-react";

export default function StoryHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="h-8 w-8 text-purple-500" />
        <h1 className="text-4xl font-bold text-gray-800">
          Your Magical Story is Ready!
        </h1>
        <Sparkles className="h-8 w-8 text-purple-500" />
      </div>
      <p className="text-lg text-gray-600">
        Here's the story you created. Read it, download it, or make another!
      </p>
    </div>
  );
}
