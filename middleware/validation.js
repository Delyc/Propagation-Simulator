import Joi from "joi";

export default person = object().keys({
    location: Joi.string().min(3).max(40).required(),
  radius: Joi.number().integer().min(16).required(),
});
