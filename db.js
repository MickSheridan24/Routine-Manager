const knex = require("knex");
const connection = require("./connection.json");
const client = knex({
  client: "pg",
  connection,
});
