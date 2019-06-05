const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const things = [{ id: 1, name: "something" }, { id: 2, name: "something else" }];

app.get("/things", (req, res) => {
  res.send(things);
});

app.get("/things/:id", (req, res) => {
  res.send(things.find(th => th.id === parseInt(req.params.id)));
});

app.post("/things", (req, res) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
  };
  const result = Joi.validate(req.body, schema);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  } else {
    const thing = {
      id: things.length + 1,
      name: req.body.name,
    };
    things.push(thing);
    res.send(thing);
  }
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Up and Running on port ${port}`));
