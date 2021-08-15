const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-updater");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const GenreSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    movies: [{ type: ObjectId, ref: "Movie" }],
    slug: { type: String, slug: "title" },
  },
  { timestamps: true }
);

mongoose.plugin(slug);
GenreSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Genre", GenreSchema);
