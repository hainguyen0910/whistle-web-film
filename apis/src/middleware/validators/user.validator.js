const Joi = require("joi");
const status = require("http-status");

module.exports.update = (req, res, next) => {
  const schema = Joi.object({
    profileImg: Joi.string().error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "any.empty":
            err.message = "Profile image should not be empty!";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    password: Joi.string()
      .alphanum()
      .min(6)
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "any.empty":
              err.message = "Password should not be empty!";
              break;
            case "string.min":
              err.message = `Password should have at least ${err.local.limit} characters!`;
              break;
            case "string.alphanum":
              err.message = `Password must only contain alpha-numeric characters!`;
            default:
              break;
          }
        });
        return errors;
      }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(status.BAD_REQUEST).json({
      code: status.BAD_REQUEST,
      data: "",
      message: error.message,
    });
  }
  next();
};
