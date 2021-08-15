const Joi = require("joi");
const status = require("http-status");

const pattern = "/^[a-zA-Z\u00C0-\u017F]+,s[a-zA-Z\u00C0-\u017F]+$/";

module.exports.create = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string()
      .required()
      .insensitive()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "any.empty":
              err.message = "Title should not be empty!";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    movies: Joi.array().items(
      Joi.string()
        .insensitive()
        .error((errors) => {
          errors.forEach((err) => {
            switch (err.code) {
              case "any.empty":
                err.message = "Title should not be empty!";
                break;
              case "string.alphanum":
                err.message = `Title must only contain alpha-numeric characters!`;
              default:
                break;
            }
          });
          return errors;
        })
    ),
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
