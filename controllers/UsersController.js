const User = require("../models/User");
const schema = require("../validators/RoutineValidator");
const Joi = require("joi");

const controlUsers = app => {
  app.post("/users", async (req, res) => {
    const digest = User.digest(req.body.password);
    const user = new User(req.body);
  });
};
