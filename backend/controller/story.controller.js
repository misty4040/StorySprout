import { Story } from "../model/story.model.js";
import { generateStoryFromCohere } from "../utils/cohere.js";

// ✅ Create a new story
export const createStory = async (req, res) => {
  try {
    const {
      title,
      characters = [],
      setting = "",
      theme = "",
      childName,
      age,
      gender,
      customCharacter = "",
      customSetting = "",
      customTheme = "",
    } = req.body;

    // ✅ Final Characters - ensure array, trim & deduplicate
    let finalCharacters = Array.isArray(characters)
      ? [...characters]
      : characters.split(",").map((c) => c.trim());

    if (customCharacter.trim()) {
      finalCharacters.push(customCharacter.trim());
    }

    finalCharacters = [...new Set(finalCharacters)];

    // ✅ Final Setting
    const finalSetting = customSetting.trim() || setting.trim() || "a magical place";

    // ✅ Final Theme - multiple themes allowed, deduplicated
    let themeParts = theme.split(",").map((t) => t.trim()).filter(Boolean);

    if (customTheme.trim()) {
      themeParts.push(customTheme.trim());
    }

    const finalTheme = [...new Set(themeParts)].join(", ");

    // ✅ Title fallback
    const storyTitle = title?.trim() || `The ${finalTheme} of ${childName}`;

    // ✅ Prompt for Cohere
    const prompt = `Write an engaging story in English for a ${age}-year-old. Title: "${storyTitle}". Characters: ${finalCharacters.join(", ")}. Setting: ${finalSetting}. Theme: ${finalTheme}. The story should be fun and imaginative.`;

    console.log("📨 Prompt being sent to Cohere:", prompt);

    // ✅ Call Cohere
    const storyText = await generateStoryFromCohere(prompt);
    console.log("✅ Story generated from Cohere");

    // ✅ Save to DB
    const story = new Story({
      title: storyTitle,
      characters: finalCharacters,
      setting: finalSetting,
      theme: finalTheme,
      storyText,
      childName,
      age,
      gender,
    });

    const savedStory = await story.save();
    console.log("✅ Story saved to MongoDB");

    res.status(201).json({
      message: "Story created successfully",
      storyText: savedStory.storyText,
      storyId: savedStory._id,
    });
  } catch (error) {
    console.error("❌ Error generating story:", error);
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
