const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')
const profile = require('../models/profile')
const login = require('../models/login')
// edit profile pulls from Profile models

// INDEX
router.get('/login', (req , res) => {
    //redirect 
    // res.render('editProfile.ejs', { Profile })
})

// End Point
// Stand Alone

module.exports = router