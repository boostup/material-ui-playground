import { all, takeLatest, call, put } from "redux-saga/effects";

import { actions } from "./slice";

/**
 * WATCHER SAGAS
 */

export function* watchToggleDrawerFlow() {
  yield takeLatest(actions.toggleDrawer.type, function* () {
    console.log("Toggling drawer");
  });
}

export function* eventsSagas() {
  yield all([
    //
    call(watchToggleDrawerFlow),
  ]);
}
