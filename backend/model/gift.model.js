import mongoose from "mongoose";

const giftSchema = new mongoose.Schema({
  occasion: String,
  deliveryDate: String,
  childName: String,
  age: String,
  interests: [String],
  yourName: String,
  relationship: String,
  giftMessage: String,
  deliveryMethod: String,
  recipientEmail: String,
  storyText: String, // ✅ added to save the generated story
}, { timestamps: true });

export const Gift = mongoose.model("Gift", giftSchema);
