const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');


// Pulling from models database
const blogPosts = require('../models/blogPosts')
const profile = require('../models/profile')

// router.use(express.urlencoded({ extended: true }));
// INDEX
// router.get('/newPost', (req , res) => {
//     res.render('newPost', {  })
// }) // input function for newPosts and all existing past Blogposts or none of them just for the function



module.exports = router