const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const genreValidator = require("../middleware/validators/genre.validator");
const genreController = require("../controllers/genre.controller");

const router = express.Router();

router.post(
  "/",
  authMiddleware.adminRequired,
  genreValidator.create,
  genreController.create
);
router.put(
  "/:id",
  authMiddleware.adminRequired,
  genreValidator.create,
  genreController.update
);
router.delete(
  "/:id/delete",
  authMiddleware.adminRequired,
  genreController.forceDelete
);
router.delete("/:id", authMiddleware.adminRequired, genreController.delete);
router.get("/:id", genreController.getById);
router.get("/", genreController.getAll);

module.exports = router;
