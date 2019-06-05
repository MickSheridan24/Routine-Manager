exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("routines")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("routines").insert([
        { id: 1, what: "Learn Postgres", why: "idk", how: "idk" },
        { id: 2, what: "Learn Knex", why: "idk", how: "idk" },
        { id: 3, what: "Learn Express", why: "idk", how: "idk" },
      ]);
    });
};
