import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postThumbnail } from "../../Redux/Action/action";

export const Thumbnail = () => {
  const [data, setData] = useState({
    title: "",
    url: "",
  });

  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(postThumbnail(data));
  };
  return (
    <div className="w-64 text-slate-50">
      <div className="text-lg text-yellow-300 font-bold font-serif mb-5">
        Add Thumbnails
      </div>
      <form>
        <label
          className="block uppercase tracking-wide  text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Title{" "}
        </label>
        <input
          className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Title"
          onChange={(event) => {
            setData({ ...data, title: event.target.value });
          }}
        />
        <label
          className="block uppercase tracking-wide text-xs font-bold mb-2"
          for="grid-first-name"
        >
          ImageUrl{" "}
        </label>
        <input
          className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="url"
          placeholder="url"
          onChange={(event) => {
            setData({ ...data, url: event.target.value });
          }}
        />
        <button
          onClick={handleClick}
          className=" mt-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
