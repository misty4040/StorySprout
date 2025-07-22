import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginIllustration from "../assets/images/login.png";
import { googleLogin } from "../components/Firebase";
import GoogleLoginButton from "../components/GoogleLoginPage";

const API_BASE = "http://localhost:8081"; // Change if backend is hosted

const SignUp = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Signup failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      navigate("/"); // Redirect after signup
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const userCredential = await googleLogin(); // from Firebase
      const idToken = await userCredential.user.getIdToken();

      const res = await fetch(`${API_BASE}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Google signup failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      navigate("/");
    } catch (error) {
      alert("Google signup failed: " + error.message);
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold mb-2 text-center text-purple-700">
              Join StorySprout
            </h1>
            <p className="text-md text-gray-600 text-center mb-6">
              Create an account and start making magical stories
            </p>
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
              >
                {loading ? "Signing Up..." : "Sign Up with Email"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Or continue with</p>
              <div className="flex gap-4 justify-center">
                <GoogleLoginButton onClick={handleGoogleSignup} />
              </div>
            </div>
          </div>
          <p className="text-center text-sm mt-6 text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="text-purple-600 hover:underline font-medium ml-1"
            >
              Sign in here
            </Link>
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src={loginIllustration}
            alt="Sign Up Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
