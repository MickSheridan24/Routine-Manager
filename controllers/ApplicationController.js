const express = require("express");
const app = express();

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});
// app.use(function(req, res, next) {
//   console.log(req);
//   next();
// });

const controlRoutines = require("./RoutinesController");
controlRoutines(app);

module.exports = app;
