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
  const [result, setResult] = useState(null);
  const getAnswer = (index) => {
    console.log(index);
    console.log(quiz[num].correctAnswer);
    if (quiz[num].answers[index] === quiz[num].correctAnswer) {
      setResult("Correct");
    } else {
      setResult("Wrong");
    }
  };
  return (
    <div className="App">
      <h1>{quiz[num].questions}</h1>
      <ol>
        {quiz[num].answers.map((answer, index) => (
          <li
            onClick={() => {
              // console.log(index);
              getAnswer(index);
            }}
          >
            {answer}
          </li>
        ))}
      </ol>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        prev
      </button>
      <h1>{result}</h1>
    </div>
  );
};
