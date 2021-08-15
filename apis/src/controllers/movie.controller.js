const Movie = require("../models/movie.model");
const status = require("http-status");

class MovieController {
  //[GET] /movies - GET ALL MOVIE
  getAll = async (req, res) => {
    try {
      const movies = await Movie.find();
      return res.status(status.OK).json({
        code: status.OK,
        data: movies,
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

  //[GET] /movies/:id - GET MOVIE BY ID
  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const movie = await Movie.findById(id);
      return res.status(status.OK).json({
        code: status.OK,
        data: movie,
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

  //[POST] /movies - CREATE MOVIE
  create = async (req, res) => {
    try {
      const movie = await new Movie({
        ...req.body,
      }).save();
      return res.status(status.CREATED).json({
        code: status.CREATED,
        data: movie,
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

  //[PUT] /movies/:id - UPDATE MOVIE BY ID
  update = async (req, res) => {
    const { id } = req.params;
    try {
      const movie = await Movie.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      return res.status(status.OK).json({
        code: status.OK,
        data: movie,
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

  //[DELETE] /movies/:id - SOFT DELETE MOVIE BY ID
  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const movie = Movie.delete({ _id: id });
      return res
        .status(status.OK)
        .json({
          code: status.OK,
          data: "",
          msg: "Successfully",
        })
        .save();
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({
        code: status.INTERNAL_SERVER_ERROR,
        data: "",
        msg: err,
      });
    }
  };

  //[DELETE] /movies/:id/delete - FORCE DELETE MOVIE BY ID
  forceDelete = async (req, res) => {
    const { id } = req.params;
    try {
      const movie = await Movie.deleteOne({ _id: id });
      return res
        .status(status.OK)
        .json({
          code: status.OK,
          data: "",
          msg: "Successfully",
        })
        .save();
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({
        code: status.INTERNAL_SERVER_ERROR,
        data: "",
        msg: err,
      });
    }
  };
}

module.exports = new MovieController();
