import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
