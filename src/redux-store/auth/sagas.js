import { all, takeLatest, call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { actions } from "./slice";

/**
 * WATCHER SAGAS
 */

export function* watchForLogout() {
  yield takeLatest(actions.logout.type, function* () {
    console.log(
      "Heard user is logging out! Redirecting him to the login page now..."
    );
    yield put(push("/login"));
  });
}

export function* authSagas() {
  yield all([
    //
    call(watchForLogout),
  ]);
}
