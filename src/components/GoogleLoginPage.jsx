import React from "react";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}  // Use the prop instead of local logic
      className="flex items-center justify-center gap-2 bg-gray-100 text-indigo-600 px-4 py-2 rounded hover:bg-gray-200 transition active:scale-95 w-full"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        alt="Google icon"
        className="w-5 h-5"
      />
      Google
    </button>
  );
};

export default GoogleLoginButton;
