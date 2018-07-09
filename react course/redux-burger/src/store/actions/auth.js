import * as actionTypes from "./actionTypes";

const authStart = () => ({
  type: actionTypes.AUTH_START
});

const authSuccess = authData => ({
  type: actionTypes.AUTH_SUCCESS,
  authData: authData
});

const authfail = err => ({
  type: actionTypes.AUTH_FAIL,
  error: err
});

export const auth = (email, password) => dispatch => {
  dispatch(authStart());
};
