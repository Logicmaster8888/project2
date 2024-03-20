const mongoose = require('mongoose');

const profileInfoSchema = new mongoose.Schema({
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

const ProfileInfo = mongoose.model('ProfileInfo', profileInfoSchema); 
module.exports = ProfileInfo;
