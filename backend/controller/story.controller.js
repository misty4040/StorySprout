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
      childName,  
      age,        
      gender,      
      customCharacter,
      customSetting,
      customTheme,
    } = req.body;

    const finalCharacters = [...characters];
    if (customCharacter) finalCharacters.push(customCharacter);

    const finalSetting =
    customSetting && customSetting.trim().length > 0
    ? customSetting.trim()
    : setting;

    let finalTheme = theme;
    if (customTheme?.trim()) {
      finalTheme = theme ? `${theme}, ${customTheme}` : customTheme;
    }
    const prompt = `Write a engaging story in English for a ${age}-year-old. Title: "${title}". Characters: ${finalCharacters?.join(", ")}. Setting: ${finalSetting}. Theme: ${finalTheme}. The story should be fun and imaginative.`;

    console.log("📨 Prompt being sent to Cohere:", prompt);

    const storyText = await generateStoryFromCohere(prompt);

    console.log("✅ Story generated from Cohere");

    const story = new Story({
      title,
      characters : finalCharacters,
      setting : finalSetting,
      theme : finalTheme,
      storyText,
      childName,  // ✅ Now included
      age,        // ✅ Now included
      gender      // ✅ Now included
    });

    const savedStory = await story.save();
    console.log("✅ Story saved to MongoDB");

    res.status(201).json({
      message: "Story created successfully",
      storyText: savedStory.storyText,
    });
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
