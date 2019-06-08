const Joi = require("Joi");

const schema = {
  what: Joi.string()
    .min(1)
    .required(),
  why: Joi.string()
    .min(1)
    .required(),
  how: Joi.string()
    .min(1)
    .required(),
  interval: Joi.number()
    .min(0)
    .required(),
};

module.exports = schema;
