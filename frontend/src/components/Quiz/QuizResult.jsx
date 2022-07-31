import React from "react";
import { useSelector } from "react-redux";
import { Footer } from "../Footer/Footer";

export const QuizResult = () => {
  const quizArray = useSelector((state) => state.singleQuiz);
  const result = useSelector((state) => state.result);
  const quiz = quizArray[0]?.questionArray;
  console.log("hello");
  return (
    <div className="absolute w-full top-32 text-center bg-gradient-to-tr from-pink-400 via-indigo-500  to-cyan-300 md:top-60 ">
      <div className="overflow-x-auto relative ">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-gray-900 uppercase dark:text-emerald-500 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Question
              </th>
              <th scope="col" className="py-3 px-6">
                Your Answer
              </th>
              <th scope="col" className="py-3 px-6">
                Answer
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
            </tr>
          </thead>
          {quiz?.map((question, index) => {
            return (
              <tbody className="">
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 "
                  >
                    {question.questions}{" "}
                  </th>
                  <td className="py-4 px-6">{question.correctAnswer}</td>
                  <td className="py-4 px-6">{result[index]}</td>
                  <td className="py-4 px-6">
                    {question.correctAnswer == result[index] ? (
                      <button className="btn btn-success btn-sm">
                        Correct
                      </button>
                    ) : (
                      <button className="btn btn-error btn-sm">
                        Incorrect
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
};
