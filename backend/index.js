// index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import storyRoutes from "./routes/story.routes.js";
import authRoutes from "./routes/authroutes.js";

// Load environment variables
dotenv.config();

// Load serviceAccountKey.json safely

const app = express();
const PORT = process.env.PORT || 8081;
const DB_URI = process.env.MONGODB_URI;

// === Middleware ===
app.use(express.json());
app.use(cors());
// Fix COOP warning for Firebase popup login
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// === Routes ===
app.use("/api/auth", authRoutes); // All auth logic is in authroutes.js
app.use("/api/story", storyRoutes); // Protect story routes

// === Connect to MongoDB ===
mongoose
  .connect(DB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// === Protected Middleware ===
// Old inline middleware (REMOVE THIS PART)

// === Root Route ===
app.get("/", (req, res) => {
  res.send("🚀 StorySprout API is running");
});

// === Start Server ===
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
