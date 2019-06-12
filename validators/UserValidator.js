const Joi = require("Joi");
const User = require("../models/User");

const schema = {
  username: Joi.string()
    .min(3)
    .max(20)
    .alphanum()
    .required(),

  password: Joi.string()
    .alphanum()
    .min(4)
    .max(40)
    .required(),
};

function isValid(req, res, next) {
  if (req.method === "POST") {
    const validationResult = Joi.validate(req.body, schema);
    if (validationResult.error) {
      res
        .status(400)
        .send({ success: false, message: validationResult.error.details[0].message })
        .end();
    } else {
      User.isUnique(req.body.username).then(r => {
        r ? next() : res.send({ success: false, message: "That username is taken." }).end();
      });
    }
  } else {
    next();
  }
}

module.exports = isValid;
