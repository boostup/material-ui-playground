import { all, takeLatest, call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import * as ls from "utils/localStorage";
import { actions } from "./slice";
import eventsActions from "../events/slice";

/**
 * WORKER SAGAS
 */

function* authWithStoredUserStart() {
  try {
    yield put(eventsActions.toggleLoading(true));
    const user = ls.getUser();
    yield put(actions.setUser(user));
    yield put(push("/"));
  } catch (error) {
    yield put(eventsActions.setError(error.message));
  } finally {
    yield put(eventsActions.toggleLoading(false));
  }
}

function* authWithCredientials(credentials) {
  try {
    yield put(eventsActions.toggleLoading(true));
    const user = {
      displayName: credentials.email,
      images: [
        {
          url: "https://i.imgur.com/I80W1Q0.png",
        },
      ],
    };
    ls.storeUser(user);
    yield put(actions.setUser(user));
    yield put(actions.authSuccess());
    yield put(push("/"));
  } catch (error) {
    yield put(actions.authFailure());
    yield put(eventsActions.setError(error.message));
  } finally {
    yield put(eventsActions.toggleLoading(false));
  }
}

/**
 * WATCHER SAGAS
 */

/*
 *  Overview of the Auth flow
 *  is there is a User in LocalStorage ?
 *    => attempt auth'ing user automagically with the stored data
 *  If no User in LocalStorage => user manual login required =>
 *
 */

export function* authFlow() {
  yield takeLatest(actions.authStart.type, function* ({ payload }) {
    if (payload) {
      yield call(authWithCredientials, payload);
    } else if (ls.getUser()) {
      yield call(authWithStoredUserStart);
    }
  });
}

export function* watchForLogout() {
  yield takeLatest(actions.logout.type, function* () {
    console.log(
      "Heard user is logging out! Redirecting him to the login page now..."
    );
    ls.empty();
    yield put(push("/login"));
  });
}

export function* authSagas() {
  yield all([
    //
    call(authFlow),
    call(watchForLogout),
  ]);
}
