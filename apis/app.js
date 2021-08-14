const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require("./src/routes");
const db = require("./src/configs/db");

//connect DB
db.connect();

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HTTP Logger
app.use(morgan("dev"));

// routes
routes(app);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
