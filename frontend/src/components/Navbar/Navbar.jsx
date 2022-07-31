import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../firebase";
import {
  logoutUserFailure,
  logoutUserRequest,
  logoutUserSuccess,
} from "../../Redux/Action/action";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDown = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logoutUserRequest());

    try {
      await logout().then(() => {
        dispatch(logoutUserSuccess());
      });
    } catch (error) {
      dispatch(logoutUserFailure(error));
      alert(error);
    }
  };

  return (
    <div>
      <nav className="bg-slate-700 h-20 flex items-center justify-between fixed w-full z-50 overflow-y-hidden ">
        <div className="bg-white w-12 h-12 ml-4 rounded-md">
          <img
            src="https://lh3.googleusercontent.com/4PdplZ69TXPSXvj93WO-VS0qInJGtu3Uiseq1eHe08pb6cALyg88r51bfdtgnkuCxQ=h200"
            alt=""
            className="w-full h-full rounded-md"
          />
        </div>
        <div className="">
          <ul className="md:hidden flex text-base text-sky-400 font-bold font-serif">
            <li className="text-base m-2 hover:text-teal-400 ">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base m-2 hover:text-teal-400 ">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-base m-2 hover:text-teal-400 ">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
        <div className=" text-sky-400 font-bold font-serif text-base m-4 hover:text-teal-400 ">
          <div>Vaibhav</div>
        </div>
      </nav>
      {!isOpen ? (
        <div>
          <ul className=" hidden    md:flex flex-col fixed w-full z-50 mt-20 text-base text-sky-400 font-bold font-serif bg-slate-800  items-center justify-center">
            <li className="text-base m-2 hover:text-teal-400 ">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base m-2 hover:text-teal-400 ">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-base m-2 hover:text-teal-400 ">
              <Link to="/signup">Signup</Link>
            </li>
            <span
              className=" m-2 "
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <svg
                className="animate-bounce w-6 h-6 ..."
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                ></path>
              </svg>
            </span>
          </ul>
        </div>
      ) : (
        <div>
          <ul className=" hidden    md:flex flex-col fixed w-full z-50 mt-20 text-base text-sky-400 font-bold font-serif bg-slate-800  items-center justify-center">
            <span
              className=" m-2 "
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                ></path>
              </svg> */}
              <svg
                className="animate-bounce w-6 h-6 ..."
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </ul>
        </div>
      )}
    </div>
  );
};

