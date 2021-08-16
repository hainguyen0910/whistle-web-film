const ListMovie = require("../models/list_movie.model");
const status = require("http-status");

class ListMovieController {
  //[GET] /list-movie - GET ALL LIST MOVIE
  getAll = async (req, res) => {
    try {
      const list = await ListMovie.find();
      return res.status(status.OK).json({
        code: status.OK,
        data: list,
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

  //[GET] /list-movie/:id - GET LIST MOVIE BY ID
  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const list = await ListMovie.findById(id);
      return res.status(status.OK).json({
        code: status.OK,
        data: list,
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

  //[POST] /list-movie - CREATE LIST MOVIE
  create = async (req, res) => {
    try {
      const list = await new ListMovie({
        ...req.body,
      }).save();
      return res.status(status.CREATED).json({
        code: status.CREATED,
        data: list,
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

  //[PUT]  /list-movie/:id - UPDATE LIST MOVIE BY ID
  update = async (req, res) => {
    const { id } = req.params;
    try {
      const list = await ListMovie.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      return res.status(status.OK).json({
        code: status.OK,
        data: list,
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

  //[DELETE] /list-movie/:id - SOFT DELETE LIST MOVIE BY ID
  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const list = await ListMovie.delete({ _id: id });
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

  //[DELETE] /list-movie/:id/delete - FORCE DELETE LIST MOVIE BY ID
  forceDelete = async (req, res) => {
    const { id } = req.params;
    try {
      const list = await ListMovie.deleteOne({ _id: id });
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

module.exports = new ListMovieController();
