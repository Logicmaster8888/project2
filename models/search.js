// all blogposts in one

const mongoose = require('mongoose');

const allBlogPostsSchema = new mongoose.Schema({
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost'
    }]
});

module.exports = mongoose.model('AllBlogPosts', allBlogPostsSchema);
// check the function for what is available

