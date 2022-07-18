import mongoose from "mongoose";

const quizThumbnailSchema = new mongoose.Schema({
  title: { type: String },
  url: { type: String },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const QuizThumbnail = mongoose.model("QuizThumbnail", quizThumbnailSchema);

export default QuizThumbnail;
