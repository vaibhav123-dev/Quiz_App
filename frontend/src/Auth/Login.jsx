import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  login,
  useAuth,
  resetPassword,
  loginWithGoogle,
  signInWithGoogle,
  loginWithFaceboook,
} from "../firebase";
import {
  getUserFromServer,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
} from "../Redux/Action/action";

export const Login = () => {
  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const currentUser = useAuth();
  console.log(currentUser);

  const dispatch = useDispatch();

  const { email, password } = userState;

  const handleLogin = async (e) => {
    console.log(userState);
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match");
    // }
    dispatch(loginUserRequest());

    try {
      await login(email, password).then(() => {
        dispatch(loginUserSuccess(userState));
        dispatch(getUserFromServer(email));
        navigate("/");
      });
    } catch (error) {
      dispatch(loginUserFailure(error));
      alert(error);
    }
  };
  const resetPass = async (e) => {
    console.log("hello");
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("Password reset link sent!");
    } catch (error) {
      alert(error);
    }
  };

  // const loginFacebook = async (e) => {
  //   console.log("hello");
  //   e.preventDefault();
  //   try {
  //     await loginWithFaceboook();
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  return (
    <div>
      <section className="h-screen pt-40 ">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 ">
            <div className="m-4 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 ml-10 md:mt-10">
              <img
                src="./sign.gif"
                className="w-5/6 md:w-full"
                alt="Sample image"
              />
            </div>
            <div className=" xl:w-5/12 lg:w-1/2 md:w-full mr-5 mb-12 md:mb-0 md:mx-auto">
              <form className="md:mx-auto">
                <div className="mb-6">
                  <input
                    type="text"
                    className="input input-bordered input-accent w-full max-w-xs text-white"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) => {
                      setUserState({ ...userState, email: e.target.value });
                    }}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="input input-bordered input-accent w-full max-w-xs text-white"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) =>
                      setUserState({ ...userState, password: e.target.value })
                    }
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check"></div>
                  <p onClick={resetPass} className="label-text text-sm">
                    Forgot password?
                  </p>
                </div>

                <div className="text-center lg:text-center">
                  <button
                    type="button"
                    className="inline-block px-7 py-3  bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0 label-text ">
                    Don't have an account ?
                    <Link
                      className="text-red-600 m-2 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      to="/signup"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
