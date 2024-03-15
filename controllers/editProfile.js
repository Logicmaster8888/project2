const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')

// INDEX
router.get('/editProfile', (req , res) => {
    res.render('editProfile.ejs', { blogPosts })
})
// edit profile is another function to think about
// show options to search, home, create new, logout
// correct wireframes and connecting pieces

// NEW - Send back a form to create a new blogPost
// variables all going together
router.get('/blogPost', (req, res) => {

})
// become unstoppable as a coder! Let's F Go! 

// same function as home.js and displaying

