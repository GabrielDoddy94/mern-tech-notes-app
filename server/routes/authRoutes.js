const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const loginLimiter = require("../middleware/loginLimit");

router.route("/").post(loginLimiter);

router.route("/refresh").get();

router.route("/logout").post();

module.exports = router;
