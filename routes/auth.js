var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const {
  reset,
  resetPassword,
  recover,
  getToken,
} = require("../controllers/password");
router.param("token", getToken);
//most
router.post(
  "/signup",
  [
    check("name", "name should be atleast three char").isLength({ min: 5 }),
    check("email", "email is required").isEmail(),
    check("password", "your password is too short").isLength({ min: 3 }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 3 }),
  ],
  signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
  res.json(req.auth);
});

//password reset
router.post(
  "/recover",
  [check("email", "email is required").isEmail()],
  recover
);

router.get("/reset/:token", reset);

router.post(
  "/reset/:token",
  [
    check("password")
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 chars long"),
    check("confirmPassword", "Passwords do not match").custom(
      (value, { req }) => value === req.body.password
    ),
  ],
  resetPassword
);

module.exports = router;
