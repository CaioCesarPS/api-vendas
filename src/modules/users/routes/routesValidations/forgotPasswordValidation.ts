import { Joi, Segments } from 'celebrate';

export const forgotPassword = {
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
};
