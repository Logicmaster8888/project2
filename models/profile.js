const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    profilePicture: {
        type: String,
        required: false
    }
});

const Profile = mongoose.model('Profile', profileSchema); // Fixed the syntax here
module.exports = Profile;
