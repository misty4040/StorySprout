// Explore.jsx
import React from "react";
import emmaImg from "../assets/images/Emma.png";
import lucasImg from "../assets/images/lucas.png";
import sofiaImg from "../assets/images/sofia.png";
import maxImg from "../assets/images/max.png";
import ariaImg from "../assets/images/aria.png";
import oliverImg from "../assets/images/oliver.png";

const stories = [
  {
    title: "Emma's Magical Forest Adventure",
    summary:
      "Join Emma as she discovers a hidden path in the enchanted forest and meets a wise owl who teaches her about the magic of friendship and courage.",
    tags: ["🌲 Forest", "🗺️ Adventure"],
    age: "Ages 5-7",
    rating: "⭐⭐⭐⭐⭐",
    img: emmaImg,
  },
  {
    title: "Lucas and the Rainbow Castle",
    summary:
      "Lucas discovers a magical castle where he learns that the greatest treasure isn't gold or jewels, but the kindness we show to others.",
    tags: ["🏰 Castle", "💝 Kindness"],
    age: "Ages 4-6",
    rating: "⭐⭐⭐⭐⭐",
    img: lucasImg,
  },
  {
    title: "Sofia's Ocean Quest",
    summary:
      "Dive deep with Sofia as she explores underwater kingdoms and makes friends with dolphins, learning that true friendship knows no boundaries.",
    tags: ["🌊 Ocean", "👫 Friendship"],
    age: "Ages 6-8",
    rating: "⭐⭐⭐⭐⭐",
    img: sofiaImg,
  },
  {
    title: "Max's Space Mission",
    summary:
      "Blast off with Max on an intergalactic adventure where he discovers that being brave doesn't mean you're not scared—it means doing what's right even when you are.",
    tags: ["🚀 Space", "🦁 Courage"],
    age: "Ages 7-9",
    rating: "⭐⭐⭐⭐⭐",
    img: maxImg,
  },
  {
    title: "Aria's Art Adventure",
    summary:
      "Follow Aria as she paints her way through a magical forest where her artwork comes to life, teaching her that creativity has the power to change the world.",
    tags: ["🌲 Forest", "🎨 Creativity"],
    age: "Ages 5-8",
    rating: "⭐⭐⭐⭐⭐",
    img: ariaImg,
  },
  {
    title: "Oliver's Learning Quest",
    summary:
      "Join Oliver in a castle library where books magically transport him through time, showing him that learning is the greatest adventure of all.",
    tags: ["🏰 Castle", "📚 Learning"],
    age: "Ages 6-9",
    rating: "⭐⭐⭐⭐⭐",
    img: oliverImg,
  },
];

function Explore() {
  return (
    <div className="py-12 px-4 md:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-primary">
          Explore Sample Stories
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the magic of personalized storytelling with these sample
          adventures. Get inspired for your own child's story!
        </p>
      </div>

      <div className="grid lgm:grid-cols-[280px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Filter Stories</h3>

            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="ageFilter"
                >
                  Age Group
                </label>
                <select id="ageFilter" className="w-full border rounded p-2">
                  <option>All Ages</option>
                  <option>Ages 3-5</option>
                  <option>Ages 6-8</option>
                  <option>Ages 9-10</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="themeFilter"
                >
                  Theme
                </label>
                <select id="themeFilter" className="w-full border rounded p-2">
                  <option>All Themes</option>
                  <option>Adventure</option>
                  <option>Friendship</option>
                  <option>Kindness</option>
                  <option>Courage</option>
                  <option>Creativity</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="settingFilter"
                >
                  Setting
                </label>
                <select
                  id="settingFilter"
                  className="w-full border rounded p-2"
                >
                  <option>All Settings</option>
                  <option>Enchanted Forest</option>
                  <option>Royal Castle</option>
                  <option>Ocean Paradise</option>
                  <option>Space Adventure</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="sortBy"
                >
                  Sort By
                </label>
                <select id="sortBy" className="w-full border rounded p-2">
                  <option>Newest First</option>
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </aside>

        {/* Stories Grid */}
        <main>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
              >
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {story.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {story.summary}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{story.age}</span>
                    <span>{story.rating}</span>
                  </div>
                  <div className="grow"></div>
                  <button className="mt-4 w-full bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-100 font-medium py-2 rounded active:scale-95 transition">
                    Read Sample
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <section className="bg-purple-50 py-16 mt-20 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">
          Ready to Create Your Own Story?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          These are just examples of the magical adventures waiting for your
          child. Create a personalized story that makes them the hero!
        </p>
        <a
          href="/create-story"
          className="inline-block mt-6 px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-full font-semibold hover:bg-purple-100 active:scale-95"
        >
          Start Creating Now
        </a>
      </section>
    </div>
  );
}

export default Explore;
