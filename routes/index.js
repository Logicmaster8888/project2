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
// *
// ***************************************************************************************/

// // Title: Express Tutorial - EJS Layouts and Partials tutorial
// Author: The Net Ninja
// Source: YouTube https://www.youtube.com/watch?v=lYVKbAn5Od0
// Date: March - 5-15th
// ttps://github.com/RaddyTheBrand/Node...


// Title: MongoDB Tutorial for Beginners - Full Course in 3 Hours
// Author: freeCodeCamp.org 
// Source: YouTube https://www.youtube.com/watch?v=-PTtTy8YwQA
// Date: March - 5-15th

// Title: Creating a CRUD API with Node.js, Express, and MongoDB
// Author: Traversy Media 
// Source: YouTube https://www.youtube.com/watch?v=fgTGADljAeg
// Date: arch - 5-17th
// ttps://github.com/RaddyTheBrand/Node...


// Title: Build a REST API with Node.js, Express, and MongoDB
// Author: Traversy Media 
// Source: YouTube https://www.youtube.com/watch?v=ofme2o29ngU
// Date: Accessed on arch - 5-15th
// https://github.com/WebDevSimplified/Y...


// Title: Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial
// Author: Code With Mosh https://www.youtube.com/watch?v=9OfL9H6AmhQ
// Source: YouTube
//  https://github.com/devtamin/Node-API
//  arch - 5-15th


// Title: JavaScript ES6 Modules
// Author: The Net Ninja
// Source: YouTube https://www.youtube.com/watch?v=H9M02of22z4&t=1510s
// https://github.com/dmalvia/Express_Mo...
// arch - 5-15th

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: Static ASSETS on GitHub (Note: I assumed this is part of the MVC and EJS lesson)
// Title: REST: CREATE
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/7.%20REST:%20New%20%2B%20Create%20Routes.md

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST: CREATE on GitHub
// Title: REST: DELETE
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/8.%20REST:%20Delete.md
// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST: DELETE on GitHub
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/10.%20EJS%20Partials.md

// Title: EJS Partials

// Authors: Billie Heidelberg, Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: EJS Partials on GitHub
// Title: CRUD with Mongosh
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Mongo-Mongoose-Fundamentals/blob/main/Lessons/3.%20CRUD%20with%20Mongosh.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: CRUD with Mongosh on GitHub
// Title: REST APIs and CRUD
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Internet-Fundamentals/blob/main/Lessons/3.%20REST%20APIs%20%26%20CRUD.md

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: REST APIs and CRUD on GitHub
// Title: Authentication
// https://git.generalassemb.ly/SEIR-Pixel-Pandas/Express-Fundamentals/blob/main/Lessons/12.%20User%20Auth/BuildMe1_intro.md