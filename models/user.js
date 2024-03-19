const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // blogs: [{ type: mongoose.Types.ObjectId, ref: 'Blog'}]
});

module.exports = mongoose.model('User', userSchema);

// // CITATION 
// /***************************************************************************************
// *    Title: SEIR-Pixel-Pandas/Fruits
// *    Author: Billie Heidelberg, Justin White
// *    Date: 3-16/ 3-18/24
// *    Code version: Latest 3/18
// *    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
// *
// ***************************************************************************************/
