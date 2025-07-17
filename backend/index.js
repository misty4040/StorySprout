// index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import storyRoutes from "./routes/story.routes.js";

// Load environment variables from .env
dotenv.config();

// Setup
const app = express();
const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

// === 🔥 GLOBAL ERROR LOGGING ===
process.on("uncaughtException", (err) => {
  console.error("💥 Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("💥 Unhandled Rejection:", reason);
});

// === 🔧 Middleware ===
// app.use(cors());
app.use(express.json());

// === 🛣 Routes ===
app.use("/api/story", storyRoutes);

app.get("/", (req, res) => {
  console.log("🔥 Root route hit!");
  res.send("👋 Welcome to StorySprout API");
});

// === 🚀 Start the app ===
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log("✅ Checkpoint: Server actually started and is listening");
    });
    console.log("✅ Checkpoint: Server actually started and is listening");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Crash fast if DB fails
  });

