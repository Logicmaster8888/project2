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

module.exports = mongoose.model('blogPosts', blogPostSchema);

// // CITATION 
// /***************************************************************************************
// *    Title: SEIR-Pixel-Pandas/Fruits -1 -23
// *    Author: Billie Heidelberg, Justin White Andrew Deitrick
// *    Date: 3-16/ 3-18/24
// *    Code version: Latest 3/18
// *    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
// *
// ***************************************************************************************/