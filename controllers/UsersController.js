const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secret = require("../secrets").jwtSecret;
const signUpValidator = require("../validators/index").user;
const router = require("express").Router();

router.post("/", signUpValidator, async (req, res) => {
  const user = await new User(req.body.username);
  user.save(req.body.password);
  res.send({ success: true, user: user });
});

router.post("/login", async (req, res) => {
  const id = await User.login(req.body);
  if (id) {
    const token = jwt.sign({ id: id }, secret);
    res.send({ success: true, token: token });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
