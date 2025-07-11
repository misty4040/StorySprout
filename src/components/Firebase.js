// src/components/Firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCznrJ9tXr58lwVemyN7hONVCuEDwmaKVs",
  authDomain: "storysprout-f8d5f.firebaseapp.com",
  projectId: "storysprout-f8d5f",
  storageBucket: "storysprout-f8d5f.appspot.com",
  messagingSenderId: "781161411685",
  appId: "1:781161411685:web:d5edc8e17f2a73b785c28c",
  measurementId: "G-FD6KSXCWX7",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Auth and Providers
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔐 Google Sign-In
function googleLogin() {
  return signInWithPopup(auth, provider);
}

// ✉️ Email Signup with Verification (✅ Fixed)
function emailSignup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return sendEmailVerification(user).then(() => {
        return userCredential; // ✅ RETURN userCredential so you can access .user
      });
    });
}

export { auth, provider, googleLogin, emailSignup };
