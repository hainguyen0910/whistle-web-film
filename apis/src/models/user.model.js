const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-updater");

const Scheme = mongoose.Schema;

const UserSchema = new Scheme(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImg: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(slug);
UserSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("User", UserSchema);
