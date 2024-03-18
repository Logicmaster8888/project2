
const express = require("express");
const router = express.Router();
const { 
        getBlogs,
        createBlog,
        getBlog,
        updateBlog,
        deleteBlog,
    } = require('../controllers/blog1Controller');

// @desc Delete Blog
// @AbortController

// router.route("/api/blogs", (req, res) => {
//     res.status(200).json({ Message: "Can I send code through here?"});
// });

// GET ROUTE
router.route("/").get(getBlogs);

// POST ROUTE
router.route("/").post(createBlog);

// CREATE ROUTE
router.route("/:id").get(getBlog);

// UPDATE ROUTE
router.route("/:id",).put(updateBlog);

// DELETE ROUTE
router.route("/:id",).delete(deleteBlog);

// const {
//     getBlogs,
//     createBlog,
//     getBlog,
//     updateBlog,
//     deleteBlog,
// } = require("../controllers/blogController");


module.exports = router;