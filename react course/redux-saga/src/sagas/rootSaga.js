import {takeEvery} from "redux-saga/effects";
import * as actionTypes from "../store/actions/actionTypes"
import {logoutSaga, checkAuthTimeoutSaga} from "./auth";


export function* watchAuth () {
  yield takeEvery(actionTypes.AUTH_LOGOUT_INITIATE, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
}