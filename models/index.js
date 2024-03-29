// all blogposts in one
require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);

});

// Export models and seed data to server.js
// module.exports = {
//     Blog: require('./blog'),
//     User: require('./user'),
//     seedProfile: require('./profile')
// }

// CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits - 1-12
*    Author: Billie Heidelberg, Justin White, Andrew Dietrick 
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/
    // Title: Authentication

// Authors: Justin White, Andrew Deitrick Billie Heidelberg
// Date: 3/24
// Code Version: Latest 3/18
// Availability: Authentication on GitHub

// *****************************************