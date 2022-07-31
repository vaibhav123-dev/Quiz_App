import React, { useState } from "react";

export const FloatingBar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      {!isShow ? (
        <aside className="fixed z-50 flex items-center justify-center px-5 py-3 transition ease-in-out delay-150 duration-300 text-white bg-black rounded-lg bottom-4 right-4">
          <a
            href="/new-thing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:opacity-75"
          >
            Hey! Come Check This Out 👋
          </a>

          <button
            className="p-1 ml-3 rounded bg-white/20 hover:bg-white/10"
            aria-label="Dismiss Popup"
            onClick={() => setIsShow(!isShow)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </aside>
      ) : (
        <aside className="fixed z-50 flex items-center justify-center px-5 py-2 transition ease-in-out delay-150 duration-300 text-white bg-black rounded-lg bottom-4 right-4">
          <button
            className="p-1 ml-1 rounded bg-white/20 hover:bg-white/10"
            aria-label="Dismiss Popup"
            onClick={() => setIsShow(!isShow)}
          >
            <svg
              className=" animate-ping text-white w-6 h-6 ..."
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </aside>
      )}
    </div>
  );
};
