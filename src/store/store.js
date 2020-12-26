import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; //middleware for async methods

import { authReducer } from "./../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  reducers /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunk))
);
