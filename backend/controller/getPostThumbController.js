import mongoose from "mongoose";
import QuizThumbnail from "../models/postThumbnail.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Data = await QuizThumbnail.find();
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
