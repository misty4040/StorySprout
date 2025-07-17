// backend/routes/story.routes.js
import express from "express";
import { createStory, getAllStories } from "../controller/story.controller.js";

const router = express.Router();

router.post("/create", createStory);       // Save story
router.get("/all", getAllStories);         // Fetch stories

export default router;
