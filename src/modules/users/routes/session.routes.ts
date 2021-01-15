import { Router } from 'express';
import { celebrate } from 'celebrate';
import { sessionValidate } from './routesValidations/sessionValidation';
import SessionController from '../controllers/SessionsController';

const sessionsRouter = Router();

const sessionController = new SessionController();

sessionsRouter.post('/', celebrate(sessionValidate), sessionController.create);

export default sessionsRouter;
