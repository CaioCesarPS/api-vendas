import { Router } from 'express';
import { celebrate } from 'celebrate';
import { EditProfileValidationBody } from './routesValidations/userValidation';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import ProfileController from '@modules/users/controllers/ProfileController';

const profileRouter = Router();

const profileController = new ProfileController();
profileRouter.use(isAuthenticated);

profileRouter.get('/', isAuthenticated, profileController.show);
// profileRouter.delete('/', celebrate(postBody), profileController.delete);
profileRouter.put(
  '/',
  celebrate(EditProfileValidationBody),
  profileController.update,
);

export default profileRouter;
