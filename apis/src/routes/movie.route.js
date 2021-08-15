const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");
const authMiddleware = require("../middleware/auth.middleware");
const movieValidator = require("../middleware/validators/movie.validator");

router.delete(
  "/:id/delete",
  authMiddleware.adminRequired,
  movieController.forceDelete
);
router.delete("/:id", authMiddleware.adminRequired, movieController.delete);
router.put(
  "/:id",
  authMiddleware.adminRequired,
  movieValidator.update,
  movieController.update
);
router.get("/:id", authMiddleware.adminRequired, movieController.getById);
router.get("/", authMiddleware.adminRequired, movieController.getAll);
router.post(
  "/",
  authMiddleware.adminRequired,
  movieValidator.create,
  movieController.create
);

module.exports = router;
