const Genre = require("../models/genre.model");
const status = require("http-status");

class GenreController {
  //[GET] /genres - GET ALL GENRE
  getAll = async (req, res) => {
    try {
      const genres = await Genre.find();
      return res.status(status.OK).json({
        code: status.OK,
        data: genres,
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

  //[GET] /genres/:id - GET BY ID
  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const genre = await Genre.findOne({ _id: id });
      return res.status(status.OK).json({
        code: status.OK,
        data: genre,
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

  //[POST] /genres - CREATE GENRE
  create = async (req, res) => {
    const { title, movies } = req.body;
    try {
      const genre = await new Genre({
        title,
        movies,
      }).save();
      return res.status(status.CREATED).json({
        code: status.CREATED,
        data: genre,
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

  //[PUT] /genres/:id - UPDATE GENRE BY ID
  update = async (req, res) => {
    const { id } = req.params;
    try {
      const genre = await Genre.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      return res.status(status.OK).json({
        code: status.OK,
        data: genre,
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

  //[DELETE] /genres/:id - SOFT DELETE GENRE BY ID
  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const genre = await Genre.delete({ _id: id });
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

  //[DELETE] /genres/:id/delete - FORCE DELETE GENRE BY ID
  forceDelete = async (req, res) => {
    const { id } = req.params;
    try {
      const genre = await Genre.deleteOne({ _id: id });
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

module.exports = new GenreController();
