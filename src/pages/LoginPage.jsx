import React from "react";
import GoogleLoginButton from "../components/GoogleLoginPage";

export default function LoginPage({setUser}) {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Login Card */}
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
            <form className="space-y-6">
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
                  name="email"
                  placeholder="Enter your email"
                  required
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
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="accent-purple-600"
                  />
                  Remember me
                </label>
                <a href="#" className="text-purple-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition duration-300 active:scale-95"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Or continue with</p>
              <div className="flex gap-4">
                <GoogleLoginButton setUser={setUser} />
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
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
