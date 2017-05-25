import mongoose from 'mongoose';
import Lists from '../models/list';

mongoose.model('Lists');

const listsController = {
  createNewList(request, response) {
    const title = request.body.title;
    const board = request.body.board;

    if (!title || !board) {
      return response.status(400).json({
        message: 'Your list does not have a title',
      });
    }
    const list = new Lists();
    list.title = title;
    list.board = board;
    list.save(() => {
      response.status(201).json({
        message: 'The request to create a new list was successfully', list
      });
    });
  },

  updateLists(request, response) {
    Lists.findByIdAndUpdate(request.params.id, request.body,
      { new: true }, (err, list) => {
        if (err) {
          response.status(500).json({
            message: 'There was a problem updating the list'
          });
        }
        response.status(200).json(list);
      });
  },

  findLists(request, response) {
    Lists.find({}, (err, list) => {
      if (err) {
        response.status(500).json({
          message: 'There is a problem listing all lists'
        });
      }
      response.status(200).json(list);
    });
  },

  getSpecificList(request, response) {
    Lists.findById(request.params.id, (err, list) => {
      if (err) {
        response.status(500).json('There was a problem finding the list');
      }
      if (!list) {
        return response.status(404).json('This list does not exist');
      }
      response.status(200).json(list);
    });
  },


  deleteLists(request, response) {
    Lists.findByIdAndRemove(request.params.id, (err) => {
      if (err) {
        response.status(500).json('There was a problem deleting the list.');
      }
      response.status(200).json({ message: 'List was successfully deleted.' });
    });
  }

};

export default listsController;
