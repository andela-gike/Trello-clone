import mongoose from 'mongoose';
import Lists from '../models/list';

mongoose.model('Lists');

const listsController = {
  createNewList(request, response) {
    const title = request.body.title;

    if (!title) {
      return response.status(400).send({
        message: 'Your list does not have a title',
      });
    }
    const list = new Lists();
    list.title = title;
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
          response.status(500).send({
            message: 'There was a problem updating the list'
          });
        }
        response.status(200).send(list);
      });
  },

  findLists(request, response) {
    Lists.find({}, (err, list) => {
      if (err) {
        response.status(500).json({
          message: 'There is a problem listing all lists'
        });
      }
      response.status(200).send(list);
    });
  },

  getSpecificList(request, response) {
    Lists.findById(request.params.id, (err, list) => {
      if (err) {
        response.status(500).send('There was a problem finding the list');
      }
      if (!list) {
        return response.status(404).send('This list does not exist');
      }
      response.status(200).send(list);
    });
  },


  deleteLists(request, response) {
    Lists.findByIdAndRemove(request.params.id, (err) => {
      if (err) {
        response.status(500).send('There was a problem deleting the list.');
      }
      response.status(200).send({ message: 'List was successfully deleted.' });
    });
  }

};

export default listsController;
