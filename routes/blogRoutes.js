const express = require('express');
const router = express.Router();
const blog = require('../controllers/blog'); // CONTROLLER


router.param('index', blog.checkIfValidParam);

// INDEX PAGE
router.get('/', blog.getAllBlogs);

// NEW PAGE
router.get('/new', blog.newBlog);

// DELETE PAGE
router.delete('/:id', blog.deleteBlog)

// UPDATE PAGE
router.patch('/:id', blog.updateBlog);

// CREATE ROUTE
router.post('/', blog.createBlog);

// EDIT ROUTE
router.get('/:id/edit', blog.editBlog);

// SHOW PAGE
router.get('/:id', blog.showBlog);

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