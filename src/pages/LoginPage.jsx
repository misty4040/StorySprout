import React, { useState } from "react";
import GoogleLoginButton from "../components/GoogleLoginPage";
import { googleLogin } from "../components/Firebase";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:8081";

export default function LoginPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await googleLogin();
      const idToken = await userCredential.user.getIdToken();

      const res = await fetch(`${API_BASE}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Google login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      navigate("/");
    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-purple-700 mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-600">
                Sign in to continue creating magical stories
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
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
                  required
                  value={email}
                  placeholder="Enter your email address"
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
                  required
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition duration-300 active:scale-95 disabled:opacity-50"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Or continue with</p>
              <div className="flex gap-4 justify-center">
                <GoogleLoginButton onClick={handleGoogleLogin} />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="/images/login.png"
            alt="login character"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
