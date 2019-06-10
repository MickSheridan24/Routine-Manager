const client = require("../db/knex");
const bcrypt = require("bcrypt");

class User {
  constructor(args) {
    console.log("USER CONSTRUCTOR", args);
    this.username = args.username;
    this.password = args.password;
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
      console.log(salt);
      bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
        return hash;
      });
    });
    console.log("made hash", hash);
    return hash;
  }

  static async login({ username, password }) {
    console.log("Model login", username, password);
    const user = await client
      .select()
      .from("users")
      .where({ username: username })[0];
    console.log(user);
    if (user) {
      const check = await bcrypt.compare(password, user.passwordDigest, (err, res) => {
        console.log("Status", check);
        return check;
      });
    }
  }

  async save() {
    const saltRounds = 8;
    let post = {};
    await bcrypt.genSalt(saltRounds, async (err, salt) => {
      await bcrypt.hash(this.password, salt, async (err, hash) => {
        post = await client("users").insert({ username: this.username, passwordDigest: hash });
      });
    });
    return post;
  }
}

module.exports = User;
