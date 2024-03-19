const mongoose = require('mongoose');

// Account Information Schema
const accountInfoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Basic Information Schema
const basicInfoSchema = new mongoose.Schema({
    gender: {
        type: String,
        enum: ['male', 'female', 'unspecified'],
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    hometown: {
        type: String,
        required: true
    }
});

// Contact Information Schema
const contactInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
});

// Education Information Schema
const educationInfoSchema = new mongoose.Schema({
    college: {
        type: String,
        required: true
    },
    highSchool: {
        type: String,
        required: true
    }
});

// Blog Post Schema
const blogPostSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    postImage: String,
    postDate: {
        type: Date,
        default: Date.now
    }
});

// Exporting all models
module.exports = {
    AccountInfo: mongoose.model('AccountInfo', accountInfoSchema),
    BasicInfo: mongoose.model('BasicInfo', basicInfoSchema),
    ContactInfo: mongoose.model('ContactInfo', contactInfoSchema),
    EducationInfo: mongoose.model('EducationInfo', educationInfoSchema),
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
};