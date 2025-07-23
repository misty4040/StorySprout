import dotenv from "dotenv";
dotenv.config();
console.log("Loaded Cohere Key?", process.env.COHERE_API_KEY ? "YES" : "NO");
import { Gift } from "../model/gift.model.js";
import { CohereClient } from "cohere-ai";

// Initialize Cohere client (v7 syntax)
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export const createGift = async (req, res) => {
  try {
    const {
      occasion,
      deliveryDate,
      childName,
      age,
      interests,
      yourName,
      relationship,
      giftMessage,
      deliveryMethod,
      recipientEmail,
    } = req.body;

    const interestList = interests.join(", ");
    const prompt = `Write a heartwarming children's story for a ${age}-year-old named ${childName} who loves ${interestList}. The story is a gift from their ${relationship}, ${yourName}, for the occasion of ${occasion}. End with the message: "${giftMessage}".`;
    console.log("📨 Prompt being sent to Cohere:", prompt);
    // Call Cohere API
    const response = await cohere.generate({
      model: "command-r-plus",
      prompt,
      max_tokens: 1000, // must be snake_case for v7
      temperature: 0.9,
    });

    const storyText =
      response.generations[0]?.text || "Story generation failed.";

    const newGift = new Gift({
      occasion,
      deliveryDate,
      childName,
      age,
      interests,
      yourName,
      relationship,
      giftMessage,
      deliveryMethod,
      recipientEmail,
      storyText,
    });

    await newGift.save();

    res.status(201).json({
      message: "Gift story created and generated!",
      gift: newGift,
    });
  } catch (error) {
    console.error("❌ Error in createGift:", error);
    res.status(500).json({
      message: "Error creating gift story",
      error: error.message,
    });
  }
};
