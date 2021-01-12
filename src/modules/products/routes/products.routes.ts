import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import { celebrate } from 'celebrate';
import {
  getValidID,
  postBody,
  putValidBodyAndID,
  deleteValidID,
} from './routesValidations/Validation';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.get('/', productsController.index);
productRouter.get('/:id', celebrate(getValidID), productsController.show);
productRouter.post('/', celebrate(postBody), productsController.create);
productRouter.put(
  '/:id',
  celebrate(putValidBodyAndID),
  productsController.update,
);
productRouter.delete(
  '/:id',
  celebrate(deleteValidID),
  productsController.delete,
);

export default productRouter;
