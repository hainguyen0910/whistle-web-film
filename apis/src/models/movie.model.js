const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-updater");

const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
    slug: { type: String, slug: "title" },
  },
  { timestamps: true }
);

mongoose.plugin(slug);
MovieSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Movie", MovieSchema);
