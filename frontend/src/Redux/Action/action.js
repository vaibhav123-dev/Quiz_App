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
    .post("http://localhost:5000/admin", obj)
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
    .post("http://localhost:5000/admin/thumbnail", obj)
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
    .get("http://localhost:5000/admin/thumbnail")
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
    .get(`http://localhost:5000/admin/quiz/${title}`)
    .then((res) => {
      dispatch(getSingleQuizSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getSingleQuizFailure(err));
    });
};
