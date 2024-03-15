const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')
const profile = require('../models/profile')

// INDEX
router.get('/', (req , res) => {
    res.render('index.ejs', {  })
}) // profile is home base - Index = Home.ejs

router.get('/profile', (req, res) => {
    res.render('profile.ejs', { profile })
})

router.get('/profile/editProfile', (req, res) => {
    res.render('editprofile.ejs', { profile })
})

// Endpoint

// search or have entire database for showing all of my what is there. It's the first step of the local versus the database.
// that's where it gets tricky and setup the forms to have them all added. Make sure that I have them all by the form of what is available.
// This will be the answers and attaching the new set of what is available. But connected and having them all written out. I will have them all connected.
// Home will be all the blogpages together that is what the connecting piece is.

// That is the marketing piece to what the blog part of the website is.

// Now that's solid functionality. Displaying it off what is there. Static first and then building out more for what is available. Race against time. Go at 6:30 that is when I will go and bring about more to code with.

// arch left me as a friend.

module.exports = router