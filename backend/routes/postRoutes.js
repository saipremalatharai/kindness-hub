const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// ADD POST
router.post("/", async (req, res) => {
  const { title, description } = req.body;

  const newPost = new Post({ title, description });
  await newPost.save();

  res.json({ message: "Post added successfully" });
});

// GET POSTS
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

module.exports = router;