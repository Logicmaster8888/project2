const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPosts')
const profile = require('../models/profile')

// I need the database pull for all of the connecting pieces


// INDEX = HOME
// router.get('/', (req , res) => {
//     res.render('index.ejs',)
// }) // profile is home base

// Repetition for Home being home base and Index as well
router.get('/home', (req , res) => {
    res.render('index',)
})

// edit profile is another function to think about

// NEW - Send back a form to create a new blogPost
// variables all going together
router.get('/home/new', (req, res) => {
    res.render('newPost')
})

router.get('/home/editProfile', (req, res) => {
    res.render('editProfile')
})

// router.get('/', async (req, res) => {
//     try {
//       // Render the index page with user as null
//       res.render('index', { user: null }); // Assuming your index.ejs file is located in the views directory
//     } catch (error) {
//       console.error('Error rendering index page:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
// Endpoint


// which is the database?
// add in the module

// profile that is the stand alone
// blog posts

module.exports = router;
