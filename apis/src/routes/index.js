const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const genreRoute = require("./genre.route");
const movieRoute = require("./movie.route");

function routes(app) {
  app.get("/", (req, res) => {
    res.json("Welcome to Express!!!");
  });
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/genres", genreRoute);
  app.use("/api/movies", movieRoute);
}

module.exports = routes;
