import express from 'express';
import users from '../controllers/users';
import boards from '../controllers/boards';

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

userRouter.route('/:user_id/boards')
  .get(boards.getUserBoard);

export default userRouter;
