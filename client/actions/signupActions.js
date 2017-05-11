import axios from 'axios';
import { SET_CURRENT_USER, CREATE_USER_SUCCESS } from './actionTypes';

/**
 * set current user action creator
 * @export
 * @param {object} user
 * @returns {object} payload containing type and user object
 */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function createUserSuccess(user) {
  return {
    type: CREATE_USER_SUCCESS,
    user
  };
}

/**
 * signup action creator
 * @export
 * @param {object} userData
 * @returns {function} that make a post request to signup a new user
 */
export function SignupformRequest(userData) {
  return dispatch => axios.post('/api/users', userData)
    .then((response) => {
      const user = response.data.user;
      localStorage.setItem('user', JSON.stringify(user));
    });
}
