import mongoose from "mongoose";
import PostQuiz from "../models/postQuiz.js";
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(typeof req.body);
    // console.log(await PostQuiz);
    const post = await PostQuiz.create(req.body);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const post = await PostQuiz.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});
export default router;
