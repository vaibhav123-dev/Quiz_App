import express from "express";
import PostQuiz from "../models/PostQuiz.js";
const router = express.Router();

router.get("/quiz/:value", async (req, res) => {
  console.log(req.params.value);
  try {
    const Data = await PostQuiz.find({ title: req.params.value });
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
