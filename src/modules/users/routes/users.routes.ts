import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getValidID,
  postBody,
  deleteValidID,
  putValidBodyAndID,
} from './routesValidations/Validation';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', usersController.index);
usersRouter.post('/', celebrate(postBody), usersController.create);
usersRouter.get('/:id', celebrate(getValidID), usersController.show);
usersRouter.put('/:id', celebrate(putValidBodyAndID), usersController.update);
usersRouter.delete('/:id', celebrate(deleteValidID), usersController.delete);

export default usersRouter;
