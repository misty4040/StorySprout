import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginIllustration from "../assets/images/login.png";
import { auth, googleLogin } from "../components/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInAuth = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user.emailVerified) {
        setUser(user);
        navigate("/"); // Redirect after login
      } else {
        alert("Please verify your email before logging in.");
      }
    } catch (error) {
      alert("Login failed: " + error.message);
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await googleLogin();
      setUser(userCredential.user);
      navigate("/");
    } catch (error) {
      alert("Google login failed: " + error.message);
      console.error(error);
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold mb-2 text-center text-purple-700">
              Welcome Back
            </h1>
            <p className="text-md text-gray-600 text-center mb-6">
              Log in to continue creating magical stories
            </p>
            <form className="space-y-4" onSubmit={handleEmailLogin}>
              <div>
                <label htmlFor="email" className="block text-md font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-md font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
              >
                Sign In with Email
              </button>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-gray-600 text-sm mb-4">Or sign in with</p>
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Sign In with Google
              </button>
            </div>
          </div>
          <p className="text-center text-sm mt-6 text-gray-600">
            Don't have an account?
            <Link
              to="/signup"
              className="text-purple-600 hover:underline font-medium ml-1"
            >
              Sign up here
            </Link>
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src={loginIllustration}
            alt="Login Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SignInAuth;
