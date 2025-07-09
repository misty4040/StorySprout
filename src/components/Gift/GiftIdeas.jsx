import React from "react";

const GiftIdeas = () => {
  const ideas = [
    {
      icon: "🎂",
      title: "Birthday Gifts",
      description:
        "Make their special day even more magical with a birthday adventure story featuring them as the birthday hero.",
    },
    {
      icon: "🎄",
      title: "Holiday Presents",
      description:
        "Create lasting holiday memories with stories that capture the spirit of the season and family traditions.",
    },
    {
      icon: "🎓",
      title: "Achievement Rewards",
      description:
        "Celebrate milestones like learning to read, starting school, or overcoming challenges with inspiring stories.",
    },
    {
      icon: "💝",
      title: "Just Because",
      description:
        "Show someone you're thinking of them with a surprise story that brightens their day and makes them smile.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-slate-800 mb-12">
          Perfect Gift Ideas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-4xl mb-4">{idea.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {idea.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {idea.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftIdeas;
