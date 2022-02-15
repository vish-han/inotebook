const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const jwt = require("jsonwebtoken");

const { body, validationResult } = require("express-validator");
const JWT_TOKEN = "imvishalchauhan";

//Route 1 :create a new user without login
router.post(
  "/create",
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
      //JWT token generation
      const authToken = jwt.sign(data, JWT_TOKEN);
      console.log(authToken);
      res.json({ authToken: authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occoured");
    }
  }
);
// Route 2 : endpoint to login a user
router.post(
  "/login",
  [
    body("email", "Enter a valid email address").isEmail(),
    body("password", "password cannot be blanked").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ error: "Wrong Credentials" });
      }
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        return res.status(400).json({ error: "Wrong Credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      //JWT token generation
      const authToken = jwt.sign(data, JWT_TOKEN);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occoured");
    }
  }
);
//route 3 : getting user details using post "api/auth/getuser". login required;
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occoured");
  }
});
module.exports = router;
