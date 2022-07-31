import React from "react";
import "./Quiz.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleQuiz,
  postQuizResult,
  postUserResult,
} from "../../Redux/Action/action";

export const Quiz = ({ questionArr }) => {
  const data = useSelector((state) => state.singleQuiz);
  const user = useSelector((state) => state.user);
  // const userID = user._id;
  // const quizID = data[0]._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState([]);
  const [btnshow, setBtnshow] = useState(false);
  // console.log(ans);
  const [disable, setDisable] = useState(null);
  const handleQue = (index) => {
    setDisable(index);
  };
  return (
    <div className="pt-20 md:pt-20 shadow-lg shadow-indigo-500/50">
      <div className=" h-screen  ">
        <div className="w-1/2 mx-auto text-center md:w-full">
          <div className="flex items-center justify-between ">
            <div className="w-16  h-16  ">
              <svg
                className="w-8 h-8 animate-spin mt-5 ml-5 shadow-lg shadow-indigo-500/50 rounded-xl"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                ></path>
              </svg>
            </div>
            <div>
              <h1 className="text-sm m-2 text-white">
                {questionArr[num]?.questions}
              </h1>
            </div>
            <div className=" md:mr-4 inline-flex items-center justify-center px-2 py-1 h-6  text-xs font-bold  text-red-100 bg-emerald-600 rounded-full">
              {num + "/" + (questionArr.length - 1)}
            </div>
          </div>
          <ol
            className="grid grid-cols-2 mx-auto mt-10 md:flex flex-col"
            disabled={disable}
          >
            {questionArr[num]?.options?.map((answer, index) => (
              <li
                key={answer._id}
                className={
                  index == disable && disable != null
                    ? "show border border-gray-300 text-center m-2 p-2 text-black rounded-lg shadow-lg shadow-indigo-500/50"
                    : `notshow border border-gray-300 text-center m-2 p-2 text-black rounded-lg shadow-lg shadow-indigo-500/50`
                }
                onClick={(e) => {
                  setAns([...ans, answer.option]);
                  // setNum(num + 1);
                  handleQue(index);
                }}
              >
                {answer.option}
              </li>
            ))}
          </ol>
          <div className="mt-3 ml-5">
            <button
              className="bg-blue-500 shadow-lg shadow-indigo-500/50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
              onClick={() => {
                setNum(num + 1);
                setDisable(null);
              }}
            >
              Skip
            </button>
            {btnshow ? (
              <button
                className="bg-blue-500 shadow-lg shadow-indigo-500/50 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-1"
                onClick={() => {
                  dispatch(postUserResult(ans));
                  // const obj = {
                  //   quizId: quizID,
                  //   userId: userID,
                  //   quizResult: ans,
                  // };
                  // dispatch(postQuizResult(obj));
                  // navigate(`/quiz/${data[0].title}/result`);
                }}
              >
                Result
              </button>
            ) : (
              <button
                className="bg-blue-500 shadow-lg shadow-indigo-500/50 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-1"
                onClick={() => {
                  setNum(num + 1);
                  setDisable(null);
                  if (questionArr.length - 2 == num) {
                    setBtnshow(true);
                  }
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
