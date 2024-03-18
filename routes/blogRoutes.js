
const express = require("express");
const router = express.Router();
// const { 
//         getBlogs,
//         createBlog,
//         getBlog,
//         updateBlog,
//         deleteBlog,
//     } = require('../controllers/blog1Controller');

// // @desc Delete Blog
// // @AbortController

// // router.route("/api/blogs", (req, res) => {
// //     res.status(200).json({ Message: "Can I send code through here?"});
// // });

// HOME ROUTE // Front Facing Screen
router.get('', (req, res) => { // changed for app to Router
    res.render("index");
}); // Change from Sender to Render for specific page// Use res.render('index'); to render index.ejs page

// BLOG POST
router.get('/blogPost', (req, res) => { // changed for app to Router
    res.render("blogPost");
});

// EDIT BLOG POSTS // Function is going to be inside of the page
router.get('/editPosts', (req, res) => { // changed for app to Router
    res.render("editPosts");
});

// NEW POST
router.get('/newPost', (req, res) => { // changed for app to Router
    res.render("newPost");
});

// PROFILE
router.get('/profile', (req, res) => { // changed for app to Router
    res.render("profile");
});

// EDIT PROFILE
router.get('/editProfile', (req, res) => { // changed for app to Router
    res.render("editProfile");
});

// 404 ERROR
router.get('/404', (req, res) => { // changed for app to Router
    res.render("404");
});

// EDIT LOGIN / LOGOUT  // Function is going to be inside of the page
router.get('/login', (req, res) => { // changed for app to Router
    res.render("login");
});


module.exports = router;

// // GET ROUTE
// router.route("/").get(getBlogs);

// // POST ROUTE
// router.route("/").post(createBlog);

// // CREATE ROUTE
// router.route("/:id").get(getBlog);

// // UPDATE ROUTE
// router.route("/:id",).put(updateBlog);

// // DELETE ROUTE
// router.route("/:id",).delete(deleteBlog);

// // const {
// //     getBlogs,
// //     createBlog,
// //     getBlog,
// //     updateBlog,
// //     deleteBlog,
// // } = require("../controllers/blogController");


// module.exports = router;