import express from 'express';
// import cards from '../controllers/users';
import cards from '../controllers/cards';
import Auth from '../middleWare/Authentication';



const cardsRouter = express.Router();

cardsRouter.route('/')
  .post(Auth.verifyUser, cards.createNewCard)
  .get(Auth.verifyUser, cards.findCards);


cardsRouter.route('/:id')
  .get(Auth.verifyUser, cards.getSpecificCard)
  .put(Auth.verifyUser, cards.updateCards)
  .delete(Auth.verifyUser, cards.deleteCards);

cardsRouter.route('/users/:id');
  // .get(Auth.verifyUser, cards.findUserCards);


export default cardsRouter;
