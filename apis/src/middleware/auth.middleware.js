const jwt = require("jsonwebtoken");
const status = require("http-status");
const dotenv = require("dotenv");
const User = require("../models/user.model");

dotenv.config();

module.exports.authRequired = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(status.UNAUTHORIZED).json({
      code: status.UNAUTHORIZED,
      data: "",
      msg: "Unauthorized",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(status.FORBIDDEN).json({
        code: status.FORBIDDEN,
        data: "",
        msg: "Forbidden",
      });
    }
    const sub = payload.sub;
    const user = await User.findById(sub.id);
    req.user = user;
    next();
  });
};
