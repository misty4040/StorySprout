import React from "react";

export default function PersonalMessage({ message }) {
  if (!message) return null;
  return (
    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8 text-center">
      <p className="text-lg italic text-gray-700 font-medium">"{message}"</p>
    </div>
  );
}