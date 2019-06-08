const Routine = require("../models/Routine");
const schema = require("../validators/RoutineValidator");
const router = require("express").Router();
const Joi = require("joi");

router.get("/", (req, res) => {
  Routine.all().then(r => res.send(r));
});
router.post("/", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  const routine = await Routine.destroy(parseInt(req.params.id));
  console.log(routine);
  if (routine.id) {
    res.send({ success: true });
  } else {
    res.status(400).send({ success: false, message: "Server was unable to delete" });
  }
});

module.exports = router;
