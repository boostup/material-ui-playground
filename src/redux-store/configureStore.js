import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export default function configureAppStore(initialState = {}) {
  const devMode = process.env.NODE_ENV === "development";
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  if (devMode) {
    middlewares.push(logger);
  }
  const store = configureStore({
    reducer: createRootReducer(),
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
    preloadedState: initialState,
    devTools: devMode,
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
