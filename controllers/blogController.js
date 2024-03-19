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
router.get("/newBlog", (req, res) => {
  res.redirect("/newBlog"); // Redirect to the "/newblog" route
});

//New ROUTE
router.post('/blogPost/', async (req, res) => {
  try {
    // Create a new blog post instance based on the form data
    const newBlogPost = new BlogPost({
      title: req.body.title,
      content: req.body.content
    });

    // Save the new blog post to the database
    await newBlogPost.save();

    // Respond with a success message
    res.send('Blog post submitted successfully.');
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).send('Error submitting blog post: ' + error.message);
  } 
}); 

// CREATE - Add new blog post to database
router.post("/", async (req, res) => {
  await db.BlogPost.create(req.body).then((blogPost) =>
    res.redirect("/index" + blogPost._id)
  );
});

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt




// SHOW - Display details of a specific blog post
router.get("/:id", (req, res) => {
  db.BlogPost.findById(req.params.id)
    .then((blogPost) => {
      res.render("index", { blogPost: blogPost });
    })
    .catch(() => res.render("404"));
});

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt



// EDIT - Show form to edit a blog post
router.get("/edit:id/", (req, res) => {
  db.BlogPost.findById(req.params.id).then((blogPost) => {
    res.render("editBlog", { blogPost: blogPost });
  });
});

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt



// UPDATE - Update a specific blog post in the database
router.put("/:id", async (req, res) => {
  await db.BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (blogPost) => res.redirect("/index" + blogPost._id)
  );
});

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt



// DELETE - Remove a specific blog post from the database
router.delete("/:id", async (req, res) => {
  await db.BlogPost.findByIdAndDelete(req.params.id).then(() =>
    res.redirect("/blogPosts")
  );
});

// Title: REST API Tutorial (Node, Express & Mongo) #8 - PUT & DELETE Requests
// Author: The Net Ninja
// Source: YouTube
URL: https://www.youtube.com/watch?v=zBTPDAh8ABM&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt



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
