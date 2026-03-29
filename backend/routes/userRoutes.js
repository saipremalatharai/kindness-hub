const express = require("express");
const router = express.Router();
const User = require("../models/user");

// CREATE USER (SIGNUP)
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;