import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SignupPage from './components/signup/signupPage';
import LoginPage from './components/login/loginPage';
import BoardPage from './components/boards/boardPage';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
     <Route path="board" component={BoardPage} />
  </Route>
);
