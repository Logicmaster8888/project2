const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPosts')
const profile = require('../models/profile')
// edit profile pulls from Profile models

// EDIT PROFILE
router.get('/editProfile', (req , res) => {
    res.render('editProfile')
})
// DONE 

router.get('/blogPosts', (req, res) => {
   res.render('index.ejs', { blogPosts })
}) // shoots to index

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


