const Routine = require("../models/Routine");

const controlRoutines = app => {
  app.get("/", (req, res) => {
    res.send("Hooray!");
  });
  app.get("/routines", (req, res) => {
    Routine.all().then(r => res.send(r));
  });
  app.post("/routines", (req, res) => {
    const routine = new Routine(req.body);
    routine.save().then(r => res.send(r));
  });
};

module.exports = controlRoutines;
