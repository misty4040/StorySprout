import React from "react";

export default function CreateStory() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 to-purple-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Let's Create a Magical Story!
          </h1>
          <p className="text-lg text-gray-700">
            We'll guide you step by step — just bring your imagination.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-12">
            {/* Child Info */}
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-6">
                📝 Tell us about your child
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium">
                    Child's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter child's name"
                    className="w-full mt-2 px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Age</label>
                  <select
                    className="w-full mt-2 px-4 py-2 border rounded-md"
                    required
                  >
                    <option value="">Select age</option>
                    {[...Array(8)].map((_, i) => (
                      <option key={i} value={i + 3}>
                        {i + 3} years old
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium">Gender</label>
                <div className="flex gap-4 mt-2">
                  {["boy", "girl", "other"].map((g) => (
                    <label key={g} className="flex items-center gap-2">
                      <input type="radio" name="gender" value={g} required />{" "}
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Characters */}
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-6">
                🐾 Choose Story Characters
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🦄",
                    label: "Magical Unicorn",
                    desc: "A wise and magical friend",
                    val: "unicorn",
                  },
                  {
                    icon: "🐉",
                    label: "Friendly Dragon",
                    desc: "A gentle giant with a big heart",
                    val: "dragon",
                  },
                  {
                    icon: "🐻",
                    label: "Cuddly Bear",
                    desc: "A warm and protective companion",
                    val: "bear",
                  },
                  {
                    icon: "🧚",
                    label: "Garden Fairy",
                    desc: "A tiny helper with big magic",
                    val: "fairy",
                  },
                  {
                    icon: "🦉",
                    label: "Wise Owl",
                    desc: "A knowledgeable guide",
                    val: "owl",
                  },
                  {
                    icon: "✏️",
                    label: "Custom Character",
                    desc: "Create your own Main Character",
                    val: "rabbit",
                  },
                ].map(({ icon, label, desc, val }) => (
                  <label key={val} className="cursor-pointer">
                    <input
                      type="checkbox"
                      name="characters"
                      value={val}
                      className="hidden peer"
                    />
                    <div className="p-4 border-2 rounded-lg text-center peer-checked:border-purple-500 bg-white hover:shadow-md transition h-full">
                      <div className="text-4xl mb-2">{icon}</div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {label}
                      </h3>
                      <span className="grow"></span>
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-6">
                🌍 Choose Adventure Setting
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🌲",
                    label: "Enchanted Forest",
                    desc: "Magical trees and hidden paths",
                    val: "forest",
                  },
                  {
                    icon: "🏰",
                    label: "Royal Castle",
                    desc: "Towers, gardens, and royal adventures",
                    val: "castle",
                  },
                  {
                    icon: "🌊",
                    label: "Ocean Paradise",
                    desc: "Underwater wonders and beach fun",
                    val: "ocean",
                  },
                  {
                    icon: "✏️",
                    label: "Custom Setting",
                    desc: "Create your own Magical Place",
                    val: "space",
                  },
                ].map(({ icon, label, desc, val }) => (
                  <label key={val} className="cursor-pointer">
                    <input
                      type="radio"
                      name="setting"
                      value={val}
                      className="hidden peer"
                      required
                    />
                    <div className="p-4 border-2 rounded-lg text-center peer-checked:border-purple-500 bg-white hover:shadow-md transition">
                      <div className="text-4xl mb-2">{icon}</div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {label}
                      </h3>
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Themes */}
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-6">
                ✨ Story Themes
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  ["🗺️", "Adventure"],
                  ["👫", "Friendship"],
                  ["💝", "Kindness"],
                  ["🦁", "Courage"],
                  ["🎨", "Creativity"],
                  ["📚", "Learning"],
                  ["✏️", "Custom theme"],
                ].map(([icon, label]) => (
                  <label key={label} className="cursor-pointer">
                    <input
                      type="checkbox"
                      name="themes"
                      value={label.toLowerCase()}
                      className="hidden peer"
                    />
                    <span className="inline-block px-4 py-2 border-2 border-gray-300 rounded-full text-sm font-medium peer-checked:bg-purple-500 peer-checked:text-white transition">
                      {icon} {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Message */}
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-6">
                💌 Personal Message (Optional)
              </h2>
              <label className="block text-sm font-medium mb-2">
                Add a special message or dedication
              </label>
              <textarea
                className="w-full h-28 px-4 py-2 border rounded-md"
                placeholder="Example: 'Happy Birthday! Hope this adventure makes you smile!'"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary text-white px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-700"
              >
                ✨ Generate My Magical Story
              </button>
              <p className="mt-3 text-sm text-gray-500">
                Your personalized story will be ready in just a few moments!
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
