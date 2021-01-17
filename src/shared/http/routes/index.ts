import productRouter from '@modules/products/routes/products.routes';
import userRouter from '@modules/users/routes/users.routes';
import sessionRouter from '@modules/users/routes/session.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', userRouter);
routes.use('/session', sessionRouter);

export default routes;
