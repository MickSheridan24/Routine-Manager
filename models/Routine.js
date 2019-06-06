const client = require("../db/knex");

class Routine {
  constructor(params) {
    this.what = params.what || "Do I really need to tell you?";
    this.why = params.why || "Because I told you so, that's why";
    this.how = params.how || "I don't know, figure it out, dummy";
  }

  static all() {
    const routines = client
      .select()
      .from("routines")
      .timeout(1000, { cancel: true });
    return routines;
  }

  async save() {
    const post = await client("routines").insert({ what: this.what, why: this.why, how: this.how });
    return post;
  }
}

module.exports = Routine;
