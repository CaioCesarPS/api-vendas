import { Router } from 'express';
import { celebrate } from 'celebrate';
import { forgotPassword } from './routesValidations/forgotPasswordValidation';
import ForgotPasswordController from '../controllers/ForgotPasswordController';

const sessionsRouter = Router();

const forgotPasswordController = new ForgotPasswordController();

sessionsRouter.post(
  '/forgot',
  celebrate(forgotPassword),
  forgotPasswordController.create,
);

export default sessionsRouter;
