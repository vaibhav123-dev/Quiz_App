import mongoose from "mongoose";

const questionArr = new mongoose.Schema({
  title: { type: String },
  questions: { type: String },
  options: [],
  correctAnswer: { type: String },
});
const postQuizSchema = new mongoose.Schema({
  title: { type: String },
  questionArray: [questionArr],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostQuiz = mongoose.model("PostQuiz", postQuizSchema);
export default PostQuiz;
