const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  // Other fields as needed
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
