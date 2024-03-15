const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')

// INDEX
router.get('/blogPost', (req , res) => {
    res.render('index.ejs', { blogPosts })
})

// NEW - Send back a form to create a new blogPost
// variables all going together
router.get('/blogPost'), (req, res) => {
    res.render('blogPost.ejs')
}

