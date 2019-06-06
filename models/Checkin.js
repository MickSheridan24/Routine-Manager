const client = require("../db/knex");

class Checkin {
  constructor(args) {
    this.date = args.date;
    this.userId = args.userId;
  }
  static all() {
    const checkins = client
      .select()
      .from("checkins")
      .timeout(1000, { cancel: true });
    return checkins;
  }

  async save() {
    const post = await client("checkins").insert({ what: this.what, why: this.why, how: this.how });
    return post;
  }
}

module.exports = Checkin;
