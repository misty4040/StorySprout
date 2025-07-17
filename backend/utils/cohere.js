// utils/cohere.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const COHERE_API_KEY = process.env.COHERE_API_KEY;

export async function generateStoryFromCohere(prompt) {
  try {
    const response = await axios.post(
      "https://api.cohere.ai/v1/generate",
      {
        model: "command",
        prompt: prompt,
        max_tokens: 500,
        temperature: 0.8
      },
      {
        headers: {
          "Authorization": `Bearer ${COHERE_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const generatedText = response.data.generations?.[0]?.text;
    if (!generatedText) {
      console.error("❌ Cohere returned no text:", response.data);
      throw new Error("No text returned from Cohere.");
    }

    return generatedText;
  } catch (error) {
    console.error("❌ Error from Cohere:", error.message);
    throw new Error("Cohere API failed");
  }
}
