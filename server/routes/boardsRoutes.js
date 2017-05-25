import express from 'express';
import boards from '../controllers/boards';
import Auth from '../middleWare/Authentication';


const boardsRouter = express.Router();

boardsRouter.route('/')
  .post(Auth.verifyUser, boards.createNewBoard);


boardsRouter.route('/:id')
  .get(Auth.verifyUser, boards.getSpecificBoard)
  .put(Auth.verifyUser, boards.updateBoards)
  .delete(Auth.verifyUser, boards.deleteBoards);

boardsRouter.route('/')
  .get(Auth.verifyUser, boards.findBoards);


export default boardsRouter;
