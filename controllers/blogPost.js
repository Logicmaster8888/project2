const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')

// INDEX
router.get('/blogPost', (req , res) => {
    res.render('index.ejs', { blogPosts })
})
// change blog post and home
// home
// work through it all

// These are the 4
// home - feed to see all the blog posts all together
// search - search for someone's specific posts
// blogPost - talk about their blog posts
// profile - show their account 
// Login after - that is all that I need. It comes to the point of Instagram as the example


// models only need blogposts
// it will contain all of them and building out that function
// I need to rewatch that video after I get caught up
// How do I generate everyone's blog posts in one place?
// randomize it?
// Use some cool tricks and break it down, and be creative!

// make it all done by that day. Get it all setup.
// This is fun!

// This is Easy ! - This is where I write now, recodified ~ LFG - Connection

// Get it all up and running
// controller for each of them.
// maybe have them for all of the search
// Make it all fun and designing
// Have it all written out and designed out and make it look amazing.
// With design and the functions. I can write them out without the other parts of the logic.
//committing and rebuilding the app this is where you can continue to function and build it out.
// NEW

router.get('/blogPost')