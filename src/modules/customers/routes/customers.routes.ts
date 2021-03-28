import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import CustomersController from '../controllers/CustomersController';
import { celebrate } from 'celebrate';
import {
  showCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from './routesValidations/Validations';

const customerRouter = Router();
const customersController = new CustomersController();

customerRouter.use(isAuthenticated);

customerRouter.get('/', customersController.index);
customerRouter.get('/:id', celebrate(showCustomer), customersController.show);
customerRouter.post('/', celebrate(createCustomer), customersController.create);
customerRouter.put(
  '/:id',
  celebrate(updateCustomer),
  customersController.update,
);
customerRouter.delete(
  '/:id',
  celebrate(deleteCustomer),
  customersController.delete,
);

export default customerRouter;
