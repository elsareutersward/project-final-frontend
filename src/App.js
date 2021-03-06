import React from 'react';
import styled from 'styled-components';
import { user } from './reducers/user';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import {applyMiddleware, compose} from '@reduxjs/toolkit';
import { Navbar } from './components/Navbar';
import { StartPage } from './pages/StartPage'
import { AdsList } from './pages/AdsList';
import { AdDetails } from './pages/AdDetails';
import { SignUp } from './pages/SignUp';
import { Profile } from './pages/Profile';
import { Seller } from './pages/AdsFromSeller';
import { CreateAd } from './pages/CreateAd';
import { ConversationsList } from './pages/ConversationsList';
import { Footer } from './components/Footer';
import { ConversationsDetails } from './pages/ConversationDetails';
import { About } from './pages/About';

export const BASE_URL = 'https://er-final-project.herokuapp.com';

const reducer = combineReducers({
  user: user.reducer
});

const persistedStateJSON = sessionStorage.getItem('UserState'); 
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => {
  sessionStorage.setItem('UserState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <StartPage />
            </Route>
            <Route path='/about' exact>
              <About />
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
            <Route path='/createaccount' exact>
              <SignUp />
            </Route>
            <Route path='/profile' exact>
              <Profile />
            </Route>
            <Route path='/createAd' exact>
              <CreateAd />
            </Route>
            <Route path='/conversations' exact>
              <ConversationsList />
            </Route>
            <Route path='/conversations/:_id' exact>
              <ConversationsDetails />
            </Route>
          </Switch>
          <Footer />
        </Main>
      </BrowserRouter>
    </Provider>
  );
};

const Main = styled.main`
  min-height: 100vh;
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 60px;
`;