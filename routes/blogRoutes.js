const express = require('express');
const router = express.Router();
// const blog = require('../controllers/blog'); // CONTROLLER

// router.get('', (req, res) => { // changed for app to Router
//     res.send("Hello World");
// });
// router.param('index', blog.checkIfValidParam);

router.get('/', (req, res) =>{
    res.render('index');
})

router.get('/newPost', (req, res) =>{
    res.render('newPost');
})

router.get('/editProfile', (req, res) =>{
    res.render('editProfile');
})
router.get('/profile', (req, res) =>{
    res.render('profile');
})

router.get('/editPosts', (req, res) =>{
    res.render('editPosts');
})

router.get('/blogPost', (req, res) =>{
    res.render('blogPost');
})

router.get('/login', (req, res) =>{
    res.render('login');
})

// SHOW PAGE
router.get('/404', (req, res) =>{
    res.render('404');
})

const {
getAllBlogs,
newBlog,
deleteBlog,
updateBlog,
createBlog,
editBlog,
showBlog,
 } = require ("../controllers/blog");

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