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

  app.delete("/routines/:id", (req, res) => {
    console.log("deleting route");
    Routine.destroy(parseInt(req.params.id)).then(r => res.sendStatus(200));
  });
  // app.get("/routines/:id", (req, res) => {
  //   console.log("deleting route, but with a get route");
  //   Routine.destroy(parseInt(req.params.id)).then(r => res.sendStatus(200));
  // });
};

module.exports = controlRoutines;
