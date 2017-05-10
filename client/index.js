import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import routes from './routes';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/loginActions';
import configureStore from './store/configureStore';

const store = configureStore(browserHistory);

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} /></Provider>,
  document.getElementById('container'));
