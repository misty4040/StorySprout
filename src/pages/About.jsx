// src/pages/About.jsx

import React from "react";
import Footer from "../components/Footer";
import treeImage from "../assets/images/tree.png"; // adjust if path differs

const About = () => {
  return (
    <>
      {/* Our Story */}
      <section className="bg-white py-space-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-space-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-dark mb-space-4 font-heading">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed font-sans">
              StorySprout was born from a simple belief: every child deserves to
              see themselves as the hero of their own magical adventure. We
              combine the power of AI with the timeless art of storytelling to
              create personalized books that spark imagination, build
              confidence, and create lasting memories.
              <br className="hidden md:block" />
              <br />
              Founded by parents and educators who understand the profound
              impact of storytelling on child development, we're committed to
              making personalized literature accessible to families everywhere.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={treeImage}
              alt="Beautiful autumn tree representing growth and stories"
              className="w-full max-w-md rounded-lg shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-100 py-space-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-space-8 font-heading">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-6 text-center">
            <div className="p-space-6 bg-white rounded-lg shadow-card  hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="text-4xl mb-space-4">🌱</div>
              <h3 className="text-xl font-semibold mb-space-2">
                Nurture Imagination
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every child's imagination is a seed waiting to sprout into
                magnificent stories.
              </p>
            </div>
            <div className="p-space-6 bg-white rounded-lg shadow-card  hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="text-4xl mb-space-4">📖</div>
              <h3 className="text-xl font-semibold mb-space-2">
                Promote Literacy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We inspire a love of reading by making kids the heroes of their
                own stories.
              </p>
            </div>
            <div className="p-space-6 bg-white rounded-lg shadow-card  hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="text-4xl mb-space-4">🌟</div>
              <h3 className="text-xl font-semibold mb-space-2">
                Build Confidence
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stories of success empower kids to face real-world challenges
                with courage.
              </p>
            </div>
            <div className="p-space-6 bg-white rounded-lg shadow-card  hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="text-4xl mb-space-4">❤️</div>
              <h3 className="text-xl font-semibold mb-space-2">
                Strengthen Bonds
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Precious moments shared through storytelling build lasting
                family connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-space-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-space-8 font-heading ">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-6 text-center">
            <div className="p-space-6 bg-gray-50 rounded-lg shadow-card  hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="text-4xl mb-space-4">🎨</div>
              <h3 className="text-xl font-semibold mb-space-2">
                Creativity First
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We celebrate the boundless creativity of every child.
              </p>
            </div>
            <div className="p-space-6 bg-gray-50 rounded-lg shadow-card  hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="text-4xl mb-space-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-space-2">
                Safety & Privacy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We prioritize your family’s safety and never share your data.
              </p>
            </div>
            <div className="p-space-6 bg-gray-50 rounded-lg shadow-card  hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="text-4xl mb-space-4">🌍</div>
              <h3 className="text-xl font-semibold mb-space-2">Inclusivity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We ensure every child is represented in the stories they read.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 text-white text-center py-space-12 px-4 ">
        <div className="max-w-2xl mx-auto border border-white p-space-8 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800">
          <h2 className="text-3xl font-bold font-heading mb-space-4">
            Ready to Create Magic?
          </h2>
          <p className="text-lg font-sans mb-space-6">
            Join thousands of families who’ve discovered the joy of personalized
            storytelling.
          </p>
          <a
            href="/create-story"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded hover:shadow-md transition  hover:shadow-lg transition hover:-translate-y-0.5 active:scale-95"
          >
            Start Creating Stories
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
