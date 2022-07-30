import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostThumbnail, getSingleQuiz } from "../../Redux/Action/action";
import { Carousel } from "../../components/Carousel/Carousel";
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
            <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none rounded-2xl h-80 w-72 m-10 hover:shadow-xl dark:hover:shadow-dark">
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
    </div>

    // <div>
    //   <div className="grid grid-cols-4 bg-zinc-800">
    //     {thumbnailData.map((item) => {
    //       return (
    //         <div
    //           key={item.id}
    //           className="flex flex-col justify-center items-center max-w-sm mx-auto my-8 cursor-pointer"
    //           onClick={() => {
    //             handleClick(item);
    //           }}
    //         >
    //           <div className="bg-slate-800 h-64 w-64 rounded-lg shadow-md bg-cover bg-center">
    //             <img
    //               className="rounded-t-lg w-full h-48 "
    //               src={item.url}
    //               alt=""
    //             />
    //           </div>
    //           <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
    //             <div className="py-2 text-center font-bold uppercase tracking-wide  bg-violet-500">
    //               {item.title}
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};
