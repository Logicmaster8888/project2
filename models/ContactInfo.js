const mongoose = require('mongoose');


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
const ContactInfo = mongoose.model('ContactInfo', contactInfoSchema);

module.exports = ContactInfo;