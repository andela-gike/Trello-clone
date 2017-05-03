import express from 'express';
import users from '../controllers/users';

const userRouter = express.Router();

userRouter.route('/')
  .post(users.createNewUser)
  .get(users.displayAllUsers);

userRouter.route('/:id')
  .get(users.displayUserById)
  .put(users.updateUserById)
  .delete(users.deleteUserById);


userRouter.route('/login')
  .post(users.loginUser);

userRouter.route('/logout')
  .post(users.logoutUser);

export default userRouter;
