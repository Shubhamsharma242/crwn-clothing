import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { rootReducer } from "./root-reducer";
// import logger from "redux-logger";
const loggerMiddleware = (state) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("current state", store.getState());

  next(action);

  console.log("next state", store.getState());
};

const middlewares = [loggerMiddleware];
const composedEnhencer = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedEnhencer);
