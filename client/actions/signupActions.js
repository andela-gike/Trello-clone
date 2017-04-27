import axios from 'axios';


export function SignupformRequest(userData) {
  return dispatch => axios.post('/api/users', userData);
  // .then((response) => {
  // });
}
