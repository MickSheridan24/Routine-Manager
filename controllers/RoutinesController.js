const Routine = require("../models/Routine");
const router = require("express").Router();

router.get("/", (req, res) => {
  Routine.all(req.userId).then(r => res.send({ success: true, routines: r }));
});
router.post("/", async (req, res) => {
  console.log("roter");
  const routine = await new Routine({ ...req.body, userId: req.userId }).save();
  console.log("after save");
  if (routine.id) {
    res.send({ success: true, routine: routine });
  } else {
    res.status(400).send({ success: false, message: "Server was unable to process request" });
  }
});

router.delete("/:id", async (req, res) => {
  const routine = await Routine.destroy(parseInt(req.params.id));
  if (routine.id) {
    res.send({ success: true });
  } else {
    res.status(400).send({ success: false, message: "Server was unable to delete" });
  }
});

module.exports = router;
