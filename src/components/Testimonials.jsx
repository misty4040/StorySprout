// src/components/Testimonials.jsx

import React from "react";

const testimonials = [
  {
    rating: "⭐⭐⭐⭐⭐",
    text: '"My daughter loves the personalized stories! She gets so excited when she sees herself as the main character."',
    name: "Sarah Johnson",
    role: "Parent of Emma, age 6",
    avatar: "👩",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    text: '"The stories are beautifully written and teach important values. It\'s become part of our bedtime routine."',
    name: "Mike Chen",
    role: "Parent of Lucas, age 4",
    avatar: "👨",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    text: '"Amazing quality and so easy to use. My kids ask for new stories every day!"',
    name: "Lisa Rodriguez",
    role: "Parent of Sofia & Diego",
    avatar: "👩",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    text: '"The perfect gift for any child. Creative, educational, and absolutely magical!"',
    name: "David Kim",
    role: "Uncle & Gift-giver",
    avatar: "👨",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    text: '"The bedtime stories are magical! My son giggles every time his name appears — it’s like the book knows him."',
    name: "Michael Reyes",
    role: "Parent of Leo, age 5",
    avatar: "👨",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    text: '"These stories make reading time so special. My twins can\'t believe they’re the heroes of their own adventures!"',
    name: "Priya Sharma",
    role: "Parent of Meera & Arjun, age 7",
    avatar: "👩",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">
          Loved by Parents and Teachers across the world!
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
            >
              <div className="text-sm text-yellow-500 mb-2">
                {testimonial.rating}
              </div>
              <p className="italic text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
