const User = require("../models/User");
const router = require("express").Router();

router.post("/", async (req, res) => {
  console.log("reached router");
  const user = new User(req.body);
  user.save();
});

module.exports = router;
