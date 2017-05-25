import express from 'express';
// import cards from '../controllers/users';
import lists from '../controllers/lists';
import Auth from '../middleWare/Authentication';



const listsRouter = express.Router();

listsRouter.route('/')
  .post(Auth.verifyUser, lists.createNewList)
  .get(Auth.verifyUser, lists.findLists);


listsRouter.route('/:id')
  .get(Auth.verifyUser, lists.getSpecificList)
  .put(Auth.verifyUser, lists.updateLists)
  .delete(Auth.verifyUser, lists.deleteLists);

listsRouter.route('/users/:id');
  // .get(Auth.verifyUser, lists.findUserlLists);


export default listsRouter;
