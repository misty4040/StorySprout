// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Logo & Address */}
        <div>
          <div className="flex items-center gap-2 mb-4 font-bold text-xl">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            StorySprout
          </div>
          <p className="opacity-90 leading-relaxed">
            123 Market St. #22B
            <br />
            Charlottesville, California
            <br />
            44635
            <br />
            (434) 546-4356
            <br />
            contact@storysprout.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 opacity-90">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/explore">Sample Stories</Link>
            <Link to="/gift">Gift a Story</Link>
            <Link to="/create-story">Create a Story</Link>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex flex-col gap-2 opacity-90">
            <a href="#" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center opacity-80 text-sm">
        © 2025 StorySprout. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
