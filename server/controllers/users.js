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
    User.findOne({
      $or: [{
        email: request.body.email,
        username: request.body.username
      }]
    }, (err, user) => {
      if (err) {
        return next(err);
      } else if (user) {
        response.status(409).json({
          message: 'A user with this email or username already exist'
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
          errors: { form: `There isn't an account for this email` }
        });
      } else if (user.authenticate(user, request.body.password)) {
        response.status(200).json({
          message: 'You are sucessfully signed in', user
        });
      } else {
        response.status(400).send({ errors: { form: 'Invalid password' } });
      }
    });
  },

  logoutUser(request, response) {
    response.status(200).send({
      message: 'You were logged out successfully'
    });
  }
};

export default UserController;
