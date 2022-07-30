import axios from "axios";
import {
  CREATE_QUIZ_FAILURE,
  CREATE_QUIZ_REQUEST,
  CREATE_QUIZ_SUCCESS,
  GET_SINGLE_QUIZ_FAILURE,
  GET_SINGLE_QUIZ_REQUEST,
  GET_SINGLE_QUIZ_SUCCESS,
  GET_THUMBNAIL_FAILURE,
  GET_THUMBNAIL_REQUEST,
  GET_THUMBNAIL_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  POST_USER_FAILURE,
  POST_USER_REQUEST,
  POST_USER_RESULT_FAILURE,
  POST_USER_RESULT_REQUEST,
  POST_USER_RESULT_SUCCESS,
  POST_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SET_LOGIN_USER,
  SET_USER_RESULT_SUCCESS,
} from "../ActionType/actionType";

// Create quiz in redux store
export const quizRequest = () => {
  return {
    type: CREATE_QUIZ_REQUEST,
  };
};

export const quizSuccess = (quiz) => {
  return {
    type: CREATE_QUIZ_SUCCESS,
    payload: quiz,
  };
};

export const quizFailure = (error) => {
  return {
    type: CREATE_QUIZ_FAILURE,
    payload: error,
  };
};

//get the thumbnail from the server and set it into store

export const getThumbnailRequest = () => {
  return {
    type: GET_THUMBNAIL_REQUEST,
  };
};

export const getThumbnailSuccess = (thumbnail) => {
  return {
    type: GET_THUMBNAIL_SUCCESS,
    payload: thumbnail,
  };
};

export const getThumbnailFailure = (error) => {
  return {
    type: GET_THUMBNAIL_FAILURE,
    payload: error,
  };
};

//get single quiz from the server and set it into store
export const getSingleQuizRequest = () => {
  return {
    type: GET_SINGLE_QUIZ_REQUEST,
  };
};
export const getSingleQuizSuccess = (quiz) => {
  return {
    type: GET_SINGLE_QUIZ_SUCCESS,
    payload: quiz,
  };
};
export const getSingleQuizFailure = (error) => {
  return {
    type: GET_SINGLE_QUIZ_FAILURE,
    payload: error,
  };
};

//Post the quiz to the server
export const postQuizObj = (obj) => (dispatch) => {
  // console.log(obj);
  axios
    .post("https://quiz-application-mern.herokuapp.com/admin", obj)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
//post the thumbnail to the server
export const postThumbnail = (obj) => (dispatch) => {
  console.log(obj);
  axios
    .post("https://quiz-application-mern.herokuapp.com/admin/thumbnail", obj)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
//get the thumbnail from the server
export const getPostThumbnail = () => (dispatch) => {
  console.log("hello");
  dispatch(getThumbnailRequest());
  axios
    .get("https://quiz-application-mern.herokuapp.com/admin/thumbnail")
    .then((res) => {
      console.log(res.data);
      dispatch(getThumbnailSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getThumbnailFailure(err));
    });
};
//get single quiz from the server
export const getSingleQuiz = (title) => (dispatch) => {
  dispatch(getSingleQuizRequest());
  axios
    .get(`https://quiz-application-mern.herokuapp.com/admin/quiz/${title}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getSingleQuizSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getSingleQuizFailure(err));
    });
};

export const registerUserRequest = () => {
  console.log("hello");
  return {
    type: REGISTER_USER_REQUEST,
  };
};
export const registerUserSuccess = (user) => {
  console.log(user, "user");
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  };
};
export const registerUserFailure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};

export const loginUserRequest = (user) => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};
export const loginUserSuccess = (user) => {
  console.log(user, "user");
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};
export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

export const postUserRequest = () => {
  return {
    type: POST_USER_REQUEST,
  };
};
export const postUserSuccess = (user) => {
  return {
    type: POST_USER_SUCCESS,
    payload: user,
  };
};
export const postUserFailure = (error) => {
  return {
    type: POST_USER_FAILURE,
    payload: error,
  };
};

export const postUserToServer = (user) => (dispatch) => {
  dispatch(postUserRequest());
  axios
    .post("https://quiz-application-mern.herokuapp.com/admin/user", user)
    .then((res) => {
      dispatch(postUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(postUserFailure(err));
    });
};

export const setLoginUser = (user) => {
  return {
    type: SET_LOGIN_USER,
    payload: user,
  };
};
export const getUserFromServer = (email) => (dispatch) => {
  console.log(email);
  axios
    .get(`https://quiz-application-mern.herokuapp.com/user/${email}`)
    .then((res) => {
      console.log(res.data, "res.data");
      dispatch(setLoginUser(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logoutUserRequest = () => {
  return {
    type: LOGOUT_USER_REQUEST,
  };
};
export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
};
export const logoutUserFailure = (error) => {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: error,
  };
};
//post user result to the server
export const postUserResultRequest = () => {
  return {
    type: POST_USER_RESULT_REQUEST,
  };
};

export const postUserResultSuccess = (user) => {
  return {
    type: POST_USER_RESULT_SUCCESS,
    payload: user,
  };
};
export const postUserResultFailure = (error) => {
  return {
    type: POST_USER_RESULT_FAILURE,
    payload: error,
  };
};

export const postQuizResult = (obj) => (dispatch) => {
  const { quizId, userId, quizResult } = obj;
  dispatch(postUserResultRequest());
  axios
    .post(
      `https://quiz-application-mern.herokuapp.com/user/result/${userId}`,
      obj
    )
    .then((res) => {
      console.log(res.data);
      dispatch(postUserResultSuccess(res.data));
    })
    .catch((err) => {
      dispatch(postUserResultFailure(err));
    });
};

export const postUserResult = (ans) => {
  return {
    type: SET_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
