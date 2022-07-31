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
    <div className=" pt-48 md:pt-56 shadow-lg shadow-black">
      <div className=" h-screen  ">
        <div className="w-1/2 mx-auto text-center md:w-full">
          <div className="flex items-center justify-between ">
            <div className="flex">
              <svg
                className="w-6 h-6 mr-2 text-black animate-ping shadow-lg shadow-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>

              <h1 className="text-sm  text-black  font-medium">
                {questionArr[num]?.questions}
              </h1>
            </div>
            <div className=" md:mr-4 inline-flex items-center justify-center px-2 py-1 h-6  text-xs font-bold  text-red-100 bg-emerald-600 rounded-full">
              {num + " / " + (questionArr.length - 1)}
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
                    ? "show border  text-center m-2 p-2 text-black btn btn-outline rounded-lg shadow-md shadow-black"
                    : `notshow border  text-center m-2 p-2 text-black btn btn-outline rounded-lg shadow-md shadow-black`
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
              className=" shadow-lg shadow-black btn btn-outline text-black btn-sm rounded mr-1 ml-2"
              onClick={() => {
                setNum(num + 1);
                setDisable(null);
              }}
            >
              Skip
            </button>
            {btnshow ? (
              <button
                className="shadow-lg shadow-black btn btn-outline text-black btn-sm rounded "
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
                className="shadow-lg shadow-black btn btn-outline text-black btn-sm rounded mr-1"
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
