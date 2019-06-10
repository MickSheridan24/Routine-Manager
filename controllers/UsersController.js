const User = require("../models/User");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const user = await new User(req.body.username);
  user.save(req.body.password);
  res.send(user);
});

router.post("/login", async (req, res) => {
  const status = await User.login(req.body);
  res.send({ success: status });
});

module.exports = router;
