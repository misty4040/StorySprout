import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Header({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  // Decide display name gracefully (works for Firebase & normal signup)
  const getUserName = () => {
    if (!user) return "";
    return (user.displayName || user.name || "User").split(" ")[0];
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
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-heading font-bold text-xl text-purple-700"
        >
          <img src={logo} alt="StorySprout Logo" className="w-8 h-8" />
          StorySprout
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-purple-700 transition ${
                  isActive ? "text-purple-700" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition shadow"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow hover:shadow-md hover:-translate-y-0.5 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm font-medium text-gray-600">
                Welcome, {getUserName()}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-purple-700 border border-purple-700 px-3 py-1 rounded hover:bg-purple-700 hover:text-white transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden text-2xl text-purple-700 focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-md z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg lg:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-lg font-bold text-purple-700">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-gray-600 hover:text-purple-700"
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
                `text-gray-700 font-medium hover:text-purple-700 transition ${
                  isActive ? "text-purple-700" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col gap-2 px-4 pb-6">
          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-700 rounded hover:bg-purple-800 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600 px-2">
                Welcome, {getUserName()}
              </span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white transition"
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
