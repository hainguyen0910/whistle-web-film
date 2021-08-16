const router = require("express").Router();
const listMovieController = require("../controllers/list_movie.controller");
const listMovieValidator = require("../middleware/validators/list_movie.validator");
const authMiddleware = require("../middleware/auth.middleware");

router.delete(
  "/:id/delete",
  authMiddleware.adminRequired,
  listMovieController.forceDelete
);
router.delete("/:id", authMiddleware.adminRequired, listMovieController.delete);
router.put(
  "/:id",
  authMiddleware.adminRequired,
  listMovieValidator.update,
  listMovieController.update
);
router.post(
  "/",
  authMiddleware.adminRequired,
  listMovieValidator.create,
  listMovieController.create
);
router.get("/:id", listMovieController.getById);
router.get("/", listMovieController.getAll);

module.exports = router;
