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
  SET_USER_RESULT_SUCCESS,
} from "../ActionType/actionType";

const initialState = {
  isLoading: false,
  isError: false,
  userLogin: null,
  quiz: [],
  result: null,
  thumbNails: [],
  singleQuiz: {},
  user: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_USER_REQUEST:
    case POST_USER_REQUEST:
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userLogin: payload,
      };
    case REGISTER_USER_FAILURE:
    case LOGIN_USER_FAILURE:
    case POST_USER_FAILURE:
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CREATE_QUIZ_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case CREATE_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        quiz: [...state.quiz, payload],
      };
    case CREATE_QUIZ_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_THUMBNAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_THUMBNAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        thumbNails: payload,
      };
    case GET_THUMBNAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_SINGLE_QUIZ_REQUEST:
    case POST_USER_RESULT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_SINGLE_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        singleQuiz: payload,
      };
    case GET_SINGLE_QUIZ_FAILURE:
    case POST_USER_RESULT_FAILURE:
      return {
        ...state,

        isLoading: false,
        isError: true,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: payload,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userLogin: null,
        user: null,
      };
    case POST_USER_RESULT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: payload,
      };
    case SET_USER_RESULT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        result: payload,
      };
    default:
      return state;
  }
};
