const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-updater");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const MovieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: Number },
    limit: { type: Number },
    genre: [{ type: ObjectId, ref: "Genre" }],
    isSeries: { type: Boolean, default: false },
    slug: { type: String, slug: "title" },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

mongoose.plugin(slug);
MovieSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Movie", MovieSchema);
