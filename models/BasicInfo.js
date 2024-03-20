const mongoose = require('mongoose');

// Basic Information Schema
const basicInfoSchema = new mongoose.Schema({
    gender: {
        type: String,
        enum: ['male', 'female', 'unspecified'],
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
const BasicInfo = mongoose.model('BasicInfo', basicInfoSchema);

module.exports = BasicInfo;




