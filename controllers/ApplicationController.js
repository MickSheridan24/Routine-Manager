const express = require("express");
const app = express();

app.use(express.json());

const controlRoutines = require("./RoutinesController");
controlRoutines(app);

module.exports = app;
