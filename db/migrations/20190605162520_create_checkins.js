exports.up = async function(knex, Promise) {
  const exists = await knex.schema.hasTable("checkins");

  if (!exists) {
    return knex.schema.createTableIfNotExists("checkins", tbl => {
      tbl.increments();
      tbl.string("date");
      tbl.integer("userId");
    });
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("checkins");
};
