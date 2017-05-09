import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './actionTypes';


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function LoginformRequest(data) {
  return dispatch => axios.post('/api/users/login', data)
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
}
