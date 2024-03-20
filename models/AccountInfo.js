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

const AccountInfo = mongoose.model('AccountInfo', accountInfoSchema);

module.exports= AccountInfo;

