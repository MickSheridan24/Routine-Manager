const client = require("../db/knex");

class Routine {
  constructor(params) {
    console.log(params);
    this.what = params.what;
    this.why = params.why;
    this.how = params.how;
    this.userId = params.userId;
  }

  static async all(userId) {
    const routines = await client
      .select()
      .from("routines")
      .where("userId", userId);
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
      .insert({ what: this.what, why: this.why, how: this.how, userId: this.userId })
      .returning("*");

    return post[0];
  }
}

module.exports = Routine;
