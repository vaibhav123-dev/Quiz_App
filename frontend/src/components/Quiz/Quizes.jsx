import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Loader } from "../Loader";
import { Quiz } from "./Quiz";

export const Quizes = () => {
  const singleQuiz = useSelector((state) => state?.singleQuiz);
  const [isLoading, setLoading] = useState(true);
  const questionArr = singleQuiz[0]?.questionArray;
  console.log(questionArr);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return isLoading ? <Loader /> : <Quiz questionArr={questionArr} />;
};
