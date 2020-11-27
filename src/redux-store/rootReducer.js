import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import history from "utils/history";

import { authReducer } from "./auth/slice";
import { eventsReducer } from "./events/slice";
import { headerReducer } from "layout/Header/slice";

export default function createRootReducer() {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    events: eventsReducer,
    header: headerReducer,
  });

  return rootReducer;
}
