const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')
const Profile = require('../models/profile')

// I need the database pull for all of the connecting pieces


// INDEX = HOME
router.get('/', (req , res) => {
    res.render('index.ejs',)
}) // profile is home base

// Repetition for Home being home base and Index as well
router.get('/home', (req , res) => {
    res.render('index.ejs',)
})

// edit profile is another function to think about

// NEW - Send back a form to create a new blogPost
// variables all going together
router.get('/home/new', (req, res) => {
    res.render('newPost.ejs')
})

router.get('/home/editProfile', (req, res) => {
    res.render('editProfile.ejs')
})
// Endpoint


// which is the database?
// add in the module

// profile that is the stand alone
// blog posts

module.exports = router