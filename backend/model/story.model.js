import mongoose from "mongoose";

const createStorySchema = new mongoose.Schema({
  childName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Boy", "Girl", "Other"],
    required: true,
  },

  // Characters (predefined or custom)
  characters: {
    type: [String], // selected character names
    required: true,
  },
  customCharacter: {
    type: String, // user-entered custom character, optional
  },

  // Setting (predefined or custom)
  setting: {
    type: String, // selected setting
    required: true,
  },
  customSetting: {
    type: String, // user-entered setting, optional
  },

  // Theme (predefined or custom)
  theme: {
    type: String, // selected theme
    required: true,
  },
  customTheme: {
    type: String, // user-entered custom theme, optional
  },

  personalMessage: {
    type: String,
  },

  storyText: {
    type: String,
    required: true,
  },

  coverImageUrl: { //generated cover art for the storybook
    type: String,
  },

  createdBy: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const Story = mongoose.model("Story", createStorySchema);
