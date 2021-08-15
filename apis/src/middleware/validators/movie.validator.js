const Joi = require("joi");
const status = require("http-status");

module.exports.create = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().insensitive(),
    desc: Joi.string(),
    img: Joi.string(),
    imgTitle: Joi.string(),
    imgSm: Joi.string(),
    trailer: Joi.string(),
    video: Joi.string(),
    year: Joi.number(),
    limit: Joi.number(),
    genre: Joi.array(),
    isSeries: Joi.boolean(),
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
    desc: Joi.string(),
    img: Joi.string(),
    imgTitle: Joi.string(),
    imgSm: Joi.string(),
    trailer: Joi.string(),
    video: Joi.string(),
    year: Joi.number(),
    limit: Joi.number(),
    genre: Joi.array(),
    isSeries: Joi.boolean(),
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
