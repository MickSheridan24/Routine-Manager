exports.up = function(knex, Promise) {
  return knex.schema.table("routines", function(t) {
    t.integer("userId").notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("routines", function(t) {
    t.dropColumn("userId");
  });
};
