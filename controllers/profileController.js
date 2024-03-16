
const express = require('express')
const router = express.Router();

const fruits = require('../models/fruits')
const blogPosts = require('../models/blogPosts')
const profiles = require('../models/profile')


// PROFILE
router.get('/profile', (req , res) => {
    res.render('profile', { blogPosts });
});

// GET ROUTE
router.get('/blogPosts/new', (req, res) => {
    res.render('newPost.ejs')
})

// DELETE ROUTE
router.delete('/blogPosts/:index', (req, res) => {
    blogPosts.splice(req.params.index, 1)
    res.redirect('/blogPosts')
}) // models

// POST ROUTE
router.post("/blogPosts/", (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    blogPosts.push(req.body);
    res.render('index.ejs', { blogPosts });
});

// SHOW ROUTE
router.get('/blogPosts/:index', (req, res) => {
    console.log(req.params.index)
    const blogPost = blogPosts [req.params.index]
    res.render('show.ejs', {blogPost})
})

module.exports = router 

