import express from 'express';
// import cards from '../controllers/users';


const cardsRouter = express.Router();

cardsRouter.route('/');
  // .post(cards.createNewCard);


cardsRouter.route('/:id');
  // .get(cards.getSpecificCards)
  // .put(cards.updateCards)
  // .delete(cards.deleteCards);

cardsRouter.route('/users/:id');
  // .get(cards.findUserCards);


export default cardsRouter;
