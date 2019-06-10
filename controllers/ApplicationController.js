const express = require("express");
const app = express();
const routineRouter = require("./RoutinesController");
const routineValid = require("../validators/RoutineValidator");
const userRouter = require("./UsersController");
const userValid = require("../validators/UserValidator");
const isLoggedIn = require("./AuthenticationController");

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});

app.use("/routines", isLoggedIn, routineValid, routineRouter);
app.use("/users", isLoggedIn, userValid, userRouter);

module.exports = app;
