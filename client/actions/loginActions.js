import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';


export function LoginformRequest(data) {
  return dispatch => axios.post('/api/users/login', data)
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
    });
}
