const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
const authValidator = require("../middleware/validators/auth.validator");

router.post("/register", authValidator.register, authController.register);
router.post("/login", authValidator.login, authController.login);
router.get("/logout", authMiddleware.authRequired, authController.logout);
// router.post(
//   "/forgot-password",
//   authMiddleware.authRequired,
//   authController.forgotPassword
// );

module.exports = router;
