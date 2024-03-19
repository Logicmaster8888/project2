/* Require modules */
const express = require("express");
const router = express.Router();
const blogPost = require("../models/blogSeed");

// // INDEX - see all blog posts
router.get("/blogposts", (req, res) => {
  db.BlogPost.find().then((blogPosts) => {
    res.render("blogPost", { blogPosts: blogPosts });
  });
});

// NEW - Show form to create new blog post
router.get("/new", (req, res) => {
  res.render("index");
});

// CREATE - Add new blog post to database
router.post("/", async (req, res) => {
  await db.BlogPost.create(req.body).then((blogPost) =>
    res.redirect("/index" + blogPost._id)
  );
});

// SHOW - Display details of a specific blog post
router.get("/:id", (req, res) => {
  db.BlogPost.findById(req.params.id)
    .then((blogPost) => {
      res.render("index", { blogPost: blogPost });
    })
    .catch(() => res.render("404"));
});

// EDIT - Show form to edit a blog post
router.get("/edit:id/", (req, res) => {
  db.BlogPost.findById(req.params.id).then((blogPost) => {
    res.render("editBlog", { blogPost: blogPost });
  });
});

// UPDATE - Update a specific blog post in the database
router.put("/:id", async (req, res) => {
  await db.BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (blogPost) => res.redirect("/index" + blogPost._id)
  );
});

// DELETE - Remove a specific blog post from the database
router.delete("/:id", async (req, res) => {
  await db.BlogPost.findByIdAndDelete(req.params.id).then(() =>
    res.redirect("/blogPosts")
  );
});

module.exports = router;

// CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits 1-55
*    Author: Billie Heidelberg, Justin White Andrew Deitrick
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/
