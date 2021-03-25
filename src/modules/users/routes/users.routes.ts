import { Router } from 'express';
import { celebrate } from 'celebrate';
import { postBody } from './routesValidations/userValidation';
import UsersController from '../controllers/UsersController';
import UsersAvatarController from '../controllers/UserAvatarController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';

const usersRouter = Router();

const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

usersRouter.post('/', celebrate(postBody), usersController.create);
usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRouter;
