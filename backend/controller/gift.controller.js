import dotenv from "dotenv";
dotenv.config();

import { Gift } from "../model/gift.model.js";
import { CohereClient } from "cohere-ai";
import { sendGiftEmail } from "../utils/email.js"; // ✅ Email helper

// ✅ Initialize Cohere client (v7 syntax)
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

    // ✅ Generate story using Cohere
    const response = await cohere.generate({
      model: "command-r-plus",
      prompt,
      max_tokens: 1000,
      temperature: 0.9,
    });

    const storyText =
      response.generations[0]?.text || "Story generation failed.";

    // ✅ Save to MongoDB
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

    // ✅ Send email with the story
    await sendGiftEmail({
      to: recipientEmail,
      subject: `A special story gift for ${childName} 🎁`,
      html: `
        <h2>Hello!</h2>
        <p>You’ve received a magical story for <strong>${childName}</strong> 🎉</p>
        <p><strong>Occasion:</strong> ${occasion}</p>
        <p><strong>Message from ${yourName} (${relationship}):</strong> "${giftMessage}"</p>
        <hr />
        <h3>Your Story:</h3>
        <p style="white-space: pre-line;">${storyText}</p>
        <hr />
        <p>Sent with love via <strong>StorySprout</strong> 🌱</p>
      `,
    });

    // ✅ Response
    res.status(201).json({
      message: "Gift story created and email sent!",
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
