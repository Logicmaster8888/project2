// routes/posts.js

const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Import the Post model

// Route to retrieve all posts
router.get('/posts', async (req, res) => {
  try {
    // Retrieve all posts from the database
    const posts = await Post.find();
    res.json(posts); // Send the retrieved posts as JSON response
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
