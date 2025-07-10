import React from "react";
import loginIllustration from "../assets/images/login.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div>
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
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-md font-medium "
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-md font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary/50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-md font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-md font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a strong password"
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-md font-medium"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary/50"
                    required
                  />
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <input type="checkbox" id="terms" required className="mt-1" />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <input type="checkbox" id="newsletter" className="mt-1" />
                  <label htmlFor="newsletter">
                    Send me updates about new features and story templates
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark active:scale-95"
                >
                  Create Account
                </button>
              </form>
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-gray-600 text-sm mb-4">Or sign up with</p>
                <div className="flex gap-3">
                  <button className="flex items-center justify-center gap-2 flex-1 border px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 active:scale-95">
                    <FcGoogle size={20}/> Google
                  </button>
                  
                </div>
              </div>
            </div>
            <p className="text-center text-sm mt-6 text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="text-primary hover:underline font-medium ml-1"
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
    </div>
  );
};

export default SignUp;
