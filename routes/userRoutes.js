const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { body, validationResult, query } = require("express-validator");
const upload = require("../middlewares/upload");

router.post(
  "/register",
  [
    body("firstName")
      .isLength({ min: 1 })
      .withMessage("First name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.login
);

router.put(
  "/profile/:id",
  [
    body("firstName")
      .optional()
      .isLength({ min: 1 })
      .withMessage("First name cannot be empty"),
    body("lastName")
      .optional()
      .isLength({ min: 1 })
      .withMessage("Last name cannot be empty"),
    body("gender")
      .optional()
      .isIn(["Male", "Female"])
      .withMessage("Invalid gender value"),
    body("photo").optional().isString().withMessage("Invalid photo URL"),
  ],
  userController.updateProfile
);

router.get("/profile/:id", userController.getProfile);

router.get(
  "/profiles",
  [
    query("page")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Page number must be greater than 0"),
    query("limit")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Limit must be at least 1"),
  ],
  userController.getAllProfiles
);

router.put(
  "/profile/:id/photo",
  upload.single("photo"),
  userController.updatePhoto
);

module.exports = router;
