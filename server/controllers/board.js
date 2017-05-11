import mongoose from 'mongoose';
import Boards from '../models/board';

mongoose.model('Board');

const boardsController = {
  createNewBoard(request, response) {
    const title = request.body.title;

    if (!title) {
      return response.status(400).send({
        message: 'Your board does not have a name, please enter a board name ',
      });
    }
    const board = new Boards();
    board.title = title;
    board.save(() => {
      response.status(201).json({
        message: 'The request to create a new board was successfully', board
      });
    });
  },

  updateBoards(request, response) {

  },

  findBoards(request, response) {

  },

  deleteBoards(request, response) {

  }
};

export default boardsController;
