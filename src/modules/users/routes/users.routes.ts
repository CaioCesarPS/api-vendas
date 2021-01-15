import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getValidID,
  postBody,
  deleteValidID,
  putValidBodyAndID,
} from './routesValidations/userValidation';
import UsersController from '../controllers/UsersController';
import isAutenticated from '../middlewares/isAuthenticated';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', isAutenticated, usersController.index);
usersRouter.post('/', celebrate(postBody), usersController.create);
usersRouter.get('/:id', celebrate(getValidID), usersController.show);
usersRouter.put('/:id', celebrate(putValidBodyAndID), usersController.update);
usersRouter.delete('/:id', celebrate(deleteValidID), usersController.delete);

export default usersRouter;
