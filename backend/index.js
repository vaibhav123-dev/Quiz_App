import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import postQuiz from "./controller/postQuizController.js";
import getQuiz from "./controller/postQuizController.js";
import postThumb from "./controller/postThumbController.js";
import getThumb from "./controller/getPostThumbController.js";
import getsingleQuiz from "./controller/getQuizController.js";
import postUser from "./controller/postUserController.js";

const app = express();
app.use(cors({ origin: "http://localhost:5000", credentials: true }));
app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/admin", postQuiz);
app.use("/", getQuiz);
app.use("/admin/thumbnail", postThumb);
app.use("/admin/thumbnail", getThumb);
app.use("/admin", getsingleQuiz);
app.use("/admin/user", postUser);

const connection = process.env.DB;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err));
