// src/components/Features.jsx

import React from "react";

const features = [
  {
    icon: "✨",
    title: "Magical Stories",
    description:
      "Every story is unique and tailored to your child's interests and imagination.",
  },
  {
    icon: "⚡",
    title: "Quick Creation",
    description:
      "Generate beautiful, illustrated stories in just seconds with our AI technology.",
  },
  {
    icon: "🎨",
    title: "Personalized",
    description:
      "Choose characters, settings, and themes that reflect your child's personality.",
  },
  {
    icon: "📚",
    title: "Educational",
    description:
      "Stories designed to promote learning, creativity, and positive values.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">
          Why Choose StorySprout?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
