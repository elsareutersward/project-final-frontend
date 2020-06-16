import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../App';

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    userName: null,
    errorMessage: null,
    loading: false
  },
};

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      state.login.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      state.login.userId = userId;
    },
    setUserName: (state, action) => {
      const { userName } = action.payload;
      state.login.userName = userName;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.login.errorMessage = errorMessage;
    },
    setLoading: (state, action) => {
      const { loading } = action.payload;
      state.login.loading = loading;
    },
  },
});

export const signup = (name, email, password) => {
  const SIGNUP_URL = `${BASE_URL}/users/create`;
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
        throw new Error ('Unable to create user. Please try again.');
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({accessToken: json.accessToken,}));
        dispatch(user.actions.setUserId({ userId: json.userId }));
        dispatch(user.actions.setUserName({ userName: json.userName }));
      })
      .catch((err) => {
        logout();
        dispatch(user.actions.setErrorMessage({ errorMessage: err.message }));
      });
  };
};

export const signin = (email, password) => {
  const SIGNIN_URL = `${BASE_URL}/sessions`;
  return (dispatch) => {
    dispatch(user.actions.setLoading({ loading: true }));
    fetch(SIGNIN_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error ('Unable to sign in. Please check that your username and password are correct.');
      })
      .then((json) => {
          dispatch(user.actions.setAccessToken({accessToken: json.accessToken,}));
          dispatch(user.actions.setUserId({ userId: json.userId }));
          dispatch(user.actions.setUserName({ userName: json.userName }));
          dispatch(user.actions.setLoading({ loading: false }));
      })
      .catch((err) => {
        logout();
        dispatch(user.actions.setErrorMessage({ errorMessage: err.message }));
      });
  };
};

export const getUserInfo = () => {
  const USER_URL = `${BASE_URL}/users`;
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userID;
    fetch(`${USER_URL}/${userId}`, {
      method: 'GET', 
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json;
        } 
        throw new Error ('Could not get information. Make sure you are logged in and try again.');
      })
      .then((json) => {
        dispatch()
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.message }));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
  };
};