const express = require("express");
const router = express.Router();
const User = require("../models/user");


// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    res.json({ message: "User Registered Successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error registering user" });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.status(404).json({ message: "User not found" });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error logging in" });
  }
});


module.exports = router;