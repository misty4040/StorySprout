import express from "express";
import { createGift } from "../controller/gift.controller.js";

const router = express.Router();
router.post("/create", createGift);
export default router;
