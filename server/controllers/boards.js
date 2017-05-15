import mongoose from 'mongoose';
import Boards from '../models/boards';
import Users from '../models/users';

mongoose.model('Board');

const boardsController = {
  createNewBoard(request, response) {
    const title = request.body.title;

    if (!title) {
      return response.status(400).json({
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
    const id = request.params.id;
    Boards.findByIdAndUpdate({ _id: id }, request.body,
      (err, board) => {
        if (err) {
          response.status(500).json({
            message: 'There was a problem updating the board.'
          });
        }
        response.status(200).json(board);
      });
  },

  findBoards(request, response) {
    Boards.find({}, (err, board) => {
      if (err) {
        response.status(500).json({
          message: 'There is a problem listing all boards'
        });
      }
      response.status(200).json(board);
    });
  },

  getUserBoard(request, response) {
    Users.findById(request.params.user_id, (err, user) => {
      if (err) {
        return response.status(404).err;
      }
      Boards.find({ owner: user.userName }, (err, board) => {
        if (err) {
          return response.status(500).err;
        }
        return response.status(200).json(board);
      });
    });
  },

  getSpecificBoard(request, response) {
    Boards.findById(request.params.id, (err, board) => {
      if (err) {
        response.status(500).json('There was a problem finding the board');
      }
      if (!board) {
        return response.status(404).json('This board does not exist');
      }
      response.status(200).json(board);
    });
  },

  deleteBoards(request, response) {
    Boards.findByIdAndRemove(request.params.id, (err) => {
      if (err) {
        response.status(500).json('There was a problem deleting the board.');
      }
      response.status(200).json({ message: 'Board was successfully deleted.' });
    });
  }
};

export default boardsController;
