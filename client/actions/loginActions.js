import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './actionTypes';

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

/**
 * logout action creator
 * @export
 * @return {function} it removes json web token for local storage
 */
export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token');
    // localStorage.removeItem('user');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

/**
 * login action creator
 * @export
 * @param {object} data
 * @returns {function} that add json web token of user on signin
 */
export function LoginformRequest(data) {
  return dispatch => axios.post('/api/users/login', data)
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
}
