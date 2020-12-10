import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";

import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export const history = createHashHistory({
  hashType: "slash",
  getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});

export default function configureAppStore(preloadedState) {
  const devMode = process.env.NODE_ENV === "development";
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  if (devMode) {
    middlewares.push(logger);
  }
  const store = configureStore({
    reducer: createRootReducer(history),
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
    preloadedState,
    devTools: devMode,
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
