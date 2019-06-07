const Routine = require("../models/Routine");

const controlRoutines = app => {
  app.get("/", (req, res) => {
    res.send("Hooray!");
  });
  app.get("/routines", (req, res) => {
    console.log("sending routines");
    Routine.all().then(r => res.send(r));
  });
};

module.exports = controlRoutines;
