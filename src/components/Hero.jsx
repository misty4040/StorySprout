// src/components/Hero.jsx

import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/images/Home.png"; // Make sure image is placed correctly

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-200 to-purple-300 py-20 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 md:px-12 flex flex-wrap lgm:flex-nowrap gap-12 items-center">
        <div className="lgm:w-1/2 text-center lgm:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 font-[Plus Jakarta Sans]">
            Create Magical Stories in Seconds
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Transform your child's imagination into personalized storybooks.
            Choose characters, settings, and themes to create unique adventures
            that spark joy and learning.
          </p>
          <Link
            to="/create-story"
            className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-semibold py-3 px-6 rounded-md hover:shadow-lg transition"
          >
            🪄 Start Creating Now
          </Link>
        </div>
        <div className="lgm:w-1/2 flex justify-center">
          <img
            src={HomeImage}
            alt="Child reading under a magical tree"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
