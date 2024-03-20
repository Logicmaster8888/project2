const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;
