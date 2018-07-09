import * as actionTypes from "./actionTypes";
import axios from "axios";

const authStart = () => ({
  type: actionTypes.AUTH_START
});

const authSuccess = (token, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  tokenId: token,
  userId: userId
});

const authFail = err => ({
  type: actionTypes.AUTH_FAIL,
  error: err
});

const logout = () => ({
  type: actionTypes.AUTH_LOGOUT
});

const checkAuthTimeout = expirationTime => dispatch => {
  setTimeout(() => dispatch(logout()), expirationTime * 1000);
};

export const auth = (email, password, isSignup) => dispatch => {
  dispatch(authStart());
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true
  };
  let url =
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6w-440pD4JiANTk1QT57PMGPhmAqJ9U4";
  if (!isSignup) {
    url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA6w-440pD4JiANTk1QT57PMGPhmAqJ9U4";
  }

  axios
    .post(url, authData)
    .then(response => {
      console.log(response);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch(err => {
      console.log(err.response);
      dispatch(authFail(err.response.data.error));
    });
};
