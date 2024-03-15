const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPosts')
const profile = require('../models/profile')

// INDEX
router.get('/newPost', (req , res) => {
    res.render('newPost.ejs', {  })
}) // input function for newPosts and all existing past Blogposts or none of them just for the function

// Define a route to handle the form submission and create a new blog post
router.get('/newPost', (req, res) => {
    try {
      // Assuming you have an array of blog posts named blogPosts
      const blogPosts = [
        {
          title: 'Sample Blog Post 1',
          content: 'This is the content of the first blog post.',
          image: 'path/to/image1.jpg'
        },
        {
          title: 'Sample Blog Post 2',
          content: 'This is the content of the second blog post.',
          image: 'path/to/image2.jpg'
        },
        // Add more blog posts as needed
      ];
  
      // Render the create-post page with blogPosts array
      res.render('newPost.ejs', { blogPosts: blogPosts }); // Pass blogPosts as an object property
    } catch (error) {
      console.error('Error rendering create-post page:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
// end point - Stand Alone Page
// router.get('/newPost/:name', (req, res) => {
//     // res.send({pokemon: pokemon.filter(p => p === req.params.name)})
//     res.send({pokemon: pokemon.filter(p => p === req.params.name)})
// }) // make app to router

// router.get('/blogPost', (req, res) => {
//     res.render('new.ejs')
// })

module.exports = router