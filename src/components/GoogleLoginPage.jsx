// src/components/GoogleLoginPage.jsx
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./Firebase";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user); // ✅ this updates Header
      navigate("/");
    } catch (err) {
      console.error("Google Login Failed:", err.message);
    }
  };

  return (
    <button
      onClick={handleLogin}
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
