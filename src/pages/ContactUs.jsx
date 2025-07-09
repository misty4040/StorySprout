import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import contactImage from "../assets/contact.png";

const ContactUs = () => {
  useEffect(() => {
    emailjs.init("v1JEDKkABCH7KSB_-"); // Your public key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yd2pmnq", "template_te1vrn6", e.target)
      .then(() => {
        alert("🎉 Message sent successfully!");
      })
      .catch((error) => {
        alert("❌ Failed to send message. " + JSON.stringify(error));
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
        {/* Form Section */}
        <div className="w-full md:w-2/3 p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-primary mb-1 font-heading">
              📬 Get in Touch With Us
            </h1>
            <p className="text-gray-600 text-sm">
              Got feedback or need a hand? We’d love to hear from you!
            </p>
          </div>
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-5 text-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="e.g. Alice Wonderland"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="e.g. alice@email.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="topic"
                className="block font-medium text-gray-700 mb-1"
              >
                How can we help?
              </label>
              <select
                id="topic"
                name="topic"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">-- Select an option --</option>
                <option value="bug">🐞 Report a Bug</option>
                <option value="feature">✨ Suggest a Feature</option>
                <option value="feedback">📝 General Feedback</option>
                <option value="help">❓ Need Help</option>
                <option value="other">📦 Something Else</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Your magical message..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-0.5 duration-200"
            >
              📨 Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/3 bg-purple-50 p-4">
          <img
            src={contactImage}
            alt="Contact Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
