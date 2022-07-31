import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signup } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import {
  postUserToServer,
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess,
} from "../Redux/Action/action";
import { Nav } from "../components/Navbar/Nav";
import { Footer } from "../components/Footer/Footer";

export const Register = () => {
  const [userState, setUserState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = userState;

  const handleRegistration = async (e) => {
    e.preventDefault();

    const userToServer = {
      name: displayName,
      email: email,
    };
    dispatch(registerUserRequest());
    try {
      await signup(email, password).then(() => {
        dispatch(registerUserSuccess(userState));
        dispatch(postUserToServer(userToServer));
        navigate("/login");
      });
    } catch (error) {
      dispatch(registerUserFailure(error));
      alert(error);
    }
  };

  const googleLogin = async (e) => {
    console.log("hello");
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <section className="h-screen pt-40 ">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 ml-10 md:mt-16">
              <img
                src="./login.gif"
                className="w-5/6 h-11/12 md:w-full"
                alt="Sample image"
              />
            </div>
            <div className=" xl:w-5/12 lg:w-5/12 md:w-full mr-5 mb-12 md:mb-0 md:mx-auto mt-4">
              <div className="flex flex-row items-center justify-center mt-4">
                <p className="text-lg mb-0 mr-4 md:m-0 label-text">
                  Sign in with
                </p>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block p-3  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  onClick={googleLogin}
                >
                  <FcGoogle />
                </button>
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0 text-white">
                  Or
                </p>
              </div>
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="input input-bordered input-accent w-full max-w-xs text-white"
                    id="exampleFormControlInput2"
                    placeholder="Name..."
                    onChange={(e) =>
                      setUserState({
                        ...userState,
                        displayName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="input input-bordered input-accent w-full max-w-xs text-white"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) =>
                      setUserState({ ...userState, email: e.target.value })
                    }
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
                <div className="mb-6">
                  <input
                    type="password"
                    className="input input-bordered input-accent w-full max-w-xs text-white"
                    id="exampleFormControlInput2"
                    placeholder="Confirm Password"
                    onChange={(e) =>
                      setUserState({
                        ...userState,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        checked="checked"
                        className="checkbox checkbox-secondary mr-1"
                      />
                      <span className="label-text">Remember me</span>
                    </label>
                  </div>
                </div>

                <div className="text-center lg:text-center">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 md:py=5 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleRegistration}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
