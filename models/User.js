const client = require("../db/knex");
const bcrypt = require("bcrypt");

class User {
  constructor(username) {
    this.username = username;
  }

  static all() {
    const users = client
      .select()
      .from("users")
      .timeout(1000, { cancel: true });
    return users;
  }
  static async digest(password) {
    const hash = await bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        return hash;
      });
    });
    return hash;
  }

  static async login({ username, password }) {
    const query = await client
      .select()
      .from("users")
      .where("username", username);

    const user = query[0];
    if (user) {
      const match = await bcrypt.compare(password, user.passwordDigest);
      return match;
    } else {
      return false;
    }
  }

  async save(password) {
    const saltRounds = 8;
    let post = {};
    await bcrypt.genSalt(saltRounds, async (err, salt) => {
      await bcrypt.hash(password, salt, async (err, hash) => {
        post = await client("users").insert({ username: this.username, passwordDigest: hash });
      });
    });
    return post;
  }
}

module.exports = User;
