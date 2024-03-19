

// const express = require('express')
// const router = express.Router();

// const fruits = require('../models/fruits')
// const blogPosts = require('../models/blogPosts')


// // New POST 
// router.get('/login', (req , res) => {
//     res.render('login')
// })

// // GET ROUTE
// router.get('/blogPosts/new', (req, res) => {
//     res.render('newPost.ejs')
// })

// // DELETE ROUTE
// router.delete('/blogPosts/:id', (req, res) => {
//     blogPosts.splice(req.params.index, 1)
//     res.redirect('/blogPosts')
// }) // models

// // POST ROUTE
// router.post("/blogPosts/", (req, res) => {
//     req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
//     blogPosts.push(req.body);
//     res.render('index.ejs', { blogPosts });
// });

// // SHOW ROUTE
// router.get('/blogPosts/:index', (req, res) => {
//     console.log(req.params.index)
//     const blogPost = blogPosts [req.params.index]
//     res.render('show.ejs', {blogPost})
// })

// module.exports = router 


// // CITATION 
// /***************************************************************************************
// *    Title: SEIR-Pixel-Pandas/Fruits 1-38
// *    Author: Billie Heidelberg, Justin White, Andrew Deitrick
// *    Date: 3-16/ 3-18/24
// *    Code version: Latest 3/18
// *    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
// *
// ***************************************************************************************/