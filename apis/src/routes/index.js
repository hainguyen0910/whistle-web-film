const authRoute = require("./auth.route");
const userRoute = require("./user.route");

function routes(app) {
  app.get("/", (req, res) => {
    res.json("Welcome to Express!!!");
  });
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
}

module.exports = routes;
