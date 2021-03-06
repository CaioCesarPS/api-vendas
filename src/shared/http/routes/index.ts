import productRouter from '@modules/products/routes/products.routes';
import userRouter from '@modules/users/routes/users.routes';
import sessionRouter from '@modules/users/routes/session.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import { Router } from 'express';
import profileRouter from '@modules/users/routes/profile.routes';
import customerRouter from '@modules/customers/routes/customers.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', userRouter);
routes.use('/session', sessionRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/customers', customerRouter);

export default routes;
