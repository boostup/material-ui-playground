import { all, takeLatest, call } from "redux-saga/effects";

import { actions } from "./slice";

/**
 * WATCHER SAGAS
 */

export function* watchToggleDrawerFlow() {
  yield takeLatest(actions.toggleDrawer.type, function* () {
    yield console.log("Toggling drawer");
  });
}

export function* eventsSagas() {
  yield all([
    //
    call(watchToggleDrawerFlow),
  ]);
}
