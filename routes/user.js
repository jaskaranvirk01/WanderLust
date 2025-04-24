const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectedUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

const router = express.Router();




router.route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signUp));




router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectedUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), wrapAsync(userController.login));





router.get("/logout", userController.logout);




module.exports = router;