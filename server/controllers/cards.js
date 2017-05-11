import mongoose from 'mongoose';
import Cards from '../models/cards';

mongoose.model('Card');

const cardsController = {
  createNewCard(request, response) {
    const title = request.body.title;
    const content = request.body.content;

    if (!title || !content) {
      return response.status(400).send({
        message: 'Your card does not have a title or a content',
      });
    }
    const card = new Cards();
    card.title = title;
    card.content = content;
    card.save(() => {
      response.status(201).json({
        message: 'The request to create a new card was successfully', card
      });
    });
  },

  updateCards(request, response) {
    Cards.findByIdAndUpdate(request.params.id, request.body,
      { new: true }, (err, card) => {
        if (err) {
          response.status(500).send({
            message: 'There was a problem updating the card'
          });
        }
        response.status(200).send(card);
      });
  },

  findCards(request, response) {
    Cards.find({}, (err, card) => {
      if (err) {
        response.status(500).json({
          message: 'There is a problem listing all cards'
        });
      }
      response.status(200).send(card);
    });
  },

  getSpecificCard(request, response) {

  },

  deleteCards(request, response) {

  }
};

export default cardsController;
