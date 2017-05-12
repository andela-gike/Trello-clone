import express from 'express';
// import cards from '../controllers/users';
import cards from '../controllers/cards';



const cardsRouter = express.Router();

cardsRouter.route('/')
  .post(cards.createNewCard)
  .get(cards.findCards);


cardsRouter.route('/:id')
  .get(cards.getSpecificCard)
  .put(cards.updateCards)
  .delete(cards.deleteCards);

cardsRouter.route('/users/:id');
  // .get(cards.findUserCards);


export default cardsRouter;
