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
    return await client("routines")
      .where("id", id)
      .del();
  }

  async save() {
    const post = await client("routines").insert({ what: this.what, why: this.why, how: this.how });
    return post;
  }
}

module.exports = Routine;
