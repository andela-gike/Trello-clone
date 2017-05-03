import express from 'express';
import boards from '../controllers/boards';


const boardsRouter = express.Router();

boardsRouter.route('/')
  .post(boards.createNewBoard);


boardsRouter.route('/:id');
  // .get(boards.getSpecificBoards)
  // .put(boards.updateBoards)
  // .delete(boards.deleteBoards);

boardsRouter.route('/users/:id');
  // .get(boards.findUserBoards);


export default boardsRouter;
