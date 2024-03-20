const mongoose = require('mongoose');
const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now, 
    },
});

const BlogPost = mongoose.model('blogPosts', blogPostSchema);
module.exports = BlogPost;

// // CITATION 
// /***************************************************************************************
// *    Title: SEIR-Pixel-Pandas/Fruits -1 -23
// *    Author: Billie Heidelberg, Justin White Andrew Deitrick
// *    Date: 3-16/ 3-18/24
// *    Code version: Latest 3/18
// *    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
// *
// ***************************************************************************************/

// --------------------------------------------------------------------------------------------------
// Citation: 
// Line: 1-23
// "Build a REST API with Node.js, Express, and MongoDB" by Traversy Media. 
// YouTube, 5 April 2018. https://www.youtube.com/watch?v=_7UQPve99r4
// Github: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmljNHZjaHpVZ1A5akxTQklWTFMxUnJEbzQ0UXxBQ3Jtc0tsTUxBN1V5VnNQQVR5RnhETEo1c0Z5eU91QmxaQ183SHZSVXRmUDNVQXB5VmRLNVhJZTZpR3VQc0loUTNEYjkySjlJWXhpZmRYNnJiLURZVjAwNXRMTWktcDlVY0pWQXlMYWFJUFVST2wtaU1iUWo4OA&q=https%3A%2F%2Fgithub.com%2Fharis-bit%2Fsimple-crud-app-backend&v=_7UQPve99r4
// Date Accessed: 3/15 - 3-20
// --------------------------------------------------------------------------------------------------