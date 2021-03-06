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

const isValid = (req, res, next) => {
  if (req.method === "POST") {
    const validationResult = Joi.validate(req.body, schema);
    if (validationResult.error) {
      res
        .status(400)
        .send({ success: false, message: validationResult.error.details[0].message })
        .end();
    } else {
      next();
    }
  } else {
    next();
  }
};

module.exports = isValid;
