const secret = require("../secrets").jwtSecret;
const jwt = require("jsonwebtoken");

function isLoggedIn(req, resp, next) {
  console.log(req.headers.authorization);
  if (req.headers.authorization) {
    const decoded = jwt.verify(req.headers.authorization, secret);
    if (decoded) {
      req.userId = decoded;
      next();
    } else {
      resp.send({ success: false, message: "User is not Logged In" }).end();
    }
  } else {
    resp.send({ success: false, message: "User is not Logged In" }).end();
  }
}

module.exports = isLoggedIn;
