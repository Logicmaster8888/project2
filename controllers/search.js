const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')

// INDEX
router.get('/search', (req , res) => {
    res.render('search.ejs', { blogPosts })
})
// need all blogPosts

// new a new to create a blogPost
router.get('/search/new', (req, res) => {
    res.render('newPost.ejs')
})
// have a new Post for each of the files because we need to have them drive new Post Content
// Sign In have their own posts and own files, that is the hard part. For real. Authentication

