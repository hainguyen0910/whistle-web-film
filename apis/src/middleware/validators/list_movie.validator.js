const Joi = require("joi");
const status = require("http-status");

module.exports.create = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().insensitive(),
    type: Joi.string(),
    genre: Joi.array(),
    content: Joi.array(),
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

module.exports.update = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().insensitive(),
    type: Joi.string(),
    genre: Joi.array(),
    content: Joi.array(),
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
