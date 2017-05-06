import axios from 'axios';

export function LoginformRequest(userData) {
  return dispatch => axios.post('/api/users/login', userData);
  // .then((response) => {
  // });
}
