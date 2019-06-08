exports.up = function(knex, Promise) {
  return knex.schema.table("users", function(t) {
    t.string("passwordDigest").notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", function(t) {
    t.dropColumn("passwordDigest");
  });
};
