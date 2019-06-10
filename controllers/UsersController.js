const User = require("../models/User");
const router = require("express").Router();

router.post("/", async (req, res) => {
  console.log("POST USER ROUTE");
  const user = await new User(req.body);
  user.save();
  console.log("FINALLy", user);
  res.send(user);
});

router.post("/login", async (req, res) => {
  console.log("logging in", req.body);
  const token = await User.login(req.body);
  res.send({ status: token });
});

module.exports = router;
