// const allBlogs = require('../models/blogs');
// const path = require('path');

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

// // DELETE BLOG
// const deleteBlog = (req, res) => {
//     const blogIndex = allBlogs.findIndex {
//         blog => req.params.index === blog.id
//     );
//     allBlogs.splice(blogIndex, 1);
//     allBlogs.sort((a, b) => parseInt(a.id) - parseInt(b.id));
//     res.redirect('/allBlogs');
// };




// CREATES BLOG

// MAPS THE FORM DATA INTO STRUCTURE OF THE MODEL

// RENDERS EDIT OF THE BLOG


// SHOWS ALL DETAILS OF THE BLOG

// CHECKS PARAMETER IS VALID 

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

// module.exports = {
//   // CREATE a new blog post
//   async createBlog(req, res) {
//     const { title, content, author, date } = req.body;
//     const newBlog = new Blog({ title, content, author, date });

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
