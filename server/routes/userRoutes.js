import express from 'express';
import users from '../controllers/users';

const userRouter = express.Router();

userRouter.route('/')
  .post(users.createNewUser);

userRouter.route('/login');
  // .post(users.loginUser);

userRouter.route('/logout');
  // .post(users.logoutUser);

export default userRouter;
