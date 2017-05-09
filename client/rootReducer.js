import { combineReducers } from 'redux';
import flashMessages from './reducers/FlashMessages';
import login from './reducers/login';


export default combineReducers({
  flashMessages,
  login
});
