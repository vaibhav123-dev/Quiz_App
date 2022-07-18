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

const initialState = {
  isLoading: false,
  isError: false,
  quiz: [],
  thumbNails: [],
  singleQuiz: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
