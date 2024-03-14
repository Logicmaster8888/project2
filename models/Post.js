// models/post.js
const mongoose = require('mongoose');

// Define the schema for your blog post
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

// Define a model using the schema
const Post = mongoose.model('Post', postSchema);

// Export the model
module.exports = Post;
