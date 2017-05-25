import mongoose from 'mongoose';
import Cards from '../models/cards';

mongoose.model('Card');

const cardsController = {
  createNewCard(request, response) {
    const title = request.body.title;
    const content = request.body.content;
    const list = request.body.list;

    if (!title || !content || !list) {
      return response.status(400).json({
        message: 'Your card does not have a title or a content',
      });
    }
    const card = new Cards();
    card.title = title;
    card.content = content;
    card.list = list;
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
          response.status(500).json({
            message: 'There was a problem updating the card'
          });
        }
        response.status(200).json(card);
      });
  },

  findCards(request, response) {
    Cards.find({}, (err, card) => {
      if (err) {
        response.status(500).json({
          message: 'There is a problem listing all cards'
        });
      }
      response.status(200).json(card);
    });
  },

  getSpecificCard(request, response) {
    Cards.findById(request.params.id, (err, card) => {
      if (err) {
        response.status(500).json('There was a problem finding the card');
      }
      if (!card) {
        return response.status(404).json('This card does not exist');
      }
      response.status(200).json(card);
    });
  },


  deleteCards(request, response) {
    Cards.findByIdAndRemove(request.params.id, (err) => {
      if (err) {
        response.status(500).json('There was a problem deleting the card.');
      }
      response.status(200).json({ message: 'Card was successfully deleted.' });
    });
  }

};

export default cardsController;
