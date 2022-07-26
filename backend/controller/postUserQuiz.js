import mongoose from "mongoose";
import express from "express";
import PostUser from "../models/postUser.js";
const router = express.Router();

router.get("/user/:value", async (req, res) => {
  console.log(req.params.value, "req.params");
  try {
    const user = await PostUser.find({ email: req.params.value });
    res.status(200).json(user);
    console.log(user, "user");
  } catch (error) {
    res.status(400).json(error);
  }
});

// router.get('/user/:id', async (req, res) => {
//     console.log(req.params.id, 'hello')
//     try {
//       console.log('hello2S')
//       const event = await User.findById(req.params.id)
//         .populate({
//           path: 'techEvent',
//           model: 'EventData',
//         }).populate({
//           path: 'nontechEvent',
//           model: 'NonTechEventData',
//         })
//         .lean()
//         .exec()
//       res.status(200).json(event)
//     } catch (err) {
//       res.status(400).json(err)
//     }
//   })
router.post("/:id", async (req, res) => {
  console.log(req.params.id, "hello");
  try {
    const data = await PostUser.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          quizAttempted: {
            $each: [
              { quizId: req.body.quizId, quizResult: req.body.quizResult },
            ],
          },
        },
      },
      { new: true }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
