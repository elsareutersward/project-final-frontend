import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../App'

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    name: null,
    errorMessage: null,
  },
};

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`accessToken: ${accessToken}`);
      state.login.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`userId: ${userId}`);
      state.login.userId = userId;
    },
    setUserName: (state, action) => {
      const { name } = action.payload;
      state.login.name = name;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.login.errorMessage = errorMessage;
    },
  },
});

export const signup = (name, email, password) => {
  const SIGNUP_URL = `${BASE_URL}/users`;
  return (dispatch) => {
    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw 'Unable to create user. Please try again.';
      })
      .then((res) => {
        res.json();
      })
      .catch((err) => {
        dispatch(user.actions.logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const signin = (email, password) => {
  const SIGNIN_URL = `${BASE_URL}/sessions`;
  return (dispatch) => {
    fetch(SIGNIN_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw 'Unable to sign in. Please check that your username and password are correct.';
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({accessToken: json.accessToken,}));
        dispatch(user.actions.setUserId({ userId: json.userId }));
        dispatch(user.actions.setUserName({ userName: json.name }));
      })
      .catch((err) => {
        dispatch(user.actions.logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setSecretMessage({ secretMessage: null }));
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
  };
};