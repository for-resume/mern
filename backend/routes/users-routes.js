const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

// Middlewares
const fileUpload = require("../middleware/file-upload");

// Controllers
const usersControllers = require("../controllers/users-controller");

router.get("/", usersControllers.getUsers);

router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(), // normalizeEmail: Test@test.com => test@test.com
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.signup
);

router.post("/login", usersControllers.login);

module.exports = router;
