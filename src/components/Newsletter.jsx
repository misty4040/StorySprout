// src/components/Newsletter.jsx

import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-purple-600 text-white py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with New Stories
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Get notified when we add new characters, themes, and features to make
          storytelling even more magical.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-white w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-md font-semibold hover:shadow-lg transition active:scale-95"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
