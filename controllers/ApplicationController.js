const express = require("express");
const app = express();
const controlRoutines = require("./RoutinesController");
const controlUsers = require("./UsersController");
const isLoggedIn = require("./AuthenticationController");

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});
app.use((req, res, next) => isLoggedIn(req, res, next));

controlRoutines(app);
module.exports = app;
