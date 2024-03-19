const express = require('express');
const router = express.Router();



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