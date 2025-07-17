import { Story } from "../model/story.model.js";
import { generateStoryFromCohere } from "../utils/cohere.js";

// ✅ Create a new story
export const createStory = async (req, res) => {
  try {
    const {
      title,
      characters,
      setting,
      theme,
      tone,
      targetAge,
      language,
      childName,  // ✅ Added
      age,        // ✅ Added
      gender      // ✅ Added
    } = req.body;

    const prompt = `Write a ${tone?.toLowerCase()} story in ${language} for a ${targetAge}-year-old. Title: "${title}". Characters: ${characters?.join(", ")}. Setting: ${setting}. Theme: ${theme}. The story should be engaging and imaginative.`;

    console.log("📨 Prompt being sent to Cohere:", prompt);

    const storyText = await generateStoryFromCohere(prompt);

    console.log("✅ Story generated from Cohere");

    const story = new Story({
      title,
      characters,
      setting,
      theme,
      tone,
      targetAge,
      language,
      storyText,
      childName,  // ✅ Now included
      age,        // ✅ Now included
      gender      // ✅ Now included
    });

    const savedStory = await story.save();
    console.log("✅ Story saved to MongoDB");

    res.status(201).json(savedStory);
  } catch (error) {
    console.error("❌ Error generating story:", error);  // logs full error
    res.status(500).json({ error: "Failed to generate story." });
  }
};

// ✅ Get all stories
export const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    console.error("❌ Error fetching stories:", error.message);
    res.status(500).json({ error: "Failed to fetch stories." });
  }
};
