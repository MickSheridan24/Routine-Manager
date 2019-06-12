const express = require("express");
const isLoggedIn = require("./AuthenticationController");
const routers = require("./index");
const validators = require("../validators/index");

const app = express();
app.use(express.json());
app.use("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});

app.use("/routines", isLoggedIn, validators.routine, routers.routines);
app.use("/users", validators.user, routers.users);

module.exports = app;
