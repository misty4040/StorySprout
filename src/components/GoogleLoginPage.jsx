import React from "react";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
    //   alert(`Welcome, ${result.user.displayName}`);
      navigate("/");
    } catch (error) {
      console.error("Sign-in error:", error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center gap-2 flex-1 border px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 active:scale-95"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="w-5 h-5"
      />
      <span>Google</span>
    </button>
  );
};

export default GoogleLoginButton;
