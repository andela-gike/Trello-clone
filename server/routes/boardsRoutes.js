import express from 'express';
import boards from '../controllers/boards';


const boardsRouter = express.Router();

boardsRouter.route('/')
  .post(boards.createNewBoard);


boardsRouter.route('/:id')
  .get(boards.getSpecificBoard)
  .put(boards.updateBoards)
  .delete(boards.deleteBoards);

boardsRouter.route('/')
  .get(boards.findBoards);


export default boardsRouter;
