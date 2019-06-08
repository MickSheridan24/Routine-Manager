const client = require("../db/knex");

class Routine {
  constructor(params) {
    this.what = params.what || "Do I really need to tell you?";
    this.why = params.why || "Because I told you so, that's why";
    this.how = params.how || "I don't know, figure it out, dummy";
  }

  static async all() {
    const routines = await client.select().from("routines");
    return routines;
  }

  static async get(id) {
    const routine = await client
      .select()
      .from("routines")
      .where("id", id);
    return routine;
  }
  static async destroy(id) {
    const deletion = await client("routines")
      .where("id", id)
      .del()
      .returning("*");
    return deletion[0];
  }

  async save() {
    const post = await client("routines")
      .insert({ what: this.what, why: this.why, how: this.how })
      .returning("*");

    return post[0];
  }
}

module.exports = Routine;
