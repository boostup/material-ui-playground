import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

import { authReducer } from "./auth/slice";
import { eventsReducer } from "./events/slice";
import { headerReducer } from "layout/Header/slice";

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    events: eventsReducer,
    header: headerReducer,
  });
}
