import { Joi, Segments } from 'celebrate';

export const sessionValidate = {
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};
