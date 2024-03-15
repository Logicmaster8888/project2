const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPosts')
const profile = require('../models/profile')

// about can just pull static - it's extra not needed
// edit profile pulls from Profile models

router.get('/about', (req, res) => {
    res.render('about.ejs');
  });

module.exports = router