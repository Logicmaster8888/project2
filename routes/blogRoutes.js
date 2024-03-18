
const express = require("express");
const router = express.Router();
const { 
        getBlogs,
        createBlog,
        getBlog,
        updateBlog,
        deleteBlog,
    } = require("../controllers/blog1Controller");

// @desc Delete Blog
// @AbortController

// router.route("/api/blogs", (req, res) => {
//     res.status(200).json({ Message: "Can I send code through here?"});
// });

// GET ROUTE
router.route("/").get((req, res) => {
    res.status(200).json({message: `Get all Blogs`});
});

// POST ROUTE
router.route("/").post((req, res) => {
    res.status(200).json({message: `Create Blog`});
});

// CREATE ROUTE
router.route("/:id").get((req, res) => { 
    res.status(200).json({message: `Get Blog for ${req.params.id}`});
});

// UPDATE ROUTE
router.route("/:id",).put((req, res) => {
    res.status(200).json({message: `Update Blog for ${req.params.id}`});
});

// DELETE ROUTE
router.route("/:id",).delete((req, res) => {
    res.status(200).json({message: `Delete Blog for ${req.params.id}`});
});

// const {
//     getBlogs,
//     createBlog,
//     getBlog,
//     updateBlog,
//     deleteBlog,
// } = require("../controllers/blogController");


module.exports = router;