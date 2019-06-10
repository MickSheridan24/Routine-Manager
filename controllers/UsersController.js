const User = require("../models/User");
const router = require("express").Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
});

module.exports = router;
