exports.up = function(knex, Promise) {
  return knex.schema.hasTable("routines").then(exists => {
    if (!exists) {
      return knex.schema.createTableIfNotExists("routines", tbl => {
        tbl.increments();
        tbl.string("what");
        tbl.string("why");
        tbl.string("how");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("routines");
};
