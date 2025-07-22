import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateStory() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get("childName") || "Little One";
    const message = form.get("message") || "";
    const age = form.get("age") || "6";
    const gender = form.get("gender") || "Other";

    // Characters
    let characters = form.getAll("characters");
    const customCharacter = form.get("customCharacter")?.trim();
    if (customCharacter) characters.push(customCharacter);
    if (characters.length === 0) characters = ["magical friend"];

    // Settings
    const setting = form.get("setting");
    const customSetting = form.get("customSetting")?.trim();
    const finalSetting = customSetting || setting || "space";

    // Themes
    const themes = form.getAll("themes");
    const customTheme = form.get("customTheme")?.trim();
    let finalTheme = themes[0]?.toLowerCase() || "";
    if (customTheme) {
      finalTheme = finalTheme ? `${finalTheme}, ${customTheme}` : customTheme;
    }
    if (!finalTheme) finalTheme = "Adventure";

    const title = `The ${finalTheme} of ${name}`;

    const query = new URLSearchParams({
      name,
      age,
      gender,
      characters: characters.join(", "),
      customCharacter,
      setting: finalSetting,
      customSetting,
      theme: finalTheme,
      customTheme,
      message,
      title,
    }).toString();

    navigate(`/story-result?${query}`);
  };

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
          <form className="space-y-12" onSubmit={handleSubmit}>
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
                    name="childName"
                    ref={nameRef}
                    placeholder="Enter child's name"
                    className="w-full mt-2 px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Age</label>
                  <select
                    name="age"
                    className="w-full mt-2 px-4 py-2 border rounded-md"
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
                  {["Boy", "Girl", "Other"].map((g) => (
                    <label key={g} className="flex items-center gap-2">
                      <input type="radio" name="gender" value={g} /> {g}
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
                    icon: "🐇",
                    label: "Brave Rabbit",
                    desc: "A quick and clever hero",
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
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <label className="block text-md font-medium text-gray-700 mb-2">
                  ✏️ Or Add Your Own Main Character (Optional)
                </label>
                <input
                  type="text"
                  name="customCharacter"
                  placeholder="e.g. Captain Zoom, Shadow Cat, etc."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
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
                    icon: "🌌",
                    label: "Outer Space",
                    desc: "A thrilling journey among stars and planets",
                    val: "space",
                  },
                ].map(({ icon, label, desc, val }) => (
                  <label key={val} className="cursor-pointer">
                    <input
                      type="radio"
                      name="setting"
                      value={val}
                      className="hidden peer"
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

              <div className="mt-6">
                <label className="block text-md font-medium text-gray-700 mb-2">
                  ✏️ Or Add Your Own Setting (Optional)
                </label>
                <input
                  type="text"
                  name="customSetting"
                  placeholder="e.g. Sunny Islands, Frozen Mountains, etc."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
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
                  ["🛡️", "Bravery"],
                  ["🧩", "Problem Solving"],
                  ["⚖️", "Justice"],
                  ["🧠", "Curiosity"],
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
              <div className="mt-6">
                <label className="block text-md font-medium text-gray-700 mb-2">
                  ✏️ Or Add Your Own Theme (Optional)
                </label>
                <input
                  type="text"
                  name="customTheme"
                  placeholder="e.g. Empathy, Wisdom, etc."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
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
                name="message"
                ref={messageRef}
                className="w-full h-28 px-4 py-2 border rounded-md"
                placeholder="Example: 'Happy Birthday! Hope this adventure makes you smile!'"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary text-white px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-700 active:scale-95"
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
