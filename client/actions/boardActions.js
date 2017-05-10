import axios from 'axios';

/**
 * Action creator to create of a board
 * @param {object} board
 * @returns {function} makes a past request to save new board
 */
export function boardformRequest(board) {
  return dispatch => axios.post('/api/boards', board);
  // .then((response) => {
  // });
}
