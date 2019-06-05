const client = require("../db/knex");

const Routine = require("../models/Routine");

const routine = new Routine({
  what: "Write Tests",
  why: "Because it helps you know what actually works",
  how: "Learn mocha or something",
});
routine.save();

// client("routines")
//   .insert({ what: "find a job", why: "you want money", how: "no one knows" })
//   .then(r => console.log(r));

// client
//   .select()
//   .from("routines")
//   .where("id", 1)
//   .then(r => console.log(r));
