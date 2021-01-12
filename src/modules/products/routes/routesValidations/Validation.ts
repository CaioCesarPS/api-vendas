import { Joi, Segments } from 'celebrate';

export const getValidID = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
};

export const postBody = {
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required(),
  },
};

export const putValidBodyAndID = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required(),
  },
};

export const deleteValidID = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
};
