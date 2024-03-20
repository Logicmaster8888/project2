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

// --------------------------------------------------------------------------------------------------
// Citation: 
// Line: 1-22
// "Build a REST API with Node.js, Express, and MongoDB" by Traversy Media. 
// YouTube, 5 April 2018. https://www.youtube.com/watch?v=_7UQPve99r4
// Github: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmljNHZjaHpVZ1A5akxTQklWTFMxUnJEbzQ0UXxBQ3Jtc0tsTUxBN1V5VnNQQVR5RnhETEo1c0Z5eU91QmxaQ183SHZSVXRmUDNVQXB5VmRLNVhJZTZpR3VQc0loUTNEYjkySjlJWXhpZmRYNnJiLURZVjAwNXRMTWktcDlVY0pWQXlMYWFJUFVST2wtaU1iUWo4OA&q=https%3A%2F%2Fgithub.com%2Fharis-bit%2Fsimple-crud-app-backend&v=_7UQPve99r4
// Date Accessed: 3/15 - 3-20
// --------------------------------------------------------------------------------------------------