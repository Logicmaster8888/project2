const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    accountName: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'unspecified']
    },
    birthday: {
        type: Date
    },
    hometown: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    instagram: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    website: {
        type: String
    },
    college: {
        type: String
    },
    highSchool: {
        type: String
    }
});

module.exports = mongoose.model('Profile', profileSchema);

// CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits
*    Author: Billie Heidelberg, Justin White
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/