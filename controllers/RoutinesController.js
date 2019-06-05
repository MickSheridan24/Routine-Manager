const controlRoutines = app => {
  app.get("/", (req, res) => {
    res.send("Hooray!");
  });
};

module.exports = controlRoutines;
