import mongoose from 'mongoose';
import Boards from '../models/boards';

mongoose.model('Board');

const boardsController = {
  createNewBoard(request, response) {
    const name = request.body.name;

    if (!name) {
      return response.status(400).send({
        message: 'Your board does not have a name, please enter a board name ',
      });
    }
    const board = new Boards();
    board.name = name;
    board.save(() => {
      response.status(201).json({
        message: 'The request to create a new board was successfully', board
      });
    });
  },

  updateCards(request, response) {

  },

  findUserCards(request, response) {

  },

  deleteCards(request, response) {

  }
};

export default boardsController;
