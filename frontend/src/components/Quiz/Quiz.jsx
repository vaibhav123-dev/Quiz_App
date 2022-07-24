import React from "react";
import { useState } from "react";

const quiz = [
  {
    questions: "What is the capital of India?",
    answers: ["New Delhi", "Mumbai", "Chennai", "Kolkata"],
    correctAnswer: "New Delhi",
  },
  {
    questions: "What is the capital of USA?",
    answers: ["New Delhi", "Mumbai", "Chennai", "New York"],
    correctAnswer: "New York",
  },
];
export const Quiz = () => {
  const [num, setNum] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quiz[num]);
  const [result, setResult] = useState(false);
  const getAnswer = (index) => {
    // console.log(index);
    // console.log(quiz[num].correctAnswer);
    if (quiz[num].answers[index] === quiz[num].correctAnswer) {
      setResult(true);
    } else {
      setResult(false);
    }
  };
  return (
    <div className="bg-white h-96 pt-5">
      <div className="w-full text-center">
        {" "}
        <h1 className="text-3xl m-2">{quiz[num].questions}</h1>
        <ol className="">
          {quiz[num].answers?.map((answer, index) => (
            <li
              className={`border border-gray-300 text-center m-2 p-2 ${
                result ? "bg-green-200" : "bg-red-200"
              }`}
              onClick={() => {
                // console.log(index);
                getAnswer(index);
              }}
            >
              {answer}
            </li>
          ))}
        </ol>
        <div className="mt-3">
          {" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
            onClick={() => {
              setNum(num + 1);
            }}
          >
            Next
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setNum(num - 1);
            }}
          >
            Prev
          </button>
        </div>
        <h1>{result}</h1>
      </div>
    </div>
  );
};
