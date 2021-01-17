import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getValidID,
  postBody,
  deleteValidID,
  putValidBodyAndID,
} from './routesValidations/userValidation';
import UsersController from '../controllers/UsersController';
import UsersAvatarController from '../controllers/UserAvatarController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';

const usersRouter = Router();

const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.post(
  '/',
  isAuthenticated,
  celebrate(postBody),
  usersController.create,
);
usersRouter.get('/:id', celebrate(getValidID), usersController.show);
usersRouter.put('/:id', celebrate(putValidBodyAndID), usersController.update);
usersRouter.delete('/:id', celebrate(deleteValidID), usersController.delete);
usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRouter;
