import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import routes from './routes';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/loginActions';

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
);

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} /></Provider>,
  document.getElementById('container'));
