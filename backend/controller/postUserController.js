import express from "express";
import PostUser from "../models/postUser.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const User = await PostUser.create(req.body);
    res.status(200).json(User);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
