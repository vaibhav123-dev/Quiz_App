import express from "express";
import QuizThumbnail from "../models/postThumbnail.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const post = await QuizThumbnail.create(req.body);
    res.status(200).json(post);
    console.log(post);
  } catch (error) {
    res.status(400).json(error);
  }
});
export default router;
