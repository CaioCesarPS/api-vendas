import { Joi, Segments } from 'celebrate';

export const getValidID = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
};

export const postBody = {
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  },
};

export const putValidBodyAndID = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  },
};

export const EditProfileValidationBody = {
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    old_password: Joi.string(),
    password: Joi.string().optional(),
    password_confirmation: Joi.string()
      .valid(Joi.ref('password'))
      .when('password', {
        is: Joi.exist(),
        then: Joi.required(),
      }),
  },
};

export const deleteValidID = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
};
