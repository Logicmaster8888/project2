const express = require('express');
const router = express.Router();

// const blogPosts = require('../models/blogPosts')
// const blogRoutes = require('./blogRoutes');
// const userRoutes = require('./userRoutes');
// Add other router imports as needed

// router.use('/blog', blogRoutes);
// router.use('/user', userRoutes);


// router.get('/', (req, res)=> {
//     res.render('blogPost')
// }) f

// CREATING ROUTE
// router.post('/', (req, res) => {

// })
// // HOME ROUTE // Front Facing Screen

// }); // Change from Sender to Render for specific page// Use res.render('index'); to render index.ejs page




// BLOG POST // SEE ALL
router.get('/blogPost/:id', (req, res) => { // changed for app to Router
    res.render("blogPosts");
});

// GETTING ONE ROUTE WORKS! 
// router.get('/blogPost/:id', (req, res) => {
//     res.send(req.params.id)
// });

// EDIT BLOG POSTS // Function is going to be inside of the page
router.get('blog/editPosts', (req, res) => { // changed for app to Router
    res.render("editPosts");
});

// NEW POST
router.get('blog/newPost', (req, res) => { // changed for app to Router
    res.render("newPost");
});

// PROFILE
router.get('blog/profile', (req, res) => { // changed for app to Router
    res.render("profile");
});

// EDIT PROFILE
router.get('/editProfile', (req, res) => { // changed for app to Router
    res.render("editProfile");
});

// // 404 ERROR
// router.get('/404', (req, res) => { // changed for app to Router
//     res.render("404");
// });

// EDIT LOGIN / LOGOUT  // Function is going to be inside of the page
router.get('blog/login', (req, res) => { // changed for app to Router
    res.render("login");
});


// Add other routers as needed

module.exports = router;

// CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits
*    Author: Billie Heidelberg, Justin White
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/