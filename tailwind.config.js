/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- This is required for JSX files
  ],
  // tailwind.config.js

  theme: {
    extend: {
      screens: {
        lgm:"1000px",
      },
      colors: {
        primary: "#7c3aed", // from --primary
        accent: "#f3e8ff", // from --accent
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-600": "#4b5563",
        "gray-900": "#111827",
        white: "#ffffff",
        dark: "#4b2f82",
      },
      spacing: {
        "space-2": "0.5rem",
        "space-3": "0.75rem",
        "space-4": "1rem",
        "space-6": "1.5rem",
        "space-8": "2rem",
        "space-12": "3rem",
      },
      borderRadius: {
        lg: "0.5rem",
        full: "9999px",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        sm: "0.875rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "4xl": "2.25rem",
      },
      transitionProperty: {
        DEFAULT: "all 0.3s ease",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        heading: ["Fredoka", "cursive"],
      },
    },
  },
  plugins: [],
};
