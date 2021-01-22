import { Joi, Segments } from 'celebrate';

export const forgotPassword = {
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
};

export const confirmationPassReset = {
  [Segments.BODY]: {
    token: Joi.string().uuid().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  },
};
