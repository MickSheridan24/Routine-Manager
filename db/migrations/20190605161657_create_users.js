exports.up = function(knex, Promise) {
  return knex.schema.hasTable("users").then(exists => {
    if (!exists) {
      return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.string("username");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
