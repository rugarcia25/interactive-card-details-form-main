const Joi = require('joi');

const nameSchema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Za-z]+\s[A-Za-z]+$/)
    .message('Please insert your full name'),
});
