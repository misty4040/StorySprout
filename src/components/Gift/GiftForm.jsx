import React, { useState } from "react";

function GiftForm() {
  const [formData, setFormData] = useState({
    occasion: "",
    deliveryDate: "",
    childName: "",
    age: "",
    interests: [],
    yourName: "",
    relationship: "",
    giftMessage: "",
    deliveryMethod: "",
    recipientEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (interest) => {
    setFormData((prev) => {
      const updated = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8081/api/gift/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        const err = await res.text();
        alert(`Failed to create gift story: ${err}`);
        return;
      }
      alert("Gift story submitted successfully!");

      console.log(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Form Column */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-purple-600">
              🎁 Create Your Gift Story
            </h2>
            <p className="text-slate-500 mt-2">
              Fill out the details below to create a magical personalized story
              as a gift.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* 🎈 Gift Details */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                📝 Gift Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Occasion</label>
                  <select
                    className="form-select w-full border rounded px-3 py-2"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                  >
                    <option value="">Select occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="christmas">Christmas</option>
                    <option value="graduation">Graduation</option>
                    <option value="holiday">Holiday</option>
                    <option value="just-because">Just Because</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Delivery Date
                  </label>
                  <input
                    type="date"
                    className="form-input w-full border rounded px-3 py-2"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* 👶 Recipient Info */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                👶 About the Recipient
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Child's Name</label>
                  <input
                    type="text"
                    name="childName"
                    placeholder="Enter child's name"
                    className="form-input w-full border rounded px-3 py-2"
                    value={formData.childName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Age</label>
                  <select
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="form-select w-full border rounded px-3 py-2"
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

              <div>
                <label className="block mb-2 font-medium">
                  Child's Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Animals",
                    "Adventure",
                    "Magic",
                    "Space",
                    "Art",
                    "Sports",
                    "Superpowers",
                    "Music",
                    "Cars",
                    "Fairies",
                    "Dance",
                  ].map((interest) => (
                    <label key={interest} className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden peer"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckbox(interest)}
                      />
                      <span className="px-4 py-2 rounded-full border border-gray-300 peer-checked:bg-purple-600 peer-checked:text-white text-sm font-medium inline-block">
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* 💌 Sender Info */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                💌 From You
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="yourName"
                    placeholder="Enter your name"
                    className="form-input w-full border rounded px-3 py-2"
                    value={formData.yourName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Relationship</label>
                  <select
                    name="relationship"
                    className="form-select w-full border rounded px-3 py-2"
                    value={formData.relationship}
                    onChange={handleChange}
                  >
                    <option value="">Select relationship</option>
                    <option value="parent">Parent</option>
                    <option value="grandparent">Grandparent</option>
                    <option value="aunt">Aunt</option>
                    <option value="uncle">Uncle</option>
                    <option value="sibling">Sibling</option>
                    <option value="friend">Family Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Personal Gift Message
                </label>
                <textarea
                  name="giftMessage"
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  placeholder="Write a special message..."
                  value={formData.giftMessage}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* 📬 Delivery */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                📬 Delivery Options
              </h3>
              <div className="flex gap-4 flex-wrap mb-4">
                {[
                  {
                    label: "Printed Book",
                    icon: "📚",
                    price: "₹200",
                    value: "print",
                  },
                  {
                    label: "Digital + Print",
                    icon: "🎁",
                    price: "₹300",
                    value: "both",
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="cursor-pointer w-full sm:w-[48%]"
                  >
                    <input
                      type="radio"
                      name="deliveryMethod"
                      className="hidden peer"
                      value={option.value}
                      checked={formData.deliveryMethod === option.value}
                      onChange={handleChange}
                    />
                    <div className="border rounded-lg p-4 text-center peer-checked:border-purple-600 peer-checked:bg-purple-50 transition">
                      <div className="text-3xl">{option.icon}</div>
                      <h4 className="text-lg font-semibold text-slate-700 mt-2">
                        {option.label}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {option.value === "print"
                          ? "Hardcover book"
                          : "Digital & Print both"}
                      </p>
                      <span className="inline-block mt-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {option.price}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Recipient Email (for digital)
                </label>
                <input
                  type="email"
                  name="recipientEmail"
                  className="form-input w-full border rounded px-3 py-2"
                  placeholder="Enter recipient's email"
                  value={formData.recipientEmail}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition active:scale-95"
              >
                🎁 Create Gift Story
              </button>
            </div>
          </form>
        </div>

        {/* Preview Column */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-center py-6 rounded-lg mb-4">
            <div className="text-xl font-bold">
              {formData.childName || "Your Child's Name"}
            </div>
            <div className="text-sm opacity-90">A Magical Adventure</div>
            <div className="text-xs mt-2 opacity-80">
              Created by: {formData.yourName || "Your Name"}
            </div>
          </div>
          <div className="text-slate-700 space-y-4">
            <h4 className="text-purple-600 font-semibold">Sample Page</h4>
            <p>
              "Once upon a time, in a land filled with wonder and magic, there
              lived a brave child named{" "}
              <strong>{formData.childName || "[Child's Name]"}</strong>..."
            </p>
            <p className="italic text-purple-600 font-medium">
              "With love from{" "}
              <strong>{formData.yourName || "[Your Name]"}</strong>"
            </p>

            <hr className="my-4" />
            <h4 className="text-purple-600 font-semibold">What's Included:</h4>
            <ul className="list-disc list-inside text-sm text-slate-600">
              <li>✨ Personalized story with child as the hero</li>
              <li>🎨 Beautiful illustrations throughout</li>
              <li>💌 Your personal message woven into the story</li>
              <li>📚 Age-appropriate content and themes</li>
              <li>🎁 Special gift presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiftForm;
