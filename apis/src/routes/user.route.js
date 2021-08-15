const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const userValidator = require("../middleware/validators/user.validator");

router.put(
  "/:id/update",
  authMiddleware.authRequired,
  userValidator.update,
  userController.update
);
router.get("/:id", authMiddleware.authRequired, userController.getById);
router.delete(
  "/:id/delete",
  authMiddleware.authRequired,
  userController.forceDelete
);
router.delete("/:id", authMiddleware.authRequired, userController.delete);
router.get("/", authMiddleware.authRequired, userController.getAll);

module.exports = router;
