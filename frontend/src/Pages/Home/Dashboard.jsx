import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostThumbnail, getSingleQuiz } from "../../Redux/Action/action";
import { Carousel } from "../../components/Carousel/Carousel";
import { Pagination } from "../../components/Pagination";
import { FloatingBar } from "../../components/FloatingBar";
// import { TsParticle } from "../Particle/Tsparticle";

export const Dashboard = () => {
  const thumbnailData = useSelector((state) => state.thumbNails) || [];
  console.log(thumbnailData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (item) => {
    dispatch(getSingleQuiz(item.title));
    localStorage.setItem("quiz", JSON.stringify(item.title));
    navigate("/quizes");
  };

  useEffect(() => {
    dispatch(getPostThumbnail());
  }, []);
  return (
    <div>
      {/* <Carousel /> */}
      <div className="grid grid-cols-4 md:grid-cols-1 pt-28 md:pt-44">
        {thumbnailData.map((item) => {
          return (
            <div className="hover:shadow-pink-500/10 hover:border-pink-500/10bg-white dark:bg-gray-800 shadow-lg dark:shadow-none rounded-2xl h-80 w-72 m-10 hover:shadow-xl dark:hover:shadow-dark">
              <div className="flex justify-center pt-12">
                <img
                  src={item.url}
                  alt=""
                  width="180"
                  height="180"
                  onClick={() => {
                    handleClick(item);
                  }}
                />
              </div>
              <h2 className="text-gray-800 dark:text-gray-300 font-sans font-medium text-xl pt-8 pl-8">
                Javascript
              </h2>
            </div>
          );
        })}
      </div>
      <Pagination />
      <FloatingBar />
    </div>
  );
};
