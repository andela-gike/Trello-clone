import express from 'express';
// import cards from '../controllers/users';
import lists from '../controllers/lists';



const listsRouter = express.Router();

listsRouter.route('/')
  .post(lists.createNewList)
  .get(lists.findLists);


listsRouter.route('/:id')
  .get(lists.getSpecificList)
  .put(lists.updateLists)
  .delete(lists.deleteLists);

listsRouter.route('/users/:id');
  // .get(lists.findUserlLists);


export default listsRouter;
