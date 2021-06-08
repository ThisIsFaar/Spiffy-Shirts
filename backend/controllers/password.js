const User = require("../models/user");
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ===PASSWORD RECOVER AND RESET

// @route POST api/auth/recover
// @desc Recover Password - Generates token and Sends password reset email
// @access Public
exports.recover = (req, res) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user)
        return res.status(401).json({
          error:
            "The email address is not associated with any account. Double-check your email address and try again.",
        });

      //Generate and set password reset token
      user.generatePasswordReset();

      // Save the updated user object
      user
        .save()
        .then((user) => {
          // send email
          let link =
            "http://" +
            req.headers.host +
            "/api/reset/" +
            user.resetPasswordToken;

          console.log(link);
          let mail = {
            from: '"Password Reset" <spiffytester@gmail.com>', // sender address
            to: `${user.email}`, // list of receivers
            subject: "passwordreset", // Subject line
            text: `Hi ${user.name} \n
                   Please click on the following link ${process.env.RP}${user.resetPasswordToken} to reset your password
                   . \n\n
                   If you did not request this, please ignore this email and your password will remain unchanged.\n`,
            html: `<b>Hi ${user.name} \n
            Please click on the following link ${process.env.RP}${user.resetPasswordToken} to reset your password
            . \n\n
            If you did not request this, please ignore this email and your password will remain unchanged.\n</b>`, // html body
          };
          transporter.sendMail(mail, (error, info) => {
            if (error) return res.status(500).json({ message: error.message });
            res.status(200).json({
              message: "A reset email has been sent to " + user.email + ".",
            });
          });
          res.status(200).json({
            message: "A reset email has been sent to " + user.email + ".",
          });
          //   });
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

// @route POST api/auth/reset
// @desc Reset Password - Validate password reset token and shows the password reset view
// @access Public
exports.reset = (req, res) => {
  User.findOne({
    resetPasswordToken: req.params.token,

    resetPasswordExpires: { $gt: Date.now() },
  })
    .then((user) => {
      if (!user)
        return res
          .status(401)
          .json({ message: "Password reset token is invalid or has expired." });

      //Redirect user to form with the email address
      //res.render("reset", { user });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

// @route POST api/auth/reset
// @desc Reset Password
// @access Public
exports.resetPassword = (req, res) => {
  User.findOne({
    resetPasswordToken: req.profile.resetPasswordToken,
    resetPasswordExpires: { $gt: Date.now() },
  }).then((user) => {
    if (!user)
      return res
        .status(401)
        .json({ message: "Password reset token is invalid or has expired." });

    //Set the new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    // Save
    user.save((err) => {
      if (err) return res.status(500).json({ message: err.message });

      // send email
      //   const mailOptions = {
      //     to: user.email,
      //     from: process.env.FROM_EMAIL,
      //     subject: "Your password has been changed",
      //     text: `Hi ${user.username} \n
      //                 This is a confirmation that the password for your account ${user.email} has just been changed.\n`,
      //   };

      //   sgMail.send(mailOptions, (error, result) => {
      //     if (error) return res.status(500).json({ message: error.message });

      res.status(200).json({ message: "Your password has been updated." });
    });
  });
};

exports.getToken = (req, res, next, token) => {
  User.findOne({
    resetPasswordToken: token,
  }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user found",
      });
    }
    req.profile = user;
    next();
  });
};
