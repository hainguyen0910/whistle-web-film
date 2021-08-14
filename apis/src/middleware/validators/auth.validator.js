const Joi = require("joi");
const status = require("http-status");

module.exports.login = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .required()
      .min(5)
      .max(30)
      .insensitive()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "any.empty":
              err.message = "Username should not be empty!";
              break;
            case "string.min":
              err.message = `Username should have at least ${err.local.limit} characters!`;
              break;
            case "string.max":
              err.message = `Username should have at most ${err.local.limit} characters!`;
              break;
            case "string.alphanum":
              err.message = `Username must only contain alpha-numeric characters!`;
            default:
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .alphanum()
      .required()
      .min(6)
      .insensitive()
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

module.exports.register = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .required()
      .min(5)
      .max(30)
      .insensitive()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "any.empty":
              err.message = "Username should not be empty!";
              break;
            case "string.min":
              err.message = `Username should have at least ${err.local.limit} characters!`;
              break;
            case "string.max":
              err.message = `Username should have at most ${err.local.limit} characters!`;
              break;
            case "string.alphanum":
              err.message = `Username must only contain alpha-numeric characters!`;
            default:
              break;
          }
        });
        return errors;
      }),
    email: Joi.string()
      .email({ tlds: { allow: true } })
      .required()
      .insensitive(),
    password: Joi.string()
      .alphanum()
      .required()
      .min(6)
      .insensitive()
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
