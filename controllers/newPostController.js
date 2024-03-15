const express = require('express')
const router = express.Router();
const bodyPartser = require('body-parser');

// Pulling from models database
const blogPosts = require('../models/blogPosts')
const profile = require('../models/profile')

router.use(express.urlencoded({ extended: true }));
// INDEX
router.get('/newPost', (req , res) => {
    res.render('newPost.ejs', {  })
}) // input function for newPosts and all existing past Blogposts or none of them just for the function

// Handle form submission and create a new blog post
router.get('/newPost', (req, res) => {
    try {
        // Extract data from request body
      const { title, content } = req.body;
      // Logic to Save the new blog post to the database 
        blogPosts.updateSearchIndex({ title, content});  
        // Redirect to the homepage and display a success message    
      res.redirect('/');

    } catch (error) {
      console.error('Error rendering blog post', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
// end point - Stand Alone Page

module.exports = router