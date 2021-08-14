const authRoute = require("./auth.route");

function routes(app) {
  app.get("/", (req, res) => {
    res.json("Welcome to Express!!!");
  });
  app.use("/api/auth", authRoute);
}

module.exports = routes;
