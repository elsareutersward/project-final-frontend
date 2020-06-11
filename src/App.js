import React from 'react';
import { user } from './reducers/user';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StartPage } from './pages/StartPage'
import { AdsList } from './pages/AdsList';
import { AdDetails } from './pages/AdDetails';
import { Profile } from './pages/Profile';
import { Seller } from './pages/Seller';
import { CreateAd } from './pages/CreateAd';
import { Chat } from './pages/Chat';

export const BASE_URL = 'http://localhost:8080'

const reducer = combineReducers({
  user: user.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <StartPage />
            </Route>
            <Route path='/posts' exact>
              <AdsList ADS_URL={`${BASE_URL}/posts`} />
            </Route>
            <Route path='/posts/:_id' exact>
              <AdDetails />
            </Route>
            <Route path='/seller/:sellerId' exact>
              <Seller />
            </Route>
            <Route path='/profile' exact>
              <Profile />
            </Route>
            <Route path='/createAd' exact>
              <CreateAd />
            </Route>
            <Route path='/chat' exact>
              <Chat />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  )
}