const client = require("../db/knex");

class User {
  constructor(args) {
    this.username = args.username;
  }

  static all() {
    const users = client
      .select()
      .from("users")
      .timeout(1000, { cancel: true });
    return users;
  }
  static digest(password) {}
  async save() {
    const post = await client("users").insert({ username: this.username });
    return post;
  }
}

module.exports = User;
