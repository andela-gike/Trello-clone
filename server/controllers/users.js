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
    const user = new User({
      fullname: fullname,
      email: email,
      username: username,
      password: password
    });
    user.save((err) => {
      if (err) { return next(err); }

      response.status(201).json({
        message: 'Thanks! Your request to create a new user was successfuly!',
        user
      });
      next();
    });
  }
};

export default UserController;
