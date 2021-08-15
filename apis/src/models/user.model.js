const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-updater");
const dotenv = require("dotenv");
const CryptoJS = require("crypto-js");

dotenv.config();
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
UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = CryptoJS.AES.encrypt(
    JSON.stringify(user.password),
    process.env.SECRET_KEY
  ).toString();
  next();
});

UserSchema.methods.comparePassword = function (password) {
  user = this;
  const originalPassword = JSON.parse(
    CryptoJS.AES.decrypt(this.password, process.env.SECRET_KEY).toString(
      CryptoJS.enc.Utf8
    )
  );

  return password === originalPassword;
};
mongoose.plugin(slug);
UserSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("User", UserSchema);
