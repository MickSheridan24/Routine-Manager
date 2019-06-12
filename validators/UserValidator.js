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
  console.log("validation", req.body);
  if (req.method === "POST") {
    const validationResult = Joi.validate(req.body, schema);
    console.log("aftervalidation");
    if (validationResult.error) {
      console.log("Bad");
      res
        .status(400)
        .send({ success: false, message: validationResult.error.details[0].message })
        .end();
    } else {
      User.isUnique(req.body.username).then(r => {
        if (r) {
          console.log("It's unique");
          next();
        } else {
          console.log("Not uniqe");
          res.send({ success: false, message: "That username is taken." }).end();
        }
      });
    }
  }
}

module.exports = isValid;
