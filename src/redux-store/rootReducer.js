import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import history from "utils/history";

import { eventsReducer } from "./events/slice";

export default function createRootReducer() {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    events: eventsReducer,
  });

  return rootReducer;
}
