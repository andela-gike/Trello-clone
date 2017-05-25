import express from 'express';
import users from '../controllers/users';
import boards from '../controllers/boards';
import Auth from '../middleWare/Authentication';

const userRouter = express.Router();

userRouter.route('/')
  .post(users.createNewUser)
  .get(Auth.verifyUser, users.displayAllUsers);

userRouter.route('/:id')
  .get(Auth.verifyUser, users.displayUserById)
  .put(Auth.verifyUser, users.updateUserById)
  .delete(Auth.verifyUser, users.deleteUserById);


userRouter.route('/login')
  .post(users.loginUser);

userRouter.route('/logout')
  .post(Auth.verifyUser, users.logoutUser);

userRouter.route('/:user_id/boards')
  .get(Auth.verifyUser, boards.getUserBoard);

export default userRouter;
