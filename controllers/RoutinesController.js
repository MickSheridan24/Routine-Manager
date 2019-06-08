const Routine = require("../models/Routine");

const controlRoutines = app => {
  app.get("/", (req, res) => {
    res.send("Hooray!");
  });
  app.get("/routines", (req, res) => {
    Routine.all().then(r => res.send(r));
  });
  app.post("/routines", async (req, res) => {
    const routine = await new Routine(req.body).save();

    if (routine.id) {
      res.send({ success: true, routine: routine });
    } else {
      res.send({ success: false });
    }
  });

  app.delete("/routines/:id", async (req, res) => {
    const routine = await Routine.destroy(parseInt(req.params.id));
    console.log(routine);
    if (routine.id) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  });
};

module.exports = controlRoutines;
