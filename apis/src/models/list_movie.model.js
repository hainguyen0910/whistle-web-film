const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-updater");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ListMovieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: [{ type: ObjectId, ref: "Genre" }],
    content: { type: Array },
    slug: { type: String, slug: "title" },
  },
  { timestamps: true }
);

mongoose.plugin(slug);
ListMovieSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("ListMovie", ListMovieSchema);
