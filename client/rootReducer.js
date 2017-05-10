import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import flashMessages from './reducers/FlashMessages';
import login from './reducers/login';


export default combineReducers({
  routing: routeReducer,
  flashMessages,
  login
});
