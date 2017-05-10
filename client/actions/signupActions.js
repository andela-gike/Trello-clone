import axios from 'axios';


/**
 * signup action creator
 * @export
 * @param {object} userData
 * @returns {function} that make a post request to signup a new user
 */
export function SignupformRequest(userData) {
  return dispatch => axios.post('/api/users', userData);
  // .then((response) => {
  // });
}
