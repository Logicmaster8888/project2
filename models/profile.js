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

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
