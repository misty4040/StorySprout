import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Header({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/explore", label: "Sample Stories" },
    { to: "/gift", label: "Gift Story" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lgm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-heading font-bold text-xl text-primary"
        >
          <img src={logo} alt="StorySprout Logo" className="w-8 h-8" />
          StorySprout
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lgm:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-primary transition ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Auth Area */}
        <div className="hidden lgm:flex gap-space-3 items-center">
          {!user ? (
            <>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-space-4 py-space-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition shadow hover:shadow-md hover:-translate-y-0.5"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-space-4 py-space-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-purple-700 rounded-lg shadow hover:shadow-md hover:-translate-y-0.5 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm font-medium text-gray-600">
                Welcome, {user.displayName?.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-primary border border-primary px-3 py-1 rounded hover:bg-primary hover:text-white transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="lgm:hidden text-2xl text-primary focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/70 backdrop-blur-md z-[60] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg lgm:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-lg font-bold text-primary">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-gray-600 hover:text-primary"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-primary transition ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col gap-2 px-4 pb-6">
          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition active:scale-95"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-purple-700 transition active:scale-95"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600 px-2">
                Welcome, {user.displayName?.split(" ")[0]}
              </span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition active:scale-95"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
