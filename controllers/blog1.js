const express = require('express');
const router = express.Router();
// const Blog = require('../models/blog');


// INDUCES

// INDEX ROUTE
// app.get('/', (req, res)  => {
//     res.render('index', { index: index});
// });
// // NEW ROUTE
// app.get('/newBlog', (req, res) => {
//     res.render('newBlog')
// });

// DELETE ROUTE

// const deleteBlog = (req, res) => {
//     const blogIndex = allBlogs.findIndex {
//         blog => req.params.index === blog.id
//     );
//     allBlogs.splice(blogIndex, 1);
//     allBlogs.sort((a, b) => parseInt(a.id) - parseInt(b.id));
//     res.redirect('/allBlogs');
// };


// UPDATE ROUTE
router.post('/updatePost', async (req, res) => {
    const { postId, postTitle, postContent, postImage, postDate } = req.body;
  
    try {
      let post = await Post.findById(postId);
  
      post.postTitle = postTitle;
      post.postContent = postContent;
      post.postImage = postImage;
      post.postDate = postDate;
  
      post = await post.save();
  
      res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });


//   SHOW ROUTe
//   app.get('/blog/:id', (req, res) => {
//       db.Blog.findbyId(req.params.id)
//       .then((fruit) => {
//     res.render("fruit-details",{
//         fruit: fruit,
//         currentUser: req.session.currentUser
//     });
//       })
//       .catch(()=> res.render("404"));
//   });
  
//   app.post('/editBlog', (req, res) => {
//     const { postTitle, postContent, postImage, postDate } = req.body;
//     db.Blog.findById(req.params.id).then((fruit) => {
//         res.render("edit-fruit", {
//             fruit: fruit,
//             currentUser: req.session.currentUser
//         });
//     });
// });
    // // Update account information in the database based on the received data
    // app.put("/:id", async(req, res) => { 
    //     res.body.
    // })




// const getAllBlogs = (req, res) => {
//     res.render('index', { allBlogs });
// };

// // renders the new page
// const newBlogs = (req, res) => {
//     res.render('newBlogs');
// };

// app.post('/editBlog', (req, res) => {
//     const { postTitle, postContent, postImage, postDate } = req.body;
  
//     // Update account information in the database based on the received data
//   });


// module.exports = {
//     getAllBlogs,
//     newBlog,
//     deleteBlog,
//     updateBlog,
//     createBlog,
//     editBlog,
//     showBlog,
//     checkIfValidParam,
// };

// const Blog = require('../models/blogPosts');


//   // CREATE a new blog post
//   async createBlog(req, res) {
//     const { title, content, author, date } = req.body;
// //     const newBlog = new Blog({ title, content, author, date });

//     try {
//       const savedBlog = await newBlog.save();
//       res.status(201).json(savedBlog);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   },

//   // READ all blog posts
//   async getAllBlogs(req, res) {
//     try {
//       const blogs = await Blog.find();
//       res.json(blogs);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   // READ a single blog post by ID
//   async getBlogById(req, res) {
//     const { id } = req.params;

//     try {
//       const blog = await Blog.findById(id);
//       if (!blog) {
//         return res.status(404).json({ message: 'Blog not found' });
//       }
//       res.json(blog);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   // UPDATE a blog post by ID
//   async updateBlog(req, res) {
//     const { id } = req.params;

//     try {
//       const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
//       if (!updatedBlog) {
//         return res.status(404).json({ message: 'Blog not found' });
//       }
//       res.json(updatedBlog);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   // DELETE a blog post by ID
//   async deleteBlog(req, res) {
//     const { id } = req.params;

//     try {
//       const deletedBlog = await Blog.findByIdAndDelete(id);
//       if (!deletedBlog) {
//         return res.status(404).json({ message: 'Blog not found' });
//       }
//       res.json({ message: 'Blog deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },
// };

// / CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits 1-55
*    Author: Billie Heidelberg, Justin White Andrew Deitrick
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/
