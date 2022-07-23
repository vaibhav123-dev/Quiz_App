import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostThumbnail, getSingleQuiz } from "../../Redux/Action/action";
// import { TsParticle } from "../Particle/Tsparticle";

export const Dashboard = () => {
  const thumbnailData = useSelector((state) => state.thumbNails) || [];
  console.log(thumbnailData);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(getSingleQuiz(item.title));
  };

  useEffect(() => {
    dispatch(getPostThumbnail());
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 bg-zinc-800">
        {thumbnailData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center max-w-sm mx-auto my-8 cursor-pointer"
              onClick={() => {
                handleClick(item);
              }}
            >
              <div
                className="bg-slate-800 h-64 w-64 rounded-lg shadow-md bg-cover bg-center"
                //   style={{
                //     backgroundImage: `url(${item.url})`,
                //   }}
              >
                <img
                  className="rounded-t-lg w-full h-48 "
                  src={item.url}
                  alt=""
                />
              </div>
              <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div className="py-2 text-center font-bold uppercase tracking-wide  bg-violet-500">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
