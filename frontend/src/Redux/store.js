import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./Reducer/reducer";

const middleware = [thunk];
if (process.env.NODE_ENV !== "development") {
  middleware.push(logger);
}
export const store = legacy_createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
