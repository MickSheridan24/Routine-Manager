function isLoggedIn(req, resp, next) {
  //if not logged in, return false
  console.log("Checking Logged in", req.method);
  next();
}

module.exports = isLoggedIn;
