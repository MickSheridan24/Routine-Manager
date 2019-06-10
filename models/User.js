const client = require("../db/knex");
const bcrypt = require("bcrypt");

class User {
  constructor(args) {
    this.username = args.username;
    User.digest(args.password);
  }

  static all() {
    const users = client
      .select()
      .from("users")
      .timeout(1000, { cancel: true });
    return users;
  }
  static digest(password) {
    const saltRounds = 8;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);
        this.passwordDigest = hash;
      });
    });
  }
  async save() {
    const post = await client("users").insert({ username: this.username });
    return post;
  }
}

module.exports = User;
