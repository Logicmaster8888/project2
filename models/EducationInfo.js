const mongoose = require('mongoose');

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

const EducationInfo = mongoose.model('EducationInfo', educationInfoSchema);

module.exports = EducationInfo;