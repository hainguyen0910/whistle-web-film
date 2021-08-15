const User = require("../models/user.model");
const status = require("http-status");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");

dotenv.config();

class UserController {
  //[GET] /users - GET ALL USER
  getAll = async (req, res) => {
    const users = await User.find();
    return res.status(status.OK).json({
      code: status.OK,
      data: users,
      msg: "Successfully",
    });
  };

  //[GET] /user/:id - GET USER BY ID
  getById = async (req, res) => {
    const { id } = req.params;
    const { id: idUser, isAdmin } = req.user;
    if (id === idUser || isAdmin) {
      try {
        const user = await User.findById(id);
        return res.status(status.OK).json({
          code: status.OK,
          data: user,
          msg: "Successfully",
        });
      } catch (err) {
        return res.status(status.INTERNAL_SERVER_ERROR).json({
          code: status.INTERNAL_SERVER_ERROR,
          data: "",
          msg: err,
        });
      }
    } else {
      return res.status(status.FORBIDDEN).json({
        code: status.FORBIDDEN,
        data: "",
        msg: "Permission denied!!!",
      });
    }
  };

  //[PUT] /users/:id - UPDATE USER
  update = async (req, res) => {
    const id = req.params;
    const { id: idUser, isAdmin } = req.user;
    if (id === idUser || isAdmin) {
      try {
        const user = await User.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );
        return res.status(status.OK).json({
          code: status.OK,
          data: user,
          msg: "Successfully",
        });
      } catch (err) {
        return res.status(status.INTERNAL_SERVER_ERROR).json({
          code: status.INTERNAL_SERVER_ERROR,
          data: "",
          msg: err,
        });
      }
    } else {
      return res.status(status.FORBIDDEN).json({
        code: status.FORBIDDEN,
        data: "",
        msg: "Permission denied!!!",
      });
    }
  };

  //[DELETE] /users/:id - SOFT DELETE USER
  delete = async (req, res) => {
    const { id: idAdmin } = req.user;
    const { id } = req.params;
    if (id === idAdmin) {
      return res.status(status.BAD_REQUEST).json({
        code: status.BAD_REQUEST,
        data: "",
        msg: "You can't delete yourself",
      });
    }
    try {
      const user = await User.delete({ _id: id });
      return res.status(status.OK).json({
        code: status.OK,
        data: "",
        msg: "Successfully",
      });
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({
        code: status.INTERNAL_SERVER_ERROR,
        data: "",
        msg: err,
      });
    }
  };

  //[DELETE] /user/:id/delete - FORCE DELETE USER
  forceDelete = async (req, res) => {
    const { id: idAdmin, isAdmin } = req.user;
    const { id } = req.params;
    if (id === idAdmin) {
      return res.status(status.BAD_REQUEST).json({
        code: status.BAD_REQUEST,
        data: "",
        msg: "You can't delete yourself",
      });
    }
    try {
      const user = await User.deleteOne({ _id: id });
      return res.status(status.OK).json({
        code: status.OK,
        data: "",
        msg: "Successfully",
      });
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({
        code: status.INTERNAL_SERVER_ERROR,
        data: "",
        msg: err,
      });
    }
  };
}

module.exports = new UserController();
