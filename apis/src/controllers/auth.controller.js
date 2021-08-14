const User = require("../models/user.model");
const status = require("http-status");
const jwt = require("../services/jwt");

class AuthController {
  //[POST] - REGISTER
  register = async (req, res) => {
    const { username, email, password } = req.body;

    const isUsernameExits = await User.findOne({ username });
    const isEmailExits = await User.findOne({ email });

    if (isUsernameExits !== null) {
      return res.status(status.BAD_REQUEST).json({
        code: status.BAD_REQUEST,
        data: "",
        msg: "User already exists!",
      });
    }

    if (isEmailExits !== null) {
      return res.status(status.BAD_REQUEST).json({
        code: status.BAD_REQUEST,
        data: "",
        msg: "Email already exists!",
      });
    }

    try {
      const newUser = new User({
        username,
        email,
        password,
      });
      const user = await newUser.save();
      res.status(status.CREATED).json({
        code: status.CREATED,
        data: user,
        msg: "created",
      });
    } catch (err) {
      res.status(status.INTERNAL_SERVER_ERROR).json({
        code: status.INTERNAL_SERVER_ERROR,
        data: "",
        msg: err,
      });
    }
  };

  //[POST] - LOGIN
  login = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    // check user existence
    if (!user) {
      return res.status(status.BAD_REQUEST).json({
        code: status.BAD_REQUEST,
        data: "",
        msg: "User doesn't exits!!!",
      });
    }

    // check password

    const isCompare = user.comparePassword(password);

    if (!isCompare) {
      return res.status(status.BAD_REQUEST).json({
        code: status.BAD_REQUEST,
        data: "",
        msg: "Incorrect password!!!",
      });
    }

    // create access token and refresh token
    const accessToken = jwt.createToken({
      id: user._id,
      isAdmin: user.isAdmin,
    });
    const refreshToken = jwt.createToken({
      id: user._id,
      isAdmin: user.isAdmin,
    });

    const { password: hashPassword, ...info } = user._doc;

    return res.status(status.OK).json({
      code: status.OK,
      data: {
        ...info,
        accessToken,
        refreshToken,
      },
      msg: "Successfully",
    });
  };

  //[GET] logout
  logout = (req, res) => {
    return res.status(status.OK).json({
      code: status.OK,
      data: "",
      msg: "Successfully",
    });
  };
}

module.exports = new AuthController();
