const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')
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


