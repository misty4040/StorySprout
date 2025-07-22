// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// 🔧 Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCznrJ9tXr58lwVemyN7hONVCuEDwmaKVs",
  authDomain: "storysprout-f8d5f.firebaseapp.com",
  projectId: "storysprout-f8d5f",
  storageBucket: "storysprout-f8d5f.appspot.com",
  messagingSenderId: "781161411685",
  appId: "1:781161411685:web:d5edc8e17f2a73b785c28c",
  measurementId: "G-FD6KSXCWX7",
};

// 🔌 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Reusable Google login function
const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    return { idToken, user: result.user };
  } catch (error) {
    console.error("Google login failed:", error);
    throw error;
  }
};

// 🧠 Export everything
export { auth, provider, googleLogin };
