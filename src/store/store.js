import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import creteSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga/root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = creteSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);
const composeEnhencer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
// console.log(composeEnhencer());
const composedEnhencer = composeEnhencer(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composedEnhencer);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
