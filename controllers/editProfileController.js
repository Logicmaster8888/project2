const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPosts')
const profile = require('../models/profile')
// edit profile pulls from Profile models

// INDEX
router.get('/editProfile', (req , res) => {
    res.render('editProfile.ejs', { Profile })
})

// Define route to render the edit.ejs file
router.get('/editProfile', (req, res) => {
    try {
      // Render the edit page with user as null
      res.render('editProfile.ejs', { user: null }); // Assuming your edit.ejs file is located in the views directory
    } catch (error) {
      console.error('Error rendering edit page:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  



// data grabbed from profile models
// edit profile is another function to think about
// show options to search, home, create new, logout
// correct wireframes and connecting pieces

// NEW - Send back a form to create a new blogPost
// variables all going together

// End Point 
// Stand Alone

// become unstoppable as a coder! Let's F Go! 

// same function as home.js and displaying

module.exports = router
