import mongoose from 'mongoose';
import User from '../models/users';

mongoose.model('User');



const UserController = {
  createNewUser(request, response, next) {
    const fullname = request.body.fullname;
    const email = request.body.email;
    const username = request.body.username;
    const password = request.body.password;

    if (!fullname || !email || !username || !password) {
      return response.status(400).send({
        message: 'The paramaters are incomplete',
      });
    }
    User.findOne({ email: request.body.email }, (err, user) => {
      if (err) {
        return next(err);
      } else if (user) {
        response.status(409).json({
          message: 'A user with this email already exist'
        });
      } else {
        user = new User();
        user.fullname = fullname;
        user.email = email;
        user.username = username;
        user.password = user.encryptPassword(password);
        user.save(() => {
          response.status(201).json({
            message: 'Thanks! Your request to create a new user was successfuly!',
            user
          });
          next();
        });
      }
    });
  },

  loginUser(request, response, next) {
    User.findOne({ email: request.body.email }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        response.status(400).json({
          message: 'User was not found'
        });
      } else if (user.authenticate(user, request.body.password)) {
        const token = user.generateToken(user.id, user.userName);
        response.status(200).json({
          message: 'You are sucessfully signed in', user, token
        });
      } else {
        response.status(400).send({ message: 'Password is invalid' });
      }
    });
  },

  displayAllUsers(request, response) {
    User.find({}, (err, user) => {
      if (err) {
        response.status(500).json({
          message: 'There was a problem listing all users'
        });
      }
      response.status(200).send(user);
    });
  },

  displayUserById(request, response) {
    User.findById(request.params.id, (err, user) => {
      if (err) {
        response.status(500).send('There was a problem finding the user.');
      }
      if (!user) { return response.status(404).send('No user found.'); }
      response.status(200).send(user);
    });
  },

  updateUserById(request, response) {
    User.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, user) => {
      if (err) {
        response.status(500).send({
          message: 'There was a problem updating the user.'
        });
      }
      response.status(200).send(user);
    });
  },

  deleteUserById(request, response) {
    User.findByIdAndRemove(request.params.id, (err) => {
      if (err) {
        response.status(500).send('There was a problem deleting the user.');
      }
      response.status(200).send({ message: 'User was deleted successfully.' });
    });
  },

  logoutUser(request, response) {
    response.status(200).send({
      message: 'You were logged out successfully'
    });
  }

};

export default UserController;
