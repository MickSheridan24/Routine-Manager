const Routine = require("../models/Routine");
const schema = require("../validators/RoutineValidator");
const Joi = require("joi");

const controlRoutines = app => {
  app.get("/", (req, res) => {
    res.send("Hooray!");
  });
  app.get("/routines", (req, res) => {
    Routine.all().then(r => res.send(r));
  });
  app.post("/routines", async (req, res) => {
    const valid = Joi.validate(req.body, schema);
    if (!valid.error) {
      const routine = await new Routine(req.body).save();
      if (routine.id) {
        res.send({ success: true, routine: routine });
      } else {
        res.status(400).send({ success: false, message: "Server was unable to process request" });
      }
    } else {
      res.status(400).send({ success: false, message: valid.error.details[0].message });
    }
  });

  app.delete("/routines/:id", async (req, res) => {
    const routine = await Routine.destroy(parseInt(req.params.id));
    console.log(routine);
    if (routine.id) {
      res.send({ success: true });
    } else {
      res.status(400).send({ success: false, message: "Server was unable to delete" });
    }
  });
};

module.exports = controlRoutines;
