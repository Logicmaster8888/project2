const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // blogs: [{ type: mongoose.Types.ObjectId, ref: 'Blog'}]
});

module.exports = mongoose.model('User', userSchema);

// // CITATION 
// /***************************************************************************************
// *    Title: SEIR-Pixel-Pandas/Fruits - 1-10 Framework
// *    Author: Billie Heidelberg, Justin White, Andrew Deitrick
// *    Date: 3-16/ 3-18/24
// *    Code version: Latest 3/18
// *    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
// *
// ***************************************************************************************/
// Title: Authentication

// Authors: Justin White, Andrew Deitrick
// Date: 3/24
// Code Version: Latest 3/18
// Availability: Authentication on GitHub