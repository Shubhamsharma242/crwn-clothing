import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);
const composeEnhencer = (process.env.NODE_ENV !== "production" && window &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true, traceLimit: 15})  )|| compose
// console.log(composeEnhencer());
const composedEnhencer = composeEnhencer(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composedEnhencer);

export const persistor = persistStore(store);
 