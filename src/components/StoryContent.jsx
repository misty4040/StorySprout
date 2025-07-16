import React from "react";

export default function StoryContent({ story }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 mb-8 shadow-inner">
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {story.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-6 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
