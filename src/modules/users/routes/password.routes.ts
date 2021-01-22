import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  forgotPassword,
  confirmationPassReset,
} from './routesValidations/forgotPasswordValidation';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const sessionsRouter = Router();

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

sessionsRouter.post(
  '/forgot',
  celebrate(forgotPassword),
  forgotPasswordController.create,
);
sessionsRouter.post(
  '/reset',
  celebrate(confirmationPassReset),
  resetPasswordController.create,
);

export default sessionsRouter;
