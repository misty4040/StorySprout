import React, { useEffect } from "react";
import emailjs from "emailjs-com";
 import contactImage from "../assets/contact.png";

const ContactUs = () => {
  useEffect(() => {
    emailjs.init("v1JEDKkABCH7KSB_-"); // Replace with your actual Public Key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yd2pmnq", "template_te1vrn6", e.target)
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Error: " + JSON.stringify(error));
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans">
      {/* Header removed as requested */}
      <section className="w-full py-12">
        <div className="w-full max-w-2xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-extrabold text-primary mb-2">📬 Get in Touch With Us</h1>
              <p className="text-gray-600">Got feedback or need a hand? We’ll get back to you as soon as we can!</p>
            </div>
            <form className="space-y-5" id="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your UserName</label>
                <input type="text" id="name" name="name" required placeholder="e.g.Alice Wonderland" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input type="email" id="email" name="email" required placeholder="e.g. alice@email.com" className="mt-1 block w-full rounded-md  border border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
              </div>g
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700">How can we help you?</label>
                <select id="topic" name="topic" required className="mt-1 block w-full rounded-md border-gray-900 shadow-sm focus:border-primary focus:ring-primary">
                  <option value="">-- Please choose an option --</option>
                  <option value="bug">🐞 Report a Bug</option>
                  <option value="feature">✨ Suggest a Feature</option>
                  <option value="feedback">📝 General Feedback</option>
                  <option value="help">❓ Need Help</option>
                  <option value="other">📦 Something Else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Write your message to us!</label>
                <input type="text" id="message" name="message" required placeholder="Your magical message..." className="mt-1 block w-full rounded-md border  border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition">📨 Send Message</button>
            </form>
          </div>
          <div className="hidden md:block md:w-1/3 pl-8">
            <img src={contactImage} alt="Contact Us Illustration" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;