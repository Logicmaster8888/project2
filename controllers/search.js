const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')

// INDEX
router.get('/blogPost', (req , res) => {
    res.render('index.ejs', { blogPosts })
})

router.get('/blogPost'), (req, res) => {
    res.render('new.ejs')
}