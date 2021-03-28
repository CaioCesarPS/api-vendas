import { Segments, Joi } from 'celebrate';

export const showCustomer = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
};

export const createCustomer = {
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  },
};

export const updateCustomer = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  },
};

export const deleteCustomer = {
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
};
