import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Only for manual signup
    uid: { type: String }, // Only for Google users
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
