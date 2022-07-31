import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar bg-base-100 fixed w-full z-50 overflow-y-hidden shadow-lg shadow-black ">
        <div className="navbar-start">
          <div className="">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <p
            className="btn btn-ghost normal-case text-xl shadow-lg shadow-black"
            onClick={() => {
              navigate("/");
            }}
          >
            QuizMe
          </p>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setIsSearched(!isSearched);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      {isOpen ? (
        <ul
          tabindex="0"
          className="absolute top-20 text-center shadow-lg shadow-black p-2 bg-base-100 rounded-box w-52 "
        >
          <li className="m-2">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Homepage
            </p>
          </li>
          <li className="m-2">
            <p
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </p>
          </li>
          <li className="m-2">
            <p
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </p>
          </li>
        </ul>
      ) : null}
      {isSearched ? (
        <div className="absolute top-24 right-32 md:right-9  flex">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-success w-full px-5"
          />
          <button className="btn btn-outline btn-default text-black">
            Success
          </button>
        </div>
      ) : null}
    </div>
  );
};
