import React from 'react';
import { user } from './reducers/user';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { CreateAd } from './components/CreateAd';
import { AdsList } from './pages/AdsList';

export const BASE_URL = 'http://localhost:2020'

const reducer = combineReducers({
  user: user.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <SignUp />
      <SignIn />
      <CreateAd />
      <AdsList />
    </Provider>
  )
}