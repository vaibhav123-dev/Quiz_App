import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Loader } from "../Loader";
import { Quiz } from "./Quiz";

export const Quizes = () => {
  const singleQuiz = useSelector((state) => state?.singleQuiz);
  const [isLoading, setLoading] = useState(true);
  // const questionArr = singleQuiz[0]?.questionArray;
  // console.log(questionArr);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const questionArr = [
    {
      title: "html",
      questions: "HTML stands for -",
      options: [
        { option: "HighText Machine Language", isCorrect: false, id: 0 },
        {
          option: "HyperText and links Markup Language",
          isCorrect: false,
          id: 1,
        },
        { option: "HyperText Markup Language", isCorrect: true, id: 2 },
        { option: "None of these", isCorrect: false, id: 3 },
      ],
      correctAnswer: "HyperText Markup Language",
    },
  ];
  return isLoading ? <Loader /> : <Quiz questionArr={questionArr} />;
};
