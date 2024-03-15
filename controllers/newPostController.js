const express = require('express')
const router = express.Router();

// Pulling from models database
const blogPosts = require('../models/blogPost')
const profile = require('../models/profile')

// INDEX
router.get('/newPost', (req , res) => {
    res.render('newPost.ejs', {  })
}) // input function for newPosts and all existing past Blogposts or none of them just for the function

// end point - Stand Alone Page
// router.get('/newPost/:name', (req, res) => {
//     // res.send({pokemon: pokemon.filter(p => p === req.params.name)})
//     res.send({pokemon: pokemon.filter(p => p === req.params.name)})
// }) // make app to router

// router.get('/blogPost', (req, res) => {
//     res.render('new.ejs')
// })

module.exports = router