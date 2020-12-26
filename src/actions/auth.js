import { types } from "./../types/types";

import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log(user);
      })
      .catch((e) => console.log(e));
  };
};

export const startRegisterEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });
        console.log(user);
        dispatch({
          type: types.login,
          payload: {
            uid: user.uid,
            displayName: user.displayName,
          },
        });
      })
      .catch((e) => console.log(e));
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};
export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});
