const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const genreRoute = require("./genre.route");
const movieRoute = require("./movie.route");
const listMovieRoute = require("./list_movie.route");

function routes(app) {
  app.get("/", (req, res) => {
    res.json("Welcome to Express!!!");
  });
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/genres", genreRoute);
  app.use("/api/movies", movieRoute);
  app.use("/api/list-movie", listMovieRoute);
}

module.exports = routes;
