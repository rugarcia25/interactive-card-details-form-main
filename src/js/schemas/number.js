const Joi = require('joi');

const numberSchema = Joi.object({
  numberField: Joi.string()
    .length(16)
    .regex(/^[0-9]+$/)
    .message('You must insert exactly 16 numbers, please.'),
});
