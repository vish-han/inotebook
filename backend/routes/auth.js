const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const JWT_TOKEN = "imvishalchauhan";

//create a new user without login
router.post(
  "/",
  [
    body("email", "Enter a valid email address").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors return an error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the email exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res.status(400).json({ error: "user already exist" });
      }
      const salt = await bcrypt.genSalt(10);

      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_TOKEN);
      console.log(authToken);
      res.json({ authToken: authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occoured");
    }
  }
);
module.exports = router;
