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
        dispatch(getUserFromServer(email))
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
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) =>
                      setUserState({ ...userState, password: e.target.value })
                    }
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <p onClick={resetPass} className="text-gray-800">
                    Forgot password?
                  </p>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      to="/register"
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
