const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-updater");

const Schema = mongoose.Schema;

const ListMovie = new Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
    slug: { type: String, slug: "title" },
  },
  { timestamps: true }
);

mongoose.plugin(slug);
ListMovie.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("List", ListMovie);
